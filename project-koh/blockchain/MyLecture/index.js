const nftName = "Ocean";
const description = "Issuing TRC721 NFT Test";
const hiddenImgUrl = "https://ipfs.io/ipfs/QmV5tr5BBmGe7vrHf2bEHzCoTFEHXLEA1vEFrsoqdMcVrs?filename=ocean.jfif";
const totalNum = 5;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/ocean${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}