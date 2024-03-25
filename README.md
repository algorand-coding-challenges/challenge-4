# 🎮 Algorand Coding Challenge: Fix The Bug 🐞!

## 🚩 Challenge 4: How Do I Atomically Send 2 Payment Transactions? 🤔
> I want to group 2 payment transactions using Algorand's atomic transfers feature but it's not working!

Inside of `index.ts` file, there is code that is trying to atomically group 2 payment transactions and synchronously send them using atomic transfers. The code is using the [Algorand JavaScript SDK](https://github.com/algorand/js-algorand-sdk) and the [AlgoKit Utils TypeScript](https://github.com/algorandfoundation/algokit-utils-ts/tree/main). 

However, if you try to run the `index.ts` file after going into the `challenge` directory, opening Docker Desktop, and then running:
```bash
algokit bootstrap all
algokit localnet start
npm start
```
it will fail and show this error: `TypeError: signer is not a function`

**Find out what is wrong and fix the bug.**

> 💬 Meet other hackers working on this challenge and get help in the [General Dev Discord Channel](https://discord.com/channels/491256308461207573/813198189334888469)!

## Checkpoint 1: 🧰 Prerequisites 

1. [Install AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.
3. Install [Node.JS / npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

## Checkpoint 2: 💻 Set up your development environment 

1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Clone the repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing.
4. Setup Dev environment using AlgoKit. Run the below command inside of the `challenge` folder.
```bash
algokit bootstrap all
```
This command will install all dependecies and also generate a `.env` file for you.

Video walkthrough of forking and cloning this repository:

https://github.com/algorand-fix-the-bug-campaign/challenge-1/assets/52557585/acde8053-a8dd-4f53-8bad-45de1068bfda

Now you are ready to fix the bug!

## Checkpoint 3: 🐞 Fix the bug 🧐

1. Open Docker Desktop and launch Algorand localnet by running `algokit localnet start` in your terminal [For more info click me!](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet.md#creating--starting-the-localnet). 
3. Go to `./index.ts` and read the comments on the file and fix the bug!
4. After fixing the bug run the below command inside of `challenge` folder: 
```bash
npm run start
```
5. If you see: `The first payment transaction sent 1000000 microAlgos and the second payment transaction sent 2000000 microAlgos` in the console, you successfully fixed the bug! 😆

### References 

- [Atomic Transfers Documentation](https://developer.algorand.org/docs/get-details/atc/?from_query=atomic#template-modal-overlay)
- [AlgoKit Utils TypeScript Documentation](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/transaction.md)

**😰 Are you struggling?**

`atc.addTransaction()` takes in a [`transactionWithSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L105) object as the parameter. You can get the signer of an account using the [`makeBasicAccountTransactionSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L23) function from the Algorand JavaScript SDK.


## Checkpoint 4: 💯 Submit your answer 

1. After fixing the bug, push your code to your forked Github repo and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the result of running `index.ts` file.

## Checkpoint 5: 🏆 Claim your certificate of completion NFT! 🎓

The Algorand Developer Relations team will review the submission and "approve" the PR by labeling it `Approved`. Once it's approved, we will share the magic link to claim your certificate of completion NFT in the comment of the PR!

> The certificate of completion NFT is a verifiable credential minted on the [GoPlausible platform](https://goplausible.com/) that follows the W3C standard for certificates and OpenBadges standard for badges. 

🎉 Congratulations on completing the challenge Algodev! This was the final challenge of the 1st season of #AlgoCodingChallenge. Be on the lookout for the 2nd season of #AlgoCodingChallenge!