import algosdk from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

const algodClient = algokit.getAlgoClient()

const sender = await algokit.getLocalNetDispenserAccount(algodClient)

const receiver = await algokit.mnemonicAccountFromEnvironment(
    {name: 'RECEIVER', fundWith: algokit.algos(100)},
    algodClient,
  )

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
const senderTransactionSigner = algokit.getSenderTransactionSigner(sender)
const atc = new algosdk.AtomicTransactionComposer()
atc.addTransaction({txn: ptxn1, signer: senderTransactionSigner})
atc.addTransaction({txn: ptxn2, signer: senderTransactionSigner})
const result = await algokit.sendAtomicTransactionComposer({atc:atc, sendParams: {suppressLog:true}}, algodClient)
console.log(`The first payment transaction sent ${result.transactions[0].amount} microAlgos and the second payment transaction sent ${result.transactions[1].amount} microAlgos`)