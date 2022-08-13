const WEB3 = require('web3')
const rpcURL = "https://mainnet.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const web3 = new WEB3(rpcURL)
const myAddress = "0xAFF67061Fd6bbC8BcC5273e4071789d9e10076d9"

web3.eth.getBalance(myAddress, (err, weiBal) => {balance = web3.utils.fromWei(weiBal, 'ether')}).then(console.log)

