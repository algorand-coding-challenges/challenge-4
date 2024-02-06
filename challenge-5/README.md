# Algorand Fix The Bug Challenge #5

> Ensure you review the README for comprehensive instructions on how to participate in this challenge.

## Description

Inside of `index.ts` file, there is code that is trying to atomically group 2 payment transactions and synchronously send them using atomic transfers. The code is using the [Algorand JavaScript SDK](https://github.com/algorand/js-algorand-sdk) and the [AlgoKit Utils TypeScript](https://github.com/algorandfoundation/algokit-utils-ts/tree/main). 

However, if you try to run the `index.ts` file with `bun run index.ts` after cloning this repo, it will fail.

**Find out what is wrong and fix the bug.**

## Prerequisites
1. [Install Bun](https://bun.sh/docs/installation). Bun was used because it can [directly run TypeScript files.](https://bun.sh/docs/runtime/typescript)
```bash
# with install script (recommended)
curl -fsSL https://bun.sh/install | bash

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```
1. [Install AlgoKit](https://developer.algorand.org/docs/get-started/algokit/#install-algokit:~:text=Install%20AlgoKit-,%C2%B6,-Windows).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.

## Instructions

### 1. Set up your development environment
1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Go to the directory you want to work in with your terminal and clone the forked repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing. The below code example works only if you are using VSCode as your default editor and have the `code .` shorthand set up.
```bash
cd [CLONED_REPO]
code . 
```
4. Install dependencies using AlgoKit. Run the below command inside of the `challenge-5` folder.
```bash
algokit bootstrap all
```

Now you are ready to fix the bug!

### 2. Steps to fix the bug
1. Launch Algorand local network using AlgoKit. Make sure you have Docker Desktop launched before running the below command.
```bash
algokit localnet start
```
2. Go to `./index.ts` and read the comments on the file and fix the bug!

#### References 
- [Atomic Transfers Documentation](https://developer.algorand.org/docs/get-details/atc/?from_query=atomic#template-modal-overlay)
- [AlgoKit Utils TypeScript Documentation](https://github.com/algorandfoundation/algokit-utils-ts/blob/main/docs/capabilities/transaction.md)

#### Hints 
`atc.addTransaction()` takes in a [`transactionWithSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L105) object as the parameter. You can get the signer of an account using the [`makeBasicAccountTransactionSigner`](https://github.com/algorand/js-algorand-sdk/blob/6fdfa116f0e47e68982281028fdc817577c6aab7/src/signer.ts#L23) function from the Algorand JavaScript SDK.

3. After fixing the bug run the below command inside of `challenge-5` folder: 
```bash
bun run index.ts
```
and if you see something like the image below, you have successfully fixed the bug! Congratulations 😆

### 3. How to Submit Your Answer
1. After fixing the bug, push your code to Github and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the bug?
   2. How did you fix the bug?
   3. Screenshot of your terminal showing the result of running `index.ts` file.
   4. Wallet address to receive reward NFT.

The PR should prompt you with a PR template. 
