import { ethers } from "hardhat";

async function main() {
  // MYNFT address
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log(`mynft contract deployed on ${myNFT.address}`);

  
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(myNFT.address);
  await myToken.deployed();
  console.log(`myToken contract deployed on ${myToken.address}`);

  const Blog = await ethers.getContractFactory("Blog");
  const blog = await Blog.deploy();
  await blog.deployed();
  console.log(`blog contract deployed on ${blog.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
