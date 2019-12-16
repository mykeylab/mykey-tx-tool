// transfer eth tx
// https://etherscan.io/tx/0x290d975cf6f041c3dafdee984ea45783ae135050065d144657fa2358e0d8368f
// transfer erc20 tx
// https://etherscan.io/tx/0xc0d445a1dbe4a59ca78a94a529c0212eeec8b8396ed92ab9b3b245225040d34e


Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/"))

let TransferLogic='0xDf189bd17e51892628B91a9b55a1f0f31edDf9dF'  // transfer logic address

async function main() {

    let txids = ['0x290d975cf6f041c3dafdee984ea45783ae135050065d144657fa2358e0d8368f', '0xc0d445a1dbe4a59ca78a94a529c0212eeec8b8396ed92ab9b3b245225040d34e']

    let TransferLogicEnteredParams = ['bytes','uint256']
    let transferEthMethodSig = web3.utils.sha3('transferEth(address,address,uint256)').slice(0,10)
    let transferErc20MethodSig = web3.utils.sha3('transferErc20(address,address,address,uint256)').slice(0,10)
    // console.log("transferEthMethodSig:", transferEthMethodSig)
    // console.log("transferErc20MethodSig:", transferErc20MethodSig)

    let transferEthParams = ['address','address', 'uint256']
    let transferErc20Params = ['address','address', 'address', 'uint256']

    for (let index = 0; index < txids.length; index++) {
        const txid = txids[index];

        console.log('tx', txid)
        var receipt = await web3.eth.getTransactionReceipt(txid);
    
        receipt.logs.forEach(log => {
    
            if(log.address == TransferLogic) {
                let params = web3.eth.abi.decodeParameters(TransferLogicEnteredParams, log.data)
                let methodSig = params[0].slice(0,10)
    
                if(methodSig == transferEthMethodSig) {
                    params = web3.eth.abi.decodeParameters(transferEthParams, params[0].slice(10))
                    console.log('from: ', params[0])
                    console.log('to: ', params[1])
                    console.log('token: eth')
                    console.log('amount: ', web3.utils.fromWei(params[2], 'ether'))

                }else if(methodSig == transferErc20MethodSig) {
                    params = web3.eth.abi.decodeParameters(transferErc20Params, params[0].slice(10))
                    console.log('from: ', params[0])
                    console.log('to: ', params[1])
                    console.log('token: ', params[2])
                    console.log('amount: ', web3.utils.fromWei(params[3], 'ether'))
                }else {
                    console.log('unsupported method')
                }
            }
        })
        console.log()
    }
 }

main()