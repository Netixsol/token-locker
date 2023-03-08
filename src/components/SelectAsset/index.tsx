import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToken } from 'wagmi';

interface Assets {
  name: string;
  detail: string;
  address: `0x${string}`;
  checked: boolean;
}
const SelectAsset = () => {
  const assetsArray: Assets[] = [
    {
      name: 'WETH',
      detail: 'Wrapped Ether 0.00',
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      checked: false,
    },
  ];
  const [assets, setAssets] = useState(assetsArray);
  const [tokenAddress, setTokenAddress] = useState<`0x${string}`>(
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d3',
  );
  const { data } = useToken({
    address: tokenAddress
      ? tokenAddress
      : '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  });
  const dispatch = useDispatch();
  const storeAsset = () => {
    dispatch({
      type: 'STORE_ASSET',
      payload: {
        asset: {
          symbol: data?.symbol,
          balance: 0.3,
          decimals: data?.decimals,
          address: data?.address,
        },
      },
    });
  };
  return (
    <div>
      <div className="p-6">
        <div className="mx-auto flex flex-col items-center justify-center space-y-4 md:max-w-md">
          <div className="text-center">
            <p className="text-gray-500">
              Enter the token address you would like to lock for
            </p>
          </div>
          <input
            type="text"
            name="search"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value as `0x${string}`)}
            placeholder="Token address"
            className="transition bg-transparent placeholder:text-neutral-300 text-neutral-700 border border-gray-300 rounded py-1 px-2 focus:ring-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none w-full"
          />
          {data && (
            <div className="w-full divide-y divide-neutral-200 rounded-md border border-neutral-200">
              <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
                <span className="text-neutral-500">Symbol</span>
                <div className="inline-flex items-center gap-x-1.5 font-medium">
                  <div className="flex items-center">
                    <span className="text-lg font-medium ">{data.symbol}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
                <span className="text-neutral-500">Balance</span>
                <span className="font-medium">
                  {data?.totalSupply?.formatted}
                </span>
              </div>
              <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
                <span className="text-neutral-500">Decimals</span>
                <span className="font-medium">{data.decimals}</span>
              </div>
            </div>
          )}

          <button
            disabled={!data}
            onClick={storeAsset}
            className="inline-flex bg-indigo-600 items-center justify-center font-medium rounded-md  duration-150 disabled:cursor-not-allowed  border border-blue-600 text-white focus:ring-2 focus:bg-blue-600 focus:ring-blue-300 focus:outline-none hover:bg-blue-700 disabled:bg-blue-500 disabled:text-neutral-50 px-4 py-2 text-base w-full"
          >
            Continue
          </button>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <div
              className="space-y-4"
              id="headlessui-radiogroup-:r21:"
              role="radiogroup"
              aria-labelledby="headlessui-label-:r22:"
            >
              <label
                className="sr-only"
                id="headlessui-label-:r22:"
                role="none"
              >
                Supported chains
              </label>
              <div className="lg:grid-cols-3 grid gap-4" role="none">
                {assets.map((v, i) => {
                  const onClick = () => {
                    setTokenAddress(v.address);
                    setAssets(
                      assets.map((v, ind) => {
                        if (i == ind) {
                          v.checked = true;
                        } else {
                          v.checked = false;
                        }
                        return v;
                      }),
                    );
                  };
                  return (
                    <div
                      key={v.name}
                      onClick={onClick}
                      className={` ${
                        v.checked ? 'border-blue-600' : 'border-gray-200'
                      }  flex cursor-pointer select-none rounded border bg-white px-4 py-3`}
                      // className="border-neutral-200 flex cursor-pointer select-none rounded border bg-white px-4 py-3"
                      id="headlessui-radiogroup-option-:r23:"
                      role="radio"
                      aria-checked="false"
                      tabIndex={0}
                      data-headlessui-state
                      aria-labelledby="headlessui-label-:r24:"
                    >
                      <div className="inline-flex w-full items-center space-x-4 text-left">
                        <div className="flex w-full items-center justify-between">
                          <h6 id="headlessui-label-:r24:">
                            WETH
                            <p className="font-base text-xs text-gray-500">
                              Wrapped Ether 0.00
                            </p>
                          </h6>
                          <span
                            className={` ${
                              v.checked
                                ? 'border-transparent bg-blue-600 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300'
                                : 'h-6 w-6 rounded-full bg-white border-2'
                            } `}
                            // className="bg-white mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300"
                            aria-hidden="true"
                          >
                            <span className="h-2 w-2 rounded-full bg-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAsset;
