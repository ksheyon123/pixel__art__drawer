import React, { useEffect } from "react";
import { useWeb3Wallet } from "src/Hooks/useWeb3Wallet";

const mixingOrders = (arr: string[]) => {

}

const MnemonicContainer: React.FC = () => {
  const { createMnemonic } = useWeb3Wallet();
  useEffect(() => {
    createMnemonic();
  }, [])
  return (
    <>
    </>
  )
}

export { MnemonicContainer }