const WEB3 = require("web3");
// const rpcURLINFURA = "https://mainnet.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const rpcURLAlchemy =
  "https://eth-goerli.g.alchemy.com/v2/XbxHrL2ipAARaptUD4PycccoYnO-Zy3j";
const web3 = new WEB3(rpcURLAlchemy);

// (async () => {
//   var gasPrice = await web3.eth.getGasPrice();
//   console.log(typeof gasPrice);
//   var balanceToTransfer = web3.utils.toWei("0.1", "ether");
//   console.log(typeof balanceToTransfer);
//   const tem = balanceToTransfer - gasPrice * 21000;
//   console.log(typeof tem);
//   console.log(gasPrice, balanceToTransfer, tem);
// })();

const timeUTC = new Date("time");
console.log(typeof timeUTC.toUTCString());
console.log(timeUTC.toUTCString() == "Invalid Dae");
