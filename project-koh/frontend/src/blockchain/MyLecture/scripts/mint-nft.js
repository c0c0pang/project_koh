export const MintNFT = async (tokenUri, privateKey) => {
    const ethers = require('ethers');
    const API_KEY="_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL"
    // Get Alchemy API Key

    // Define an Alchemy Provider
    const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

    const contract = require("../artifacts/contracts/LectureNFT.sol/LectureNFT.json");

    const signer = new ethers.Wallet(privateKey, provider);

    const abi = contract.abi;
    //0xfa1B05966456fF8eDA0B136A6b2f731C6a09F35C
    //0x7d5861676b68A398b3E835C362EA322eB91F1Bd2
    const myNftContract = new ethers.Contract('0x2EBC9545D8FD84c619152A18DAC305F7888eC411', abi, signer);
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
    await nftTxn.wait();
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
}

export const MintTicketNFT = async (tokenUri, privateKey) => {
    const ethers = require('ethers');
    const API_KEY="_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL"
    // Get Alchemy API Key

    // Define an Alchemy Provider
    const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

    const contract = require("../artifacts/contracts/LectureNFT.sol/TestTicket.json");

    const signer = new ethers.Wallet(privateKey, provider);

    const abi = contract.abi;
    const myNftContract = new ethers.Contract('0x4da883211c2cD98Db1132c8961ad7264fBA5d53B', abi, signer);
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri);
    await nftTxn.wait();
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
}
//0x7d5861676b68A398b3E835C362EA322eB91F1Bd2