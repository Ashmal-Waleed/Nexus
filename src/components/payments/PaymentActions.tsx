import { useState } from "react";

export default function PaymentActions({
  onTransaction,
}: {
  onTransaction: (tx: any) => void;
}) {
  const [amount, setAmount] = useState(0);

  const createTx = (type: "deposit" | "withdraw" | "transfer") => {
    onTransaction({
      id: Date.now().toString(),
      type,
      amount,
      sender: "You",
      receiver: type === "transfer" ? "Other User" : "Wallet",
      status: "Completed",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-3">
      <h3 className="font-medium">Actions</h3>

      <input
        type="number"
        placeholder="Amount"
        className="border p-2 rounded w-full"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div className="flex gap-2">
        <button onClick={() => createTx("deposit")} className="btn-primary">
          Deposit
        </button>
        <button onClick={() => createTx("withdraw")} className="btn-secondary">
          Withdraw
        </button>
        <button onClick={() => createTx("transfer")} className="btn-secondary">
          Transfer
        </button>
      </div>
    </div>
  );
}
