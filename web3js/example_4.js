const WEB3 = require('web3')
const rpcURL = "https://mainnet.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const web3 = new WEB3(rpcURL)

web3.eth.getBlockNumber().then(console.log)
web3.eth.getBlock('latest').then(console.log)

web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 1; i++) {
      web3.eth.getBlock(latest - i).then(console.log)
    }
  })

const hash = '0xd9578d335aaf8f626af367612c053f290ddfbc131c9d44790c3b6634cc45f877'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)

web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'gwei'))
})
console.log(web3.utils.sha3('yash'))
console.log(web3.utils.keccak256('yash'))
console.log(web3.utils.randomHex(32))