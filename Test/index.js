const { Alchemy, Network } = require("alchemy-sdk");
const { ethers } = require('ethers');
const { string } = require("i/lib/util");
require('dotenv').config();

const provider = {
    apiKey: process.env.API, // Replace with your API key
    network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(provider);
const main = async() => {
    let txHash = "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
    const balance = await alchemy.core.getBalance('vitalik.eth', 'latest')
   

}
main()
