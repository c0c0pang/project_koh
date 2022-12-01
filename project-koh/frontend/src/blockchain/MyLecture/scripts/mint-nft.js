export const MintNFT = async (tokenUri, privateKey) => {
    const ethers = require('ethers');
    const API_KEY="_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL"
    // Get Alchemy API Key

    // Define an Alchemy Provider
    const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

    const contract = require("../artifacts/contracts/LectureNFT.sol/LectureNFT.json");

    const signer = new ethers.Wallet(privateKey, provider);
    const abi = contract.abi;
    const myNftContract = new ethers.Contract('0xfa1B05966456fF8eDA0B136A6b2f731C6a09F35C', abi, signer);
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
    await nftTxn.wait();
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
}
