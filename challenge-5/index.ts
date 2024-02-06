import algosdk  from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

// Set up algod client
const algodClient = algokit.getAlgoClient()

// Retrieve 2 accounts from localnet kmd
const sender = await algokit.getLocalNetDispenserAccount(algodClient)

const receiver = await algokit.mnemonicAccountFromEnvironment(
    {name: 'RECEIVER', fundWith: algokit.algos(100)},
    algodClient,
  )

/*
TODO: edit code below

Description: 
The below code is trying to atomically send 2 payment from sender to receiver 
account by grouping them into an atomic transaction composer. 
However, the code is not working. find and fix the bug so that the 2 payments are 
successfully sent atomically.

When solved correctly, the console should print out the following:
"The first payment transaction sent 1000000 microAlgos and the second payment transaction sent 2000000 microAlgos"
*/

const suggestedParams = await algodClient.getTransactionParams().do();
const ptxn1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 1000000,// 1 ALGO
});

const ptxn2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 2000000, // 2 ALGOs
});

const atc = new algosdk.AtomicTransactionComposer()
atc.addTransaction({txn: ptxn1, signer: sender})
atc.addTransaction({txn: ptxn2, signer: sender})

const result = await algokit.sendAtomicTransactionComposer({atc:atc, sendParams: {suppressLog:true}}, algodClient)
console.log(`The first payment transaction sent ${result.transactions[0].amount} microAlgos and the second payment transaction sent ${result.transactions[1].amount} microAlgos`)

