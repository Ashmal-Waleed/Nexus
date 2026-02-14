import { Transaction } from "../../types";

export default function TransactionTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h3 className="font-medium mb-4">Transaction History</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>Amount</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b">
              <td>${tx.amount}</td>
              <td>{tx.sender}</td>
              <td>{tx.receiver}</td>
              <td>{tx.status}</td>
              <td>{new Date(tx.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
