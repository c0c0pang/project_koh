
import {SendJsonFileToIPFS,SendJsonApplyFileToIPFS} from './upload-pinata-json'
export const Uploader = (nftName,description,hiddenImgUrl,privateKey) =>{
    try {
        let json = {name:nftName,description:description,image:hiddenImgUrl,attributes:[{trait_type: "Unknown",value: "Unknown"}]};
        const jsonFile = new File([JSON.stringify(json)],`${nftName}.json`,{type: "text/plain"});
        console.log(jsonFile)
        SendJsonFileToIPFS(jsonFile,privateKey);
        console.log("complete!");
    } catch (error) {
        console.log(error);
    }
}

export const Uploader_Apply = (nftName,hiddenImgUrl,count,privateKey) =>{
    try {
        let json = {name:`${nftName}${count}`,description:'',image:hiddenImgUrl,attributes:[{trait_type: "Unknown",value: "Unknown"}]};
        const jsonFile = new File([JSON.stringify(json)],`${nftName}${count}.json`,{type: "text/plain"});
        console.log(jsonFile)
        SendJsonApplyFileToIPFS(jsonFile,privateKey);
        console.log("complete!");
    } catch (error) {
        console.log(error);
    }
}

// const nftName = "Ocean";
// const description = "Issuing TRC721 NFT Test";
// const hiddenImgUrl = "https://ipfs.io/ipfs/QmV5tr5BBmGe7vrHf2bEHzCoTFEHXLEA1vEFrsoqdMcVrs?filename=ocean.jfif";
// const totalNum = 5;
