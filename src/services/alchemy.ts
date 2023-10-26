import {Alchemy, Network} from "alchemy-sdk";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

export default new Alchemy(settings);