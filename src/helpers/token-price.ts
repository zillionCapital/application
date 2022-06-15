import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2,weth&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["AVAX"] = data["avalanche-2"].usd;
    cache["ETH"] = data["weth"].usd;
    cache["BEND"] = 0.00003; // Price in USD
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
