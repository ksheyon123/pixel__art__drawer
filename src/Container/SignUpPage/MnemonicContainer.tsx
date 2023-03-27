import React, { useEffect, useState } from "react";
import { MnemonicMatchForm, MnemonicDisplay } from "src/Components/SignUpPage";
import { useWeb3Wallet } from "src/Hooks/useWeb3Wallet";

const mixingOrders = (arr: string[]) => {
  let temp = arr;
  let result = [];
  for (let i = 0; i < 12; i++) {
    const len = temp.length;
    console.log("tem-", len);
    // 0 ~ 11
    const rndNum = Math.round(Math.random() * (len - 1));
    console.log("idx", rndNum);
    result.push(temp[rndNum]);
    temp = temp.slice(0, rndNum).concat(temp.slice(rndNum + 1));

  }
  return result;

}

const MnemonicContainer: React.FC = () => {
  const { createMnemonic } = useWeb3Wallet();
  const [initial] = useState<string[]>([]);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [rndMnemonic, setRndMnemonic] = useState<string[]>([]);
  const [selectedMnemonic, selectMnemonic] = useState<string[]>([]);

  useEffect(() => {
    const mnemonic = createMnemonic();
    const newMnemonic = mixingOrders(mnemonic);
    setMnemonic(mnemonic);
    setRndMnemonic(newMnemonic);
  }, []);

  return (
    <>
      <MnemonicDisplay
        mnemonic={mnemonic}
      />
      <MnemonicMatchForm
        selectMnemonic={selectMnemonic}
        selectedMnemonic={selectedMnemonic}
        rndMnemonic={rndMnemonic}
      />
    </>
  )
}

export { MnemonicContainer }