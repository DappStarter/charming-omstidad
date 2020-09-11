require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember unit inflict person flip search'; 
let testAccounts = [
"0xf8fcafc7ac8bea75b67c197646426f14be1d7d2277f2c52cf3813ec20f5f88e1",
"0x25dbe82a4641513433b7665f008a04ed25cdb3305c835e350b6a4b0804f4a287",
"0xd100f1b43c1d44bfcb798921c5364fee0081684141ae7eeb4cea8dafdd8bb8dd",
"0xad44f86c23ae764d377581c0f0d5e33c667e14a2c98c3117653abb166ea98f2e",
"0x93ac749b2cfb3c1aa8f34ab022bebf1e8d19a63f446d538099178fb52108936d",
"0xf826917f908fc7c16fc2e486e90bc2cddb0ada0ceb4f1034b0186f668911b401",
"0x0404d479e9253ab2f2a73fcc85f94a7934a09d4b4d94bad8721481c2b9f035d3",
"0xcdecab65806d9b91a9c5f75a091414d4119bc39345a66ac6b380a46b7b1b01ff",
"0xb6d8338a34995ff79c54fb99895bed75798fc8a1022687131655554ed4285261",
"0x2542c0726d66f44e06a5b6464d9fa488d370b3d9c145bd762e2984898d26ef9f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
