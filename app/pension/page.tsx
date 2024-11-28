"use client";

import { useState } from "react";
import { Plus } from "../_components/icon/plus";
import { Input } from "../_components/input";
import { Wave } from "../_components/svgs/wave";
import { Graph } from "../_components/graph";

export default function PensionCalculator() {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [retirementAge, setRetirementAge] = useState<number | undefined>(
    undefined
  );
  const [interest, setInterest] = useState<number | undefined>(undefined);
  const [savings, setSavings] = useState<number | undefined>(undefined);
  const [futureSavings, setFutureSavings] = useState<
    {
      age: number | undefined;
      amount: number | undefined;
      monthly: boolean;
    }[]
  >([{ age: undefined, amount: undefined, monthly: true }]);
  const [expenses, setExpenses] = useState([{ age: null, amount: "" }]);
  const [graphData, setGraphData] = useState<
    { age: number; savings: number }[]
  >([]);

  const calculate = () => {
    if (retirementAge && age && interest && savings) {
      const yearsUntilRetirement = retirementAge - age;
      let savingsGraph = new Array<{ age: number; savings: number }>(
        yearsUntilRetirement + 1
      );
      savingsGraph[0] = { age, savings };
      let savingsThisAge = futureSavings[0].amount;

      // Every year until retirement, add yearly future savings + add 7% interest
      for (let i = 1; i < savingsGraph.length; i++) {
        const previousValue = savingsGraph[i - 1];
        const age = previousValue.age + 1;

        // Check if futureSavings is changing on this age
        savingsThisAge =
          futureSavings.find((e) => e.age === age)?.amount ?? savingsThisAge;
        if ((savingsThisAge && savingsThisAge >= 0) || savingsThisAge === 0) {
          // Add the next value to the graph
          savingsGraph[i] = {
            age,
            savings: Math.round(
              (previousValue.savings + savingsThisAge) * 1.07
            ),
          };
        }
      }
      setGraphData(savingsGraph);
    }
  };

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
            <h3 className="text-orange-300 font-extrabold">Expenses</h3>
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
                        return { ...exp, amount: value };
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
                setExpenses((prev) => [...prev, { age: null, amount: "" }])
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
/*
<Input id="yearlyExpenses" label="Yearly expenses" required />
          <Input id="savingPerMonth" label="Saving / month" required />

*/
