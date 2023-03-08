import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { navigation, userNavigation } from '@/constants/header';
import { useWeb3Modal } from '@web3modal/react';
import { useState } from 'react';
import {
  useAccount,
  useDisconnect,
  useNetwork,
  useSigner,
  useSwitchNetwork,
} from 'wagmi';
import { useRouter } from 'next/router';
import { shortenAddress } from '@/function/format';
import { classNames } from '@/utils/classNames';
import { useBalance } from 'wagmi';
import { ethFormat } from '@/function/currency';
import { useSelector } from 'react-redux';

export default function Header() {
  const [loading, setLoading] = useState(false);
  const { open, setDefaultChain } = useWeb3Modal();
  const { isConnected, address, connector } = useAccount();
  const { data: signer } = useSigner();

  console.log('connector:', signer);
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });
  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const label = !isConnected
    ? 'Connect Wallet'
    : chain?.id != 5
    ? 'Wrong Network '
    : 'Disconnect';
  function onClick() {
    if (chain?.id != 5) {
      switchNetwork?.(5);
    } else if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }
  const user = useSelector((state) => state);
  console.log('redux', user);
  const router = useRouter().asPath;
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6">X</div>
                    ) : (
                      <div className="block h-6 w-6">E</div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className=" h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        router.includes(item.href)
                          ? ' text-indigo-600 underline'
                          : 'text-gray-900 hover:text-indigo-600',
                        'px-3 py-2 rounded-md text-sm font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative inline-flex items-center px-4 py-2 border border-[#8080806e] shadow-sm text-sm font-medium rounded-md text-white ">
                  <Image
                    src="https://www.team.finance/icons/wizard/ethereum.svg"
                    height={20}
                    width={20}
                    alt="nft"
                  />
                </div>
                {address && isConnected && chain?.id == 5 ? (
                  <div className="relative md:ml-4" data-headlessui-state>
                    <div>
                      <div className="flex rounded-md border border-solid border-gray-300 bg-white pl-1">
                        <div className="inline-flex items-center justify-center p-2">
                          {!isLoading &&
                            !isError &&
                            ethFormat(data?.formatted) + ' ' + data?.symbol}
                        </div>
                        <button
                          className="inline-flex items-center justify-center rounded-r-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white  duration-150 hover:bg-blue-700 focus:ring-2 disabled:cursor-not-allowed disabled:bg-blue-500 disabled:text-neutral-50"
                          id="headlessui-popover-button-:r0:"
                        >
                          {address && shortenAddress(address)}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : chain?.id != 5 ? (
                  <div className="hidden relative md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <p className="absolute z-10 text-[10px] border -top-3 bg-indigo-500 px-1 rounded-sm text-white">
                      Wrong Network
                    </p>
                    <button
                      onClick={onClick}
                      disabled={loading}
                      className="relative !bg-indigo-500 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white "
                    >
                      Switch Network
                    </button>
                  </div>
                ) : (
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button
                      onClick={onClick}
                      disabled={loading}
                      className="relative !bg-indigo-500 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white "
                    >
                      {loading ? 'Loading...' : label}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0"></div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white"></div>
                  <div className="text-sm font-medium text-gray-400"></div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
