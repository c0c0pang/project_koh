async function main() {
  // Grab the contract factory 
  const LectureNFT = await ethers.getContractFactory("LectureNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const lectureNFT = await LectureNFT.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", lectureNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });