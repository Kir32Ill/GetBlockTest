"use client";
import { useBalances } from "@/hooks/useBalances";

export const BalanceCard = () => {
  const { eth, usdt, isConnected, isLoading } = useBalances();

  if (!isConnected) return null;

  return (
    <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
      <h3 className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">Your Assets</h3>
      
      <div className="space-y-4">
        {/* ETH Row */}
        <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">Ξ</div>
            <span className="font-semibold text-white">Ethereum</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-mono font-bold text-white">
              {isLoading ? "..." : eth}
            </div>
            <div className="text-xs text-gray-500 text-right">ETH</div>
          </div>
        </div>

        {/* USDT Row */}
        <div className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">$</div>
            <span className="font-semibold text-white">Tether</span>
          </div>
          <div className="text-right">
            <div className="text-xl font-mono font-bold text-white">
              {isLoading ? "..." : usdt}
            </div>
            <div className="text-xs text-gray-500 text-right">USDT</div>
          </div>
        </div>
      </div>
    </div>
  );
};