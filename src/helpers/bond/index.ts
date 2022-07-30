import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";
import { getAddresses } from "../../constants";

import BendIcon from "../../assets/tokens/BEND.svg";
import AvaxIcon from "../../assets/tokens/WAVAX.png";

import { MimBondContract, WavaxBondContract, MimTokenContract, WavaxTokenContract } from "../../abi";

const addressesFuji = getAddresses(43113);
const addressesAvax = getAddresses(43114);

export const bend = new CustomBond({
    name: "bend",
    displayName: "BEND",
    bondToken: "BEND",
    bondIconSvg: BendIcon,
    bondContractABI: MimBondContract,
    reserveContractAbi: MimTokenContract,
    networkAddrs: {
        [Networks.AVAX_MAIN]: {
            bondAddress: addressesAvax.BONDEPOSITORY_BEND,
            reserveAddress: addressesAvax.BEND_ADDRESS,
        },
        [Networks.AVAX_TEST]: {
            bondAddress: addressesFuji.BONDEPOSITORY_BEND,
            reserveAddress: addressesFuji.BEND_ADDRESS,
        },
    },
    reserveDecimal: 3,
    // tokensInStrategy: "60500000000000000000000000",
});

export const wavax = new CustomBond({
    name: "wavax",
    displayName: "wAVAX",
    bondToken: "AVAX",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: WavaxTokenContract,
    networkAddrs: {
        [Networks.AVAX_MAIN]: {
            bondAddress: addressesAvax.BONDEPOSITORY_AVAX,
            reserveAddress: addressesAvax.WAVAX_ADDRESS,
        },
        [Networks.AVAX_TEST]: {
            bondAddress: addressesFuji.BONDEPOSITORY_AVAX,
            reserveAddress: addressesFuji.WAVAX_ADDRESS,
        },
    },
    reserveDecimal: 18,
    // tokensInStrategy: "756916000000000000000000",
});

export default [bend, wavax];
