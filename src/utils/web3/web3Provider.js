// Web3Provider.js
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

const Web3Provider = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
