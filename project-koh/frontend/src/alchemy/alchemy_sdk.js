import { Network, Alchemy } from "alchemy-sdk";

export const alchemy_sdk = async(ownerAddr,image_url)  => {
    const settings = {
        apiKey: "_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL", // Replace with your Alchemy API Key.
        network: Network.ETH_GOERLI, // Replace with your network.
      };
    let check = false;
    const alchemy = new Alchemy(settings);
    const ticket= '0x4da883211c2cD98Db1132c8961ad7264fBA5d53B';
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
      console.log('response.rawMetadata.image: ',response.rawMetadata.image);
      console.log('image_url: ',image_url);
      if(response.rawMetadata.image===image_url){
        console.log("token ID:", nft.tokenId);
        check = true
        break;
        //시청 허가
      }
      if(ticket!==nft.contract.address){
        continue;
      }
    };
    return check;
    // console.log("===");
    
    // // Fetch metadata for a particular NFT:
    // console.log("fetching metadata for a Crypto Coven NFT...");
    
    
    // // Uncomment this line to see the full api response:
    // // console.log(response);
    
    // // Print some commonly used fields:
    // console.log("NFT name: ", response.title);
    // console.log("token type: ", response.tokenType);
    // console.log("tokenUri: ", response.tokenUri.gateway);
    // console.log("image url: ", response.rawMetadata.image);
    // console.log("time last updated: ", response.timeLastUpdated);
    // console.log("===");
}

