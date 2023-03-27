import React, { useEffect, useState } from "react";
import { MnemonicMatchForm, MnemonicDisplay } from "src/Components/SignUpPage";
import { useWeb3Wallet } from "src/Hooks/useWeb3Wallet";

const mixingOrders = (arr: string[]) => {
  let temp = arr;
  const len = temp.length;
  let result = [];
  for (let i = 0; i < 12; i++) {
    const rndNum = Math.round(Math.random() * len);
    result.push(temp[rndNum]);
    temp = temp.slice(0, rndNum).concat(temp.slice(rndNum));
  }
  return result;

}

const MnemonicContainer: React.FC = () => {
  const { createMnemonic } = useWeb3Wallet();
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  useEffect(() => {
    const mnemonic = createMnemonic();
    const newMnemonic = mixingOrders(mnemonic);
    setMnemonic(newMnemonic);
  }, []);

  return (
    <>
      <MnemonicDisplay />
      <MnemonicMatchForm />
    </>
  )
}

export { MnemonicContainer }