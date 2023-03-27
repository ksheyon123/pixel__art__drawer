import Wallet from 'ethereumjs-wallet';
import Utils from "ethereumjs-util";
import { ethers } from "ethers";

export const useWeb3Wallet = () => {

  const createMnemonic = () => {
    const { mnemonic } = ethers.Wallet.createRandom();
    const { phrase } = mnemonic;
    const toArr = phrase.split(" ");
    console.log(toArr);
    return toArr;
  }

  const matchMnemonic = () => {
  }

  return {
    createMnemonic
  }
}