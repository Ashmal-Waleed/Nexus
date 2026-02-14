import { useState } from "react";
import WalletCard from "../../components/payments/WalletCard";
import PaymentActions from "../../components/payments/PaymentActions";
import TransactionTable from "../../components/payments/TransactionTable";
import FundDealModal from "../../components/payments/FundDealModal";
import { Transaction } from "../../types";

export default function PaymentsPage() {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleTransaction = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);

    if (tx.type === "deposit") setBalance(balance + tx.amount);
    if (tx.type === "withdraw") setBalance(balance - tx.amount);
    if (tx.type === "transfer") setBalance(balance - tx.amount);
  };

  const handleFunding = (amount: number) => {
    setBalance(balance - amount);

    setTransactions((prev) => [
      {
        id: Date.now().toString(),
        type: "transfer",
        amount,
        sender: "Investor",
        receiver: "Entrepreneur",
        status: "Completed",
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <div className="p-6 space-y-6">
      <WalletCard balance={balance} />

      <PaymentActions onTransaction={handleTransaction} />

      <FundDealModal onFund={handleFunding} />

      <TransactionTable transactions={transactions} />
    </div>
  );
}
