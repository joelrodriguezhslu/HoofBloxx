/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:  
  const toAddress = "0xEfEE1F7B96288BC4441f38DFb94A0D1A2eF3eFD0"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const HoofBloxx = await ethers.getContract("HoofBloxx", deployer);

  const AmericanQuarterHorse= {
    "TransponderCode": "276020000490986",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmQuTT8XXN2egqsaZenacnxU1H2fHaFvtHMefk7imFPiRP",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmQuTT8XXN2egqsaZenacnxU1H2fHaFvtHMefk7imFPiRP",
    "name": "Ida Mae Brown",
	"Breed": "American Quarter Horse",
	"Birthdate": "07/08/2016",
	"Birthplace": "Auhausen, Germany",
	"Breeder": "Thiele Andreas",
	"Dam": "tbd",
	"Sire": "tbd",
	"Colour": "Buckskin",
	"ColourGenetic": "EE / Aa / nCR",
	"GeneticHash": "b910d55b4ed0c009620ed429654a389d0155c54118407862c2e01678689220ab",
	"GeneticDiseases": {
   		GBED:"N/N",
		HERDA:"N/N",
		HYYP:"N/N",
		MH:"N/N",
		PSSM1:"N/N"
     }	   
    
  }
  console.log("Uploading American Quarter Horse...")
  const uploaded1 = await ipfs.add(JSON.stringify(AmericanQuarterHorse))

  console.log("Minting American Quarter Horse with IPFS hash ("+uploaded1.path+")")
  await HoofBloxx.mintItem(toAddress,uploaded1.path,{gasLimit:400000})


  await sleep(delayMS)

  const Appaloosa= {
    "TransponderCode": "246060070593381",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmQm4hDRif9TeoouaPXbTJDjqDcZ4xP5hxLHG5Wmi4ZrdV",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmQm4hDRif9TeoouaPXbTJDjqDcZ4xP5hxLHG5Wmi4ZrdV",
    "name": "SugarCup",
	"Breed": "Appaloosa",
	"Birthdate": "01/08/2012",
	"Birthplace": "Bern, Switzerland",
	"Breeder": "Kurt Baumann",
	"Dam": "tbd",
	"Sire": "tbd",
	"Colour": "Blood Read",
	"ColourGenetic": "VD / Ad / nRR",
	"GeneticHash": "5df6f60716cb58ad3b6146c49b046e1a436a1aa40c3cc77edc805fd1326733df",
	"GeneticDiseases": {
   		GBED:"N/N",
		HERDA:"N/N",
		HYYP:"N/N",
		MH:"N/N",
		PSSM1:"N/N"
     }	   
    
  }
  console.log("Uploading Appaloosa...")
  const uploaded2 = await ipfs.add(JSON.stringify(Appaloosa))

  console.log("Minting Appaloosa with IPFS hash ("+uploaded2.path+")")
  await HoofBloxx.mintItem(toAddress,uploaded2.path,{gasLimit:400000})


  await sleep(delayMS)
  
    const Thoroughbred= {
    "TransponderCode": "266423002410346",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmYWBPpamJn6J2Cj69gv1MkS21feCJ1mWitNFgc8TQaVGY",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmYWBPpamJn6J2Cj69gv1MkS21feCJ1mWitNFgc8TQaVGY",
    "name": "Brownie",
	"Breed": "Thoroughbred",
	"Birthdate": "13/02/2020",
	"Birthplace": "Köln, Germany",
	"Breeder": "Maurer Peter",
	"Dam": "tbd",
	"Sire": "tbd",
	"Colour": "Chestnut",
	"ColourGenetic": "XA / Ba / nRf",
	"GeneticHash": "39727b9e641d029e4979b269deaa27e09e0a0b3534a73d33432456a93ad46c3a",
	"GeneticDiseases": {
   		GBED:"N/N",
		HERDA:"N/N",
		HYYP:"N/N",
		MH:"N/N",
		PSSM1:"N/N"
     }	   
    
  }
  console.log("Uploading Thoroughbred...")
  const uploaded3 = await ipfs.add(JSON.stringify(Thoroughbred))

  console.log("Minting Thoroughbred with IPFS hash ("+uploaded3.path+")")
  await HoofBloxx.mintItem(toAddress,uploaded3.path,{gasLimit:400000})


  await sleep(delayMS)
  
    const Arabian= {
    "TransponderCode": "156627080993921",
    "external_url": "https://gateway.pinata.cloud/ipfs/QmdeuAKFjmHvRFMCx6WQFrzqiPitmr2Ygka3YmNLS6Lsoe",// <-- this can link to a page for the specific file too
    "image": "https://gateway.pinata.cloud/ipfs/QmdeuAKFjmHvRFMCx6WQFrzqiPitmr2Ygka3YmNLS6Lsoe",
    "name": "Speedy Gonzales",
	"Breed": "Arabian",
	"Birthdate": "09/02/2018",
	"Birthplace": "Wien, Austria",
	"Breeder": "Kristine Tafel",
	"Dam": "tbd",
	"Sire": "tbd",
	"Colour": "Roan",
	"ColourGenetic": "ED / aD / bDe",
	"GeneticHash": "89949a3da9309c0be42f2989163f4c76ed5330721a98c67d461971b6b653a43e",
	"GeneticDiseases": {
   		GBED:"N/N",
		HERDA:"N/N",
		HYYP:"N/N",
		MH:"N/N",
		PSSM1:"N/N"
     }	   
    
  }
  console.log("Uploading Arabian...")
  const uploaded4 = await ipfs.add(JSON.stringify(Arabian))

  console.log("Minting Arabian with IPFS hash ("+uploaded4.path+")")
  await HoofBloxx.mintItem(toAddress,uploaded4.path,{gasLimit:400000})


  await sleep(delayMS)


  /*


  console.log("Minting zebra...")
  await HoofBloxx.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
