// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); 
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'notable cigar vast oblige entry frequent benefit almost ostrich wait other gap',
  'https://rinkeby.infura.io/v3/dc441879f4d74a6385bf0b3300fea512' 
);

const web3 = new Web3(provider);

const deploy = async ()=> {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!']})
  .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] }); 

  console.log('Contract deployed to', result.options.address);
  
};
deploy();