import { Input } from "../_components/input";
import { Wave } from "../_components/svgs/wave";

export default function PensionCalculator() {
  return (
    <main className="flex flex-col">
      <Wave
        viewBox="200 500 200 70"
        colors={{
          front: "fill-white dark:fill-black",
          back: "fill-orange-300",
        }}
      />
      <div className="bg-white dark:bg-black grid grid-cols-2 gap-4  p-4 sm:p-10 ">
        <div className="flex flex-col gap-4 rounded-lg">
          <div className="flex flex-col gap-3 border-4 border-blue-400 rounded-lg p-2">
            <h3 className="text-blue-400 font-extrabold">
              Age, retirement age, interest
            </h3>
            <div className="flex gap-2">
              <Input id="age" label="Age" required />
              <Input id="retirementAge" label="Retriement age" required />
              <Input id="interest" label="Interest %" required value={7} />
            </div>
          </div>
          <div className="flex flex-col gap-3 border-4 border-green-400 rounded-lg p-2">
            <h3 className="text-green-400 font-extrabold">Savings</h3>
            <Input id="savings" label="Already saved" />
            <Input id="futureSavings" label="Furture savings" />
            <button>Add changes</button>
          </div>
          <div className="flex flex-col gap-3 border-4 border-orange-300 rounded-lg p-2">
            <h3 className="text-orange-300 font-extrabold">Expenses</h3>
            <Input id="expenses" label="Expenses" />
            <button>Add changes</button>
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
