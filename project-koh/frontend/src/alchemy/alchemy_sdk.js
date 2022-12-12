import { Network, Alchemy } from "alchemy-sdk";

export const alchemy_sdk = async(ownerAddr,image_url)  => {
    const settings = {
        apiKey: "_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL", // Replace with your Alchemy API Key.
        network: Network.ETH_GOERLI, // Replace with your network.
      };
    let check = false;
    const alchemy = new Alchemy(settings);
    const ticket= '0x7d5861676b68A398b3E835C362EA322eB91F1Bd2';
    // const ownerAddr = "0x632001efcf13AEbBCB59E66ADF4f3490313d5482";
    console.log("fetching NFTs for address:", ownerAddr);
    console.log("...");
    
    // Print total NFT count returned in the response:
    const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
    console.log("number of NFTs found:", nftsForOwner.totalCount);
    console.log("...");
    
    // Print contract address and tokenId for each NFT:
    for (const nft of nftsForOwner.ownedNfts) {
      console.log("===");
      console.log("contract address:", nft.contract.address);
      const response = await alchemy.nft.getNftMetadata(
        nft.contract.address,
        nft.tokenId
      );
      if(ticket!==nft.contract.address){
        continue;
      }
      if(response.rawMetadata.image===image_url){
        check = true
        break;
        //시청 허가
      }
      console.log("token ID:", nft.tokenId);
    };
    return check;
    console.log("===");
    
    // Fetch metadata for a particular NFT:
    console.log("fetching metadata for a Crypto Coven NFT...");
    
    
    // Uncomment this line to see the full api response:
    // console.log(response);
    
    // Print some commonly used fields:
    console.log("NFT name: ", response.title);
    console.log("token type: ", response.tokenType);
    console.log("tokenUri: ", response.tokenUri.gateway);
    console.log("image url: ", response.rawMetadata.image);
    console.log("time last updated: ", response.timeLastUpdated);
    console.log("===");
}

