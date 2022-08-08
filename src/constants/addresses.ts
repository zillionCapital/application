import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x813C38214799535c1375606188aD7E8Fd1762651",

    NORO_ADDRESS: "0x8810dc193bA78b0dB831687EBB8d79f24a8b5E81",
    SNORO_ADDRESS: "0x6905C5AD100370f75f42305CbfbD7925E9720a59",

    TREASURY_ADDRESS: "0xE62bec7F3Dba623223cb3Bd23f901dA3fAC42893",

    STAKING_ADDRESS: "0x39F38285d3DE182faB1fb767C97dC24f7052adeC",
    STAKING_DISTRIBUTOR_ADDRESS: "0x01120bb9890e3F3A8f97a433554f7243Fa722541",
    STAKING_HELPER_ADDRESS: "0xa276eCf241346a98308aB980E52995c530B6f905",
    STAKING_WARMUP_ADDRESS: "0xc24AAa9F6bb31D64181b11F745b7e81924Cb9C40",

    BONDEPOSITORY_BEND: "0x192F7F5de2D495B129fFb81C42299eD0C98A5A60",
    BONDEPOSITORY_AVAX: "0x8929c7417790A3312aaeb3E5af901f1F0c68721f",
    // BONDEPOSITORY_AVAX: "0x131bac8Ea93C2465bADF496d3304D195d4E9f623",

    TIME_BONDING_CALC_ADDRESS: "0x62D16266fa36Ab4a5b7FDd7DCCC79EE0a5a8E165",
    WSNORO_ADDRESS: "0xcC822C19F8e0ed505F32580E42FA3e7DcF0F1013",

    BEND_ADDRESS: "0x3160591776e34C319F2Ad28Ba8c1F4829adc3907",
    WAVAX_ADDRESS: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    ZAPIN_ADDRESS: "",
};

const AVAX_TESTNET = {
    DAO_ADDRESS: "0x8c8eC00fb235dE3922182b47d2E8f8e69268039a",

    NORO_ADDRESS: "0x9eda14D32a04e124f5CaE9C7038Ca1e1E3469F48",
    SNORO_ADDRESS: "0x0A1537b01e4Ce77d407aa5c6e9C1DbeBF6E4263F",

    TREASURY_ADDRESS: "0xF0D05745A4585a0cA4Eba2947d68dCb24C1cf87E",

    STAKING_ADDRESS: "0x612b24aB07cEC3478Dcf306B8895DF6DE967b002",
    STAKING_DISTRIBUTOR_ADDRESS: "0xA62Fc0C89F750eD9968803C77D243c0e4ffaADE0",
    STAKING_HELPER_ADDRESS: "0x357E42FBda72D5d4c10c3Dd35c29720D837b0504",
    STAKING_WARMUP_ADDRESS: "0x56Cbb166dD50312Cacd2de18bf738B6BA0a41Eb3",

    BONDEPOSITORY_BEND: "0x5ce727ece75bF3D76B66710e4775cF66ef69F234",
    BONDEPOSITORY_AVAX: "0x34CF4660E1857fc7b8F6ab17f36C81ceADE74bd1",

    TIME_BONDING_CALC_ADDRESS: "0xff34432D718a53b6D93c8a873Eec6d96EC5845C1",
    WSNORO_ADDRESS: "0xA33d7cAEeCE2E3176d51239CE4F78d68B24b226A",

    BEND_ADDRESS: "0x19a1165A79AFAAeFd805969B32a0640d4Db9f131",
    WAVAX_ADDRESS: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    ZAPIN_ADDRESS: "",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX_MAIN) return AVAX_MAINNET;
    if (networkID === Networks.AVAX_TEST) return AVAX_TESTNET;

    throw Error("Network don't support");
};
