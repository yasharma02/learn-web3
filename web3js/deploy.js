const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("rpc url");
  const wallet = new ethers.Wallet("private key", provider);
  const abi = fs.readFileSync("../contractCompileOutputs/abifilename", "utf8");
  const binary = fs.readFileSync(
    "../contractCompileOutputs/binaryfilename",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
