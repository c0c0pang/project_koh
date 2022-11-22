// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; // implementation of the ERC721 standard
import "@openzeppelin/contracts/utils/Counters.sol"; //counter to keep track of the total number of NFTs minted and set the unique ID to our NFT
import "@openzeppelin/contracts/access/Ownable.sol";  //only the owner of the smart contract can mint NFTs

contract LectureNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MyLectureNFT", "LEC") {}  //name and symbol

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}