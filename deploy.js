const TronWeb = require('tronweb');

const privateKey = process.env.PK;
const tronWeb = new TronWeb(
    'https://trontestnet.mywish.io',
    'https://trontestnet.mywish.io',
    'https://trontestnet.mywish.io',
    privateKey
);

const TronRegister = require('./build/contracts/TronRegister');

(async () => {
    const transaction = await tronWeb.transactionBuilder.createSmartContract({
        abi: TronRegister.abi,
        bytecode: TronRegister.bytecode
    });
    const signedTransaction = await tronWeb.trx.sign(transaction);
    const contract = await tronWeb.trx.sendRawTransaction(signedTransaction);
    console.info(contract);
})();
