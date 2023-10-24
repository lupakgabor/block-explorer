import {Alchemy, Network} from "alchemy-sdk";

const settings = {
  apiKey: 'pejfKjWWzkXWuDUMuPfFNYDa7-sDv0VV', // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

export default new Alchemy(settings);