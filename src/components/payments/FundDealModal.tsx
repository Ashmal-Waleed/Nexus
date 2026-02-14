import { useState } from "react";

export default function FundDealModal({
  onFund,
}: {
  onFund: (amount: number) => void;
}) {
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-3">
      <h3 className="font-medium">Fund Deal</h3>

      <input
        type="number"
        placeholder="Investment amount"
        className="border p-2 rounded w-full"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        className="btn-primary w-full"
        onClick={() => onFund(amount)}
      >
        Send to Entrepreneur
      </button>
    </div>
  );
}
