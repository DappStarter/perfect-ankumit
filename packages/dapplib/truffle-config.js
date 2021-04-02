require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth mad sniff install hero fringe gather'; 
let testAccounts = [
"0x1d742c78062337ebd440b0a0bc49ba06b424ba72629ac5d5ddc12b78c5cbc52c",
"0x7c2691f87d4974e8bab67d20ea8f93da94b5ba6985b0f2a930c5ec6f2e2dcadb",
"0x6d2093418cf6925095c787bda5505e1de1adeb2e1c571689dfd734f2904368d8",
"0x89b5128218552364a71b6d370d6b0a96e5faf52a9927b946446f0b6da114c063",
"0x733f23476231b02b00a2c5dd2568e0faa64fdb3a836fa78ccf0581c7bbd4aff6",
"0x4a679a0cbc3f6ef7e15799e097f09343cd7e20a18f6b0ccd0bd1d4fa8ae87dbd",
"0x21bae1d0a4b87226ac103a40d4f2b3da9fe74910292d8345a2e734310cc25c5c",
"0x108ea2a2acbfaa068fe02b0d62ba83810a081e847710809a0b3057a403907451",
"0xdeb7b70ac908036a36d4fea848ba81fe50d75d59cd81cf5269b3e8961af22a18",
"0x3a04eec7bd23b726322acc2ea9d1d62a8c3057f91451e2b5b341c34feeee21c3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
