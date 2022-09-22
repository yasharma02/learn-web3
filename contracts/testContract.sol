// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// contract TestContract is ERC721, Ownable {
//     uint256 public mintPrice = 0.01 ether;
//     uint256 public totalSupply;
//     uint256 public maxSupply;
//     bool public isMintEnabled = true;
//     mapping(address => uint256) public mintedWallets;

//     constructor() payable ERC721("Goerli NFT", "GOERLINFT") {
//         maxSupply = 10000;
//     }

//     function toggleIsMintEnabled() external onlyOwner {
//         isMintEnabled = !isMintEnabled;
//     }

//     function setMaxSupply(uint256 maxSupply_) external onlyOwner {
//         maxSupply = maxSupply_;
//     }

//     function mint(uint256 amount) external payable {
//         require(isMintEnabled, "minting not enabled");
//         // require(mintedWallets[msg.sender] < 1, "already minted max for this wallet");
//         require(msg.value == mintPrice, "incorrect value");
//         require(maxSupply > totalSupply, "sold out");
//         // require(amount == 1, "can only mint one");

//         mintedWallets[msg.sender]++;
//         totalSupply++;
//         uint256 tokenId = totalSupply;
//         _safeMint(msg.sender, tokenId);
//     }
// }
contract NFTContract is ERC721, Ownable {
    uint256 public mintPrice = 0.01 ether;
    uint256 public totalSupply;
    uint256 public maxSupply;
    bool public isMintEnabled = true;

    constructor() payable ERC721("Goerli NFT", "GOERLINFT") {
        maxSupply = 10000;
    }

    function toggleIsMintEnabled() external onlyOwner {
        isMintEnabled = !isMintEnabled;
    }

    function mint(uint256 amount) external payable {
        require(isMintEnabled, "minting not enabled");
        require(msg.value == mintPrice, "incorrect value");
        require(maxSupply > totalSupply, "sold out");
        uint256 tokenId = totalSupply;

        _safeMint(msg.sender, tokenId);

        totalSupply++;
    }
}
