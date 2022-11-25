// const nftName = "Ocean";
// const description = "Issuing TRC721 NFT Test";
// const hiddenImgUrl = "https://ipfs.io/ipfs/QmV5tr5BBmGe7vrHf2bEHzCoTFEHXLEA1vEFrsoqdMcVrs?filename=ocean.jfif";
// const totalNum = 5;

export const Uploader = (nftName,description,hiddenImgUrl) =>{
    try {
        let json = `{"name":"${nftName}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`${nftName}.json`, json, "utf8", (e) => (e));
        console.log("complete!");
    } catch (error) {
        console.log(error);
    }
}

