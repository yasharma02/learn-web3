const WEB3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction
const rpcURLGorli = "https://goerli.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const rpcURL = "https://mainnet.infura.io/v3/fe2690d3a01a44d6a273bba167960ae8"
const web3 = new WEB3(rpcURL)

//var acc1 = web3.eth.accounts.create()
var acc2 = web3.eth.accounts.create()
console.log(acc2)

//const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')  //export PRIVATE_KEY_1='your private key 1 here'
const privatekey1 = Buffer.from('ac811a4e38f534ec359ca6960aa968811784dcff8481af995ca4a62ee70fff19', 'hex')
var acc1Address = '0xABd0cd0cC3a603eF8a279ab74f62917491ecc33b'
var acc2Address = acc2.address
console.log(acc1Address)
console.log(acc2Address)
web3.eth.getBalance(acc1Address, (err, weiBal) => {balance = web3.utils.fromWei(weiBal, 'ether')}).then(console.log)

web3.eth.getTransactionCount(acc1Address, (err, txCount) => {
    contractData = '0x60806040526040805190810160405280600a81526020017f4441707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f92919061014e565b506040805190810160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061014e565b506040805190810160405280600f81526020017f4441707020546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e792919061014e565' // Your data value goes here...
  
    const contractTxObject = {
      nonce:    web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(1000000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      data: contractData
    }

    const tx = new Tx(contractTxObject) // use chain parameter when using gorli
    tx.sign(privatekey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('err:', err, 'txHash:', txHash)
      // Use this txHash to find the contract on Etherscan!
    })

  })
