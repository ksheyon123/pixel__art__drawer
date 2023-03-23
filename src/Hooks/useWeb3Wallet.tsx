import Wallet from 'ethereumjs-wallet';
import Utils from "ethereumjs-util";
import { ethers } from "ethers";

export const useWeb3Wallet = () => {

  const createWallet = () => {
    const rndSeed = ethers.Wallet.createRandom();
    console.log(rndSeed);
  }

  return {
    createWallet
  }
}