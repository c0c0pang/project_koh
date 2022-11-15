from web3 import Web3
import json

alchemy_url="https://eth-goerli.g.alchemy.com/v2/_xtvbx98H0BR4y_GsXc8uqwtiGVKJgGL"
web3=Web3(Web3.HTTPProvider(alchemy_url))

with open("jsonabi.json") as f:
    info_json = json.load(f)
abi = info_json["abi"]

contractAddress="0x0f2497CD1125Cb8e0Bbfbcb6010d25Ffd0bC1B4a"

tokenContract=web3.eth.contract(address=contractAddress, abi=abi)

NFT_balance=tokenContract.functions.balanceOf("0x58ca721Bf1F9cE29C516735da55F257963c23DC4").call()
print(f'count NFTs you have : {NFT_balance}')