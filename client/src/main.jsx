import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import './styles/globals.css'
import { BrowserRouter as Router } from 'react-router-dom'

// This is the chainId your dApp will work on.
// const activeChainId = ChainId.Mainnet; Ethereum Mainnet
const activeChainId = ChainId.Goerli // Goerli Testnet

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
)
