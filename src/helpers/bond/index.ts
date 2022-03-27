import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import BendIcon from "../../assets/tokens/BEND.svg";
import AvaxIcon from "../../assets/tokens/WAVAX.png";

import { MimBondContract, WavaxBondContract, MimTokenContract, WavaxTokenContract } from "../../abi";

export const bend = new CustomBond({
    name: "bend",
    displayName: "BEND",
    bondToken: "BEND",
    bondIconSvg: BendIcon,
    bondContractABI: MimBondContract,
    reserveContractAbi: MimTokenContract,
    networkAddrs: {
        [Networks.AVAX_MAIN]: {
            bondAddress: "0x901A9D9226B17A55fc4cD8547acF51D315a9D1Dd",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
        [Networks.AVAX_TEST]: {
            bondAddress: "0xDa2201abf976fa6B25b010D781ab875d75B51959",
            reserveAddress: "0x19a1165A79AFAAeFd805969B32a0640d4Db9f131",
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
            bondAddress: "0xDF636983103717Aa90bb5a65859C95F0CB8862ae",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
        [Networks.AVAX_TEST]: {
            bondAddress: "0x9B4E2b8a9860B8e01af4d47133404153e71Af6Ed",
            reserveAddress: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        },
    },
    reserveDecimal: 18,
    // tokensInStrategy: "756916000000000000000000",
});

export default [bend, wavax];
