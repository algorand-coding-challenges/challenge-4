import algosdk from "algosdk";
import * as algokit from '@algorandfoundation/algokit-utils';

// Set up algod client
const algodClient = algokit.getAlgoClient()

// Retrieve 2 accounts from localnet kmd
const sender = await algokit.getLocalNetDispenserAccount(algodClient)

const receiver = await algokit.mnemonicAccountFromEnvironment(
    { name: 'RECEIVER', fundWith: algokit.algos(100) },
    algodClient,
)

// Create the first payment transaction
const suggestedParams = await algodClient.getTransactionParams().do();
const ptxn1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 1000000, // 1 ALGO
});

/// <reference lib="dom" />

// Create the second payment transaction
const ptxn2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender.addr,
    suggestedParams,
    to: receiver.addr,
    amount: 2000000, // 2 ALGOs
});

// Create signer for the Atomic Transaction
const signer = algosdk.makeBasicAccountTransactionSigner(sender)

// Compose the Atomic Transaction
const atc = new algosdk.AtomicTransactionComposer()
atc.addTransaction({ txn: ptxn1, signer: signer })
atc.addTransaction({ txn: ptxn2, signer: signer })

// Send the Atomic Transaction
const result = await algokit.sendAtomicTransactionComposer({ atc: atc, sendParams: { suppressLog: true } }, algodClient)
console.log(`The first payment transaction sent ${result.transactions[0].amount} microAlgos and the second payment transaction sent ${result.transactions[1].amount} microAlgos`)

