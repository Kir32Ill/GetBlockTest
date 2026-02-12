"use client";

import { useAccount, useBalance, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { USDT_ADDRESS, ERC20_ABI } from "@/constants/contracts";

export const useBalances = () => {
  const { address, isConnected } = useAccount();

  const { 
    data: ethData, 
    isLoading: isEthLoading, 
    isError: isEthError 
  } = useBalance({
    address,
  });

  const { 
    data: usdtRawBalance, 
    isLoading: isUsdtLoading,
    isError: isUsdtError
  } = useReadContract({
    address: USDT_ADDRESS,
    abi: ERC20_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  const { data: usdtDecimals } = useReadContract({
    address: USDT_ADDRESS,
    abi: ERC20_ABI,
    functionName: "decimals",
  });

  const eth = ethData 
    ? Number(ethData.formatted).toFixed(4) 
    : "0.0000";

  const usdt = (usdtRawBalance !== undefined && usdtDecimals !== undefined)
    ? Number(formatUnits(usdtRawBalance as bigint, usdtDecimals as number)).toFixed(2)
    : "0.00";

  return {
    eth,
    usdt,
    isConnected,
    isLoading: isEthLoading || isUsdtLoading,
    isError: isEthError || isUsdtError,
  };
};