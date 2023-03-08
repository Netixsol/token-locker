import useApproveToken from '@/hooks/useApproveToken';
import useTokenLock from '@/hooks/useTokenLock';
import { State } from '@/state/reducers/token';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ConfigureLock = () => {
  const dispatch = useDispatch();
  const redux = useSelector((state: State) => state);
  const [expiration, setExpiration] = useState(0);
  const [lockAmount, setLockAmount] = useState('0');

  const storeData = () => {
    dispatch({
      type: 'STORE_DATA',
      payload: {
        expiration: expiration,
        lockAmount: lockAmount,
      },
    });
  };

  const { approveToken } = useApproveToken();
  const { lockToken } = useTokenLock();
  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-center gap-4 md:max-w-md">
        <div className="text-center">
          <p className="text-gray-500">Configure Lock</p>
        </div>
        <div className="w-full divide-y divide-neutral-200 rounded-md border border-neutral-200">
          <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
            <span className="text-neutral-500">Symbol</span>
            <div className="inline-flex items-center gap-x-1.5 font-medium">
              <div className="flex items-center">
                <span className="text-lg font-medium ">WETH</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
            <span className="text-neutral-500">Balance</span>
            <span className="font-medium">0.0300573</span>
          </div>
          <div className="flex flex-col px-4 py-3 md:flex-row md:items-center md:justify-between">
            <span className="text-neutral-500">Lock Amount</span>
            <div className="flex flex-col">
              <div className="flex">
                <input
                  type="number"
                  name="amount"
                  onChange={(e) => {
                    setLockAmount(e.target.value), storeData();
                  }}
                  className="w-40 bg-transparent transition placeholder:text-neutral-300 text-neutral-700 border border-gray-300 rounded py-1 px-2 focus:ring-2 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height={18}
          width={18}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" />
        </svg>
        <div className="grid w-full grid-cols-2 gap-4 rounded-md border border-gray-300 px-4 py-3">
          <div className="w-full space-y-1">
            <span className="text-sm bg-transparent">Unlock Date</span>
            <div className="relative ">
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container">
                  <input
                    type="datetime-local"
                    onChange={(e) => {
                      setExpiration(new Date(e.target.value).valueOf());
                      storeData();
                    }}
                    className="flex w-full bg-transparent border border-gray-400 rounded-md"
                    defaultValue="Apr 06,2023"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full space-y-1 text-sm text-neutral-500">
          <div className="flex justify-between px-0.5">
            <span>Service Fee</span>
            <span className="text-green-500">0.0000 ETH</span>
          </div>
          <div className="flex justify-between px-0.5">
            <span>Total Lockup Amount</span>
            <span>{lockAmount} WETH</span>
          </div>
          <div className="flex justify-between px-0.5">
            <span>Unlock Date</span>
            <span>{new Date(expiration).toDateString()}</span>
          </div>
          {/* <div className="flex justify-between px-0.5">
            <span>Mint Liquidity Lock NFT</span>
            <input
              name="mintNftCheckbox"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div> */}
        </div>
        <div className="inline-flex w-full space-x-4">
          <button
            onClick={approveToken}
            className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150 disabled:cursor-not-allowed bg-blue-600 border border-blue-600 text-white focus:ring-2 focus:bg-blue-600 focus:ring-blue-300 focus:outline-none hover:bg-blue-700 disabled:bg-blue-500 disabled:text-neutral-50 px-4 py-2 text-base w-full"
          >
            Approve
          </button>
          <button
            disabled={!redux.approve}
            onClick={lockToken}
            className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150 disabled:cursor-not-allowed bg-blue-600 border border-blue-600 text-white focus:ring-2 focus:bg-blue-600 focus:ring-blue-300 focus:outline-none hover:bg-blue-700 disabled:bg-blue-500 disabled:text-neutral-50 px-4 py-2 text-base w-full"
          >
            Lock
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigureLock;
