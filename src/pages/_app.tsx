import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import GlobalStyles from '@/pages/GlobalStyles';
import Header from '@/components/Header';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, polygon } from 'wagmi/chains';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/state/store';
import SuccessModal from '@/components/Modals/SuccessModal';
// 1. Get projectID at https://cloud.walletconnect.com

const projectId = '466554903a7804098efb91cec7b94390';

// 2. Configure wagmi client
const chains = [goerli, polygon];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    version: '1',
    appName: 'token-locker',
    chains,
    projectId,
  }),
  provider,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// Web3Modal Ethereum Client
export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="wraper">
      <Provider store={store}>
        <GlobalStyles />

        {ready ? (
          <WagmiConfig client={wagmiClient}>
            <Header />
            <Component {...pageProps} />
            <SuccessModal />
          </WagmiConfig>
        ) : null}

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Provider>
    </div>
  );
}
