import { boot } from 'quasar/wrappers';
import Web3 from 'web3';


import donations from '../donations.json';
import chains from '../blockchains.json';
export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api
  
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$web3 = {
      instance: null,
      chains,
      donations,
      mainnetProvider,
    };
  });