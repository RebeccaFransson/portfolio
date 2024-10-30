"use client";

import { useState } from "react";
import { Plus } from "../_components/icon/plus";
import { Input } from "../_components/input";
import { Wave } from "../_components/svgs/wave";

export default function PensionCalculator() {
  const [age, setAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [interest, setInterest] = useState("");
  const [savings, setSavings] = useState("");
  const [futureSavings, setFutureSavings] = useState<
    {
      age: string | null;
      amount: string;
      monthly: boolean;
    }[]
  >([{ age: null, amount: "", monthly: true }]);
  const [expenses, setExpenses] = useState([{ age: null, amount: "" }]);

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
                onChange={(value: string) => setAge(value)}
              />
              <Input
                id="retirementAge"
                label="Retriement age"
                required
                className="min-w-[130px]"
                value={retirementAge}
                onChange={(value: string) => setRetirementAge(value)}
              />
              <Input
                id="interest"
                label="Interest %"
                required
                value={interest}
                onChange={(value: string) => setInterest(value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 border-4 border-green-400 rounded-lg p-2">
            <h3 className="text-green-400 font-extrabold">Savings</h3>
            <Input
              id="savings"
              label="Already saved"
              value={savings}
              onChange={(value: string) => setSavings(value)}
            />
            {futureSavings.map((saving, index) => (
              <>
                <Input
                  id={`futureSavingsAge-${index}`}
                  label="Furture savings"
                  value={saving.amount}
                  onChange={(value) =>
                    setFutureSavings((prev) => {
                      return prev.map((saving, i) => {
                        if (index === i) {
                          return { ...saving, age: value };
                        }
                        return saving;
                      });
                    })
                  }
                />
                <Input
                  id={`futureSavingsAmount-${index}`}
                  label="Furture savings"
                  value={saving.amount}
                  onChange={(value) =>
                    setFutureSavings((prev) => {
                      return prev.map((saving, i) => {
                        if (index === i) {
                          return { ...saving, amount: value };
                        }
                        return saving;
                      });
                    })
                  }
                />
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  type="button"
                >
                  {saving.monthly ? "Montly" : "Yearly"}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Montly
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Yearly
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ))}
            <button
              className="w-min self-end"
              onClick={() =>
                setFutureSavings((prev) => [...prev, { age: null, amount: "" }])
              }
            >
              <Plus />
            </button>
          </div>
          <div className="flex flex-col gap-3 border-4 border-orange-300 rounded-lg p-2">
            <h3 className="text-orange-300 font-extrabold">Expenses</h3>
            {expenses.map((expense, index) => (
              <Input
                id="expenses"
                label="Expenses"
                value={expense.amount}
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
