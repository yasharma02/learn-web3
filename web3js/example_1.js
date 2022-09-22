const WEB3 = require("web3");
// const rpcURLINFURA = "https://mainnet.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const rpcURLAlchemy =
  "https://eth-goerli.g.alchemy.com/v2/XbxHrL2ipAARaptUD4PycccoYnO-Zy3j";
const web3 = new WEB3(rpcURLAlchemy);
const myAddress = "0x9cf4f7B3Cb6918EF06e877761da9Db7504145C1b";

(async () => {
  var balance;
  var bal;
  await web3.eth.getBalance(myAddress, (err, weiBal) => {
    balance = web3.utils.fromWei(weiBal, "ether");
    console.log(balance);
    console.log(typeof balance);
    bal = Number(balance);
    console.log(typeof bal);
    console.log(bal);
    bal = bal - 0.002;
    console.log(bal);
  });

  const gasPrice = await web3.eth.getGasPrice();
  console.log(web3.utils.fromWei(`${gasPrice * 21000}`, "ether"));
  console.log("hello2");
  const signed = await web3.eth.accounts.signTransaction(
    {
      from: myAddress,
      to: "0x696169e970A5E617911aB94a809e2CF38B09Ae84",
      gas: 21000,
      value: web3.utils.toWei(`${bal}`, "ether"),
    },
    "0x17b0d4c91c15e0266b16e562d5686e170f947f5d3748549bf76ab73c32bff246"
  );
  console.log("hello1");
  try {
    await web3.eth
      .sendSignedTransaction(signed.rawTransaction)
      .on("receipt", function (receipt) {
        console.log(receipt);
      });
    //   .on("error", function (error) {
    //     console.log(
    //       "Internal ETH transfer between accounts error",
    //       error.message
    //     );
    //     console.log("hello");
    //   });
  } catch (error) {
    console.log("hello5");
    console.log(JSON.stringify(error.message));
    console.log(typeof error);
    console.log(typeof error.message);
  }
  console.log("hello4");
})();
