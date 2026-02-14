export default function WalletCard({ balance }: { balance: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm flex flex-col justify-center min-w-[150px] gap-1">
      <span className="text-[12px] text-gray-500 leading-none">
        Wallet Balance
      </span>
      <span className="text-lg font-semibold text-gray-900 leading-tight">
        ${balance.toLocaleString()}
      </span>
    </div>
  );
}
