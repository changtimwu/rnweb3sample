This is a simple React-Native sample to demostrate how to integrate [web3.js 1.0](https://github.com/ethereum/web3.js/tree/1.0) branch.
Most settings are just copied from this [discussion](https://github.com/ethereum/web3.js/issues/1022).

Below are some personal rational written in a FAQ style.
## Why `web3.js` can't be used in React-Native?
`web3.js` is basically written for NodeJS.  It uses quite a lot node modules, which may not be run in a typical RN JS runtime(ex.  `javascript-core`).

## But I see `web3.js`'s code handles browser case [ex](https://github.com/ethereum/web3.js/blob/1.0/packages/web3-eth-accounts/src/index.js#L34).  It's supposed to be run in a browser, isn't it?
Yes, it does.  However Metro bundler checks binding while bundling time.  All `node` references must be there or the bundler would complain something like `not found`.  That's also why make it run in RN is a bit trickier than in a web browser.

## What is `rn-cli.config.js` used for?
Metro bundler loads this file before doing the bundling work.  We use `node-libs-browser` to complete all node references.

## I always got error at initialization stage loading.  It looks like a runtime error instead of compile-time like you said.
In RN development, most jobs are done while initialization including code bundling.  If something wrong, new developers always get confused with a red screen and hard-to-comprehend error message.  To quickly get out of these error, figuring out which stage the the errors are emited from is more important than message itself.
