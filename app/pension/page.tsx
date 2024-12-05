"use client";

import { useEffect, useState } from "react";
import { Plus } from "../_components/icon/plus";
import { Input } from "../_components/input";
import { Wave } from "../_components/svgs/wave";
import { Graph } from "../_components/graph";

type MoneyChanges = {
  age: number | undefined;
  amount: number | undefined;
  monthly: boolean;
};

export default function PensionCalculator() {
  const [age, setAge] = useState<number | undefined>(30);
  const [retirementAge, setRetirementAge] = useState<number | undefined>(48);
  const [interest, setInterest] = useState<number | undefined>(10);
  const [savings, setSavings] = useState<number | undefined>(undefined);
  const [futureSavings, setFutureSavings] = useState<MoneyChanges[]>([
    { age: undefined, amount: undefined, monthly: true },
  ]);
  const [expenses, setExpenses] = useState<MoneyChanges[]>([
    { age: undefined, amount: undefined, monthly: true },
  ]);
  const [graphData, setGraphData] = useState<
    { age: number; savings: number }[]
  >([]);

  const convertAmountToYearly = (moneyChanges?: MoneyChanges) => {
    if (!moneyChanges || !moneyChanges.amount) return 0;
    if (moneyChanges.monthly) return moneyChanges.amount * 12;
    return moneyChanges.amount;
  };

  const calculate = () => {
    /*console.log("calculate");
    console.log("retirementAge", retirementAge);
    console.log("age", age);
    console.log("interest", interest);
    console.log("savings", savings);
    console.log("futureSavings", futureSavings);
    console.log("expenses", convertAmountToYearly(expenses[0]));*/
    if (
      retirementAge &&
      age &&
      interest &&
      savings &&
      futureSavings &&
      expenses
    ) {
      let savingsThisAge = futureSavings[0];
      let expensesThisAge = expenses[0];
      const interestForCalculation = interest / 100 + 1; // convert 10% to 1.1 to use in calculation
      const dataPoints = [];

      // TODO: one for loop for both savings and expenses
      for (let i = 0; i <= 100 - age; i++) {
        // First value in the data should be the current savings
        if (i === 0) {
          dataPoints.push({
            age,
            savings,
          });
        } else {
          const previousValue: { age: number; savings: number } =
            dataPoints[i - 1];
          const nextAge = previousValue.age + 1;

          // Age is before retirement = add savings to graphData
          if (nextAge < retirementAge) {
            console.log("before retirement");
            // Check if savings amount is changing on this age
            savingsThisAge =
              futureSavings.find((e) => e.age === age) ?? savingsThisAge;
            const savingsPerYearThisAge = convertAmountToYearly(savingsThisAge);
            if (
              (savingsPerYearThisAge && savingsPerYearThisAge >= 0) ||
              savingsPerYearThisAge === 0
            ) {
              // Add the next value to the graph
              dataPoints.push({
                age: nextAge,
                savings: Math.round(
                  (previousValue.savings + savingsPerYearThisAge) *
                    interestForCalculation
                ),
              });
            }
          }
          // Age is after retirement = remove expenses and add new amount to graphData
          else {
            expensesThisAge =
              expenses.find((e) => e.age === age) ?? expensesThisAge;
            const expensesPerYearThisAge =
              convertAmountToYearly(expensesThisAge);
            if (
              (expensesPerYearThisAge && expensesPerYearThisAge >= 0) ||
              expensesPerYearThisAge === 0
            ) {
              dataPoints.push({
                age: nextAge,
                savings:
                  (previousValue.savings - expensesPerYearThisAge) *
                  interestForCalculation,
              });
            }
          }
        }
      }
      console.log(dataPoints);
      setGraphData(dataPoints);
    }
  };

  useEffect(() => {
    calculate();
  }, [age, retirementAge, interest, savings, futureSavings, expenses]);

  const isNumber = (value: any): value is Number => {
    return !isNaN(value);
  };

  return (
    <main className="flex flex-col">
      <div className="bg-white dark:bg-black grid sm:grid-cols-2 gap-4  p-4 sm:p-10 ">
        <div className="flex flex-col gap-4 rounded-lg">
          <div className="flex flex-col gap-3 border-4 border-blue-400 rounded-lg p-2">
            <h3 className="text-blue-400 font-extrabold">
              Age, retirement age, interest
            </h3>
            <div className="flex gap-2">
              <Input
                id="age"
                label="Age"
                required
                value={age}
                type="number"
                onChange={(value: string) => {
                  if (isNumber(value)) setAge(Number(value));
                }}
              />
              <Input
                id="retirementAge"
                label="Retriement age"
                required
                className="min-w-[130px]"
                value={retirementAge}
                type="number"
                onChange={(value: string) => {
                  if (isNumber(value)) setRetirementAge(Number(value));
                }}
              />
              <Input
                id="interest"
                label="Interest %"
                required
                value={interest}
                type="number"
                onChange={(value: string) => {
                  if (isNumber(value)) setInterest(Number(value));
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 border-4 border-green-400 rounded-lg p-2">
            <h3 className="text-green-400 font-extrabold">Savings</h3>
            <Input
              id="savings"
              label="Already saved"
              value={savings}
              type="number"
              onChange={(value: string) => {
                if (isNumber(value)) setSavings(Number(value));
              }}
            />
            <p className="text-green-400 font-extrabold">Future savings</p>
            {futureSavings.map((saving, index) => (
              <div key={`futureSavings-${index}`} className="flex gap-2">
                {index !== 0 ? (
                  <Input
                    id={`futureSavingsAge-${index}`}
                    label="Change at age"
                    value={saving.age}
                    type="number"
                    onChange={(value) => {
                      if (isNumber(value))
                        setFutureSavings((prev) => {
                          return prev.map((saving, i) => {
                            if (index === i) {
                              return { ...saving, age: Number(value) };
                            }
                            return saving;
                          });
                        });
                    }}
                  />
                ) : null}
                <Input
                  key={`futureSavings-${index}`}
                  id={`futureSavingsAmout-${index}`}
                  label="Amount"
                  value={saving.amount}
                  type="number"
                  onChange={(value) => {
                    if (isNumber(value))
                      setFutureSavings((prev) => {
                        return prev.map((saving, i) => {
                          if (index === i) {
                            return { ...saving, amount: Number(value) };
                          }
                          return saving;
                        });
                      });
                  }}
                />
              </div>
            ))}
            <button
              className="w-min self-end"
              onClick={() =>
                setFutureSavings((prev) => [
                  ...prev,
                  { age: undefined, amount: undefined, monthly: true },
                ])
              }
            >
              <Plus />
            </button>
          </div>
          <div className="flex flex-col gap-3 border-4 border-orange-300 rounded-lg p-2">
            <h3 className="text-orange-300 font-extrabold">
              Expenses after retirement
            </h3>
            {expenses.map((expense, index) => (
              <Input
                key={`expense-${index}`}
                id={`expense-${index}`}
                label="Expenses"
                value={expense.amount}
                type="number"
                onChange={(value) =>
                  setExpenses((prev) => {
                    return prev.map((exp, i) => {
                      if (index === i) {
                        return { ...exp, amount: Number(value) };
                      }
                      return exp;
                    });
                  })
                }
              />
            ))}
            <button
              className="w-min self-end"
              onClick={() =>
                setExpenses((prev) => [
                  ...prev,
                  { age: undefined, amount: undefined, monthly: true },
                ])
              }
            >
              <Plus />
            </button>
          </div>
        </div>
        <div className="border-4 border-pink-400 rounded-lg p-2">
          <h3 className="text-pink-400 font-extrabold">Result</h3>
          <div className="flex flex-col justify-center items-center h-full">
            {graphData.length > 0 ? (
              <Graph
                inputData={graphData.map((d) => ({ x: d.age, y: d.savings }))}
                retirementAge={retirementAge}
                changesInSavnings={futureSavings.map((savings) => savings.age)}
                changesInExpenses={expenses.map((expense) => expense.age)}
              />
            ) : null}
            <button
              className=" text-lg text-pink-400 bg-pink-50 rounded-full py-2 px-4 hover:bg-pink-100"
              onClick={calculate}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
      <Wave
        upsideDown
        viewBox="200 500 200 70"
        colors={{
          front: "fill-white dark:fill-black",
          back: "fill-orange-300",
        }}
      />
    </main>
  );
}
