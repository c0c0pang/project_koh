
import {SendJsonFileToIPFS} from './upload-pinata-json'
export const Uploader = (nftName,description,hiddenImgUrl) =>{
    try {
        let json = {name:nftName,description:description,image:hiddenImgUrl,attributes:[{trait_type: "Unknown",value: "Unknown"}]};
        const jsonFile = new File([JSON.stringify(json)],`${nftName}.json`,{type: "text/plain"});
        console.log(jsonFile)
        SendJsonFileToIPFS(jsonFile);
        console.log("complete!");
    } catch (error) {
        console.log(error);
    }
}

// const nftName = "Ocean";
// const description = "Issuing TRC721 NFT Test";
// const hiddenImgUrl = "https://ipfs.io/ipfs/QmV5tr5BBmGe7vrHf2bEHzCoTFEHXLEA1vEFrsoqdMcVrs?filename=ocean.jfif";
// const totalNum = 5;
