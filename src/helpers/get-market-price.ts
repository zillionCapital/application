import axios from "axios";
import { ParaSwap } from "paraswap";
import { ethers } from "ethers";
import { LpReserveContract, SabTokenContract } from "../abi";
import { Networks } from "../constants/blockchain";

import { getAddresses } from "../constants";
import { getTokenPrice } from "./token-price";
import allBonds from "./bond";

export async function getMarketPrice(networkID: Networks, provider: any): Promise<number> {
    const avaxPrice = getTokenPrice("AVAX");

    const reserveAvaxNoroAddress = "0x6bee00C9c5800d233fF1c2403d4a16A9e9ae792B";
    const pairContract = new ethers.Contract(reserveAvaxNoroAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();

    const noro = reserves[0] * Math.pow(10, 9);
    const avax = reserves[1] * Math.pow(10, 18);

    const marketPrice = (reserves[1] * avaxPrice) / noro;
    return marketPrice;
    //
    // const addresses = getAddresses(networkID);
    // const sabContract = new ethers.Contract(addresses.NORO_ADDRESS, SabTokenContract, provider);
    //
    // const totalSupply = (await sabContract.totalSupply()) / Math.pow(10, 9);
    //
    // const timeBondsAmountsPromises = allBonds.map(bond => bond.getTimeAmount(networkID, provider));
    // const timeBondsAmounts = await Promise.all(timeBondsAmountsPromises);
    // const timeAmount = timeBondsAmounts.reduce((timeAmount0, timeAmount1) => timeAmount0 + timeAmount1, 0);
    //
    // const tokenAmountsPromises = allBonds.map(bond => bond.getTokenAmount(networkID, provider));
    // const tokenAmounts = await Promise.all(tokenAmountsPromises);
    //
    // const rfvTreasury = tokenAmounts.reduce((tokenAmount0, tokenAmount1) => tokenAmount0 + tokenAmount1, 0);
    // const timeSupply = totalSupply - timeAmount;
    //
    // return rfvTreasury / timeSupply;
}
