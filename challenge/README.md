# Algorand Coding Challenge #4: Fix the Bug!

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

Inside of `index.ts` file, there is code that is trying to atomically group 2 payment transactions and synchronously send them using atomic transfers. The code is using the [Algorand JavaScript SDK](https://github.com/algorand/js-algorand-sdk) and the [AlgoKit Utils TypeScript](https://github.com/algorandfoundation/algokit-utils-ts/tree/main). 

However, if you try to run the `index.ts` file after going into the `challenge` directory, opening Docker Desktop, and then running:
```bash
algokit bootstrap all
algokit localnet start
npm start
```
it will fail and show this error: `TypeError: signer is not a function`

**Find out what is wrong and fix the bug.**

## Prerequisites

1. [Install AlgoKit](https://developer.algorand.org/docs/get-started/algokit/#install-algokit:~:text=Install%20AlgoKit-,%C2%B6,-Windows).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.

## Instructions

### 1. Steps to fix the bug

1. Install dependencies using AlgoKit. Run the below command inside of the `challenge` folder.
```bash
algokit bootstrap all
```
This command will install all dependecies and also generate a `.env` file for you.

2. Open Docker Desktop and launch Algorand localnet with `algokit localnet start`. 
3. Go to `./index.ts` and read the comments on the file and fix the bug!
4. After fixing the bug run the below command inside of `challenge` folder: 
```bash
npm run start
```
5. If you see: `The first payment transaction sent 1000000 microAlgos and the second payment transaction sent 2000000 microAlgos` in the console, you successfully fixed the bug! 😆

#### References 
- [Atomic Transfers Documentation](https://developer.algorand.org/docs/get-details/atc/?from_query=atomic#template-modal-overlay)
- [AlgoKit Utils TypeScript Documentation](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/transaction.md)

#### Hints 
`atc.addTransaction()` takes in a [`transactionWithSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L105) object as the parameter. You can get the signer of an account using the [`makeBasicAccountTransactionSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L23) function from the Algorand JavaScript SDK.


### 3. How to Submit Your Answer
1. After fixing the bug, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the bug?
   2. How did you fix the bug?
   3. Screenshot of your terminal showing the result of running `index.ts` file.
   4. Wallet address to receive reward NFT.

The PR should prompt you with a PR template. 
