# HSLU KETE HS 2021 - HoofBloxx
Joel Rodriguez,
Maximilian Zappa,
Ramona Weber,
Selina Ofner

Code is based on Scaffold-ETH - Simple NFT Example
-> https://github.com/scaffold-eth/scaffold-eth/tree/simple-nft-example

In this variation of Scaffold-ETH we have enhanced the SmartContract, Mint.js and React-GUI to match our Key-Technology Project around Horse Trading.
The prototype deployment should illustrate how a physical asset (Horse) can be tokenized using attributes like a DNA hash in JSON via IPFS. Then using the blockchain technology the ownership rights to this asset can be securely passed on to someone else. 

The HoofBloxx (HB) Contract was deployed in the Ropsten Testnet:

Contract: `0x96d5fA5D977776daA622A870573A7307d12eB639`

The GUI was deployed using Surge:

URL: `https://hoofbloxx.surge.sh`

# 🏃‍♀️ Quick Start for Local deployment
This part will quickly describe how to use this project to deploy your own, local HoofBloxx chain and application. After installing the prerequisites you will clone our Code and launch the GUI. Then you will start the Hardhat local chain and deploy the HoofBloxx Contract locally. Lastly you will mint (initialize) the Horses to your Wallet using the mint.js.

Required: [Node](https://nodejs.org/dist/latest-v12.x/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) and [Git](https://git-scm.com/downloads)

```
git clone https://github.com/joelrodriguezhslu/HoofBloxx.git
```
> Change the `targetNetwork` in `packages/react-app/src/App.jsx` to localhost

> Change the `defaultNetwork` in `packages/hardhat/hardhat.config.js` to localhost

```
cd HoofBloxx
git checkout HoofBloxx
yarn install
yarn start
```

> in a second terminal window, start your 📱 frontend:

```
cd HoofBloxx
yarn chain
```

> in a third terminal window, 🛰 deploy your contract:

```
cd HoofBloxx
yarn deploy --network localhost
```

📱 Open http://localhost:3000 to see the app

> ✏️ Edit the mint script mint.js in packages/hardhat/scripts and update the toAddress to your frontend address (wallet address in the top right or localhost:3000).

![nft1](https://user-images.githubusercontent.com/526558/124386962-37e5dd00-dcb3-11eb-911e-0afce760d7ee.png)

> in a terminal window run the mint script.
```
yarn mint
```

👀 You should see your Horses show up if you minted to the correct address:
![nft1](https://github.com/joelrodriguezhslu/KETE-HS21-WORK/blob/master/Horses1.PNG)

👛 Open an incognito window and navigate to http://localhost:3000 (You'll notice it has a new wallet address).

⛽️ Grab some gas for each account using the faucet:

![nft4](https://user-images.githubusercontent.com/526558/124387005-55b34200-dcb3-11eb-8565-1ee40b5634ad.png)

🎟 Send an NFT to the incognito window address:
![nft4](https://github.com/joelrodriguezhslu/KETE-HS21-WORK/blob/master/Horses-Transferred.PNG)
