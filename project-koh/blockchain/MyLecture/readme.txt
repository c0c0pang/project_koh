***mint NFT***
npm init -y
npm install --save-dev hardhat

npx hardhat
Create a Javascript project
y

npm install @openzeppelin/contracts

make "LectureNFT.sol" in contracts

npm install dotenv --save
make ".env" in root

update hardhat.config.js
update scripts/deploy.js

npm install @nomiclabs/hardhat-ethers
npx hardhat run scripts/deploy.js --network goerli

Contract deployed to address: 0xfa1B05966456fF8eDA0B136A6b2f731C6a09F35C

update mint-nft.js

variables : .env의 private key, 
             nft-metadata.json의 images & names -> upload-pinata.js의 file & pinata api & pinata secret api
             mint-nft.js의 contractaddress & tokenURI

node scripts/mint-nft.js


***token_balance***
npm install alchemy-sdk