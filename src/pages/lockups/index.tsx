import ChooseToken from '@/components/ChooseToken';
import ConfigureLock from '@/components/ConfigureLock';
import SelectAsset from '@/components/SelectAsset';
import { allBlockchains } from '@/constants/lockups';
import { State } from '@/state/reducers/token';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Lockups = () => {
  const [stepOne, setStepOne] = useState(allBlockchains);
  const Steps: any = [<></>, ChooseToken, SelectAsset, ConfigureLock];
  const stepData = useSelector((state: State) => state?.step);
  const step = stepData ? stepData : 0;
  const dispatch = useDispatch();

  const changeStep = (v: number) => {
    dispatch({
      type: 'CHANGE_STEP',
      payload: { step: v },
    });
  };
  const Component = Steps[step];
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 mx-auto max-w-7xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-medium text-blue-600">
            Create your own custom token lock instantly
          </h1>
          <p className="sm:text-lg">
            All tokens are locked into our audited smart contract and can only
            be withdrawn by you after lock time expires.
          </p>
        </div>
        <div>
          {/* <div className="rounded-xl border border-neutral-200 bg-white">
            <div className="flex items-center justify-center rounded-t-xl bg-neutral-100 p-4 text-lg font-medium">
              Create New Lock
            </div>
            <div className="px-4 py-6 text-center md:py-4">
              <button
                disabled={false}
                className="md:max-w-sm inline-flex items-center justify-center font-medium rounded-md  duration-150 disabled:cursor-not-allowed bg-blue-600 border border-blue-600 text-white focus:ring-2 focus:bg-blue-600 focus:ring-blue-300 focus:outline-none hover:bg-blue-700 disabled:bg-blue-500 disabled:text-neutral-50 px-4 py-2 text-base w-full"
              >
                Continue
              </button>
            </div>
          </div> */}
          <div className="rounded-xl border border-neutral-200 bg-white">
            <div className="flex items-center justify-center rounded-t-xl bg-neutral-100 p-4 text-lg font-medium">
              <p>Step {step} of 3</p>
              {Array.from(Array(3).keys()).map((v, i) => {
                const checked = step >= v + 1;
                return (
                  <div
                    key={v}
                    onClick={() => {
                      checked && changeStep(v + 1);
                    }}
                    className={` ${
                      checked ? 'bg-indigo-600' : 'bg-white'
                    }  border ml-2 w-3 h-3 rounded-full   border-gray-500`}
                  ></div>
                );
              })}
            </div>
            <div className="flex justify-center items-center space-x-2"></div>
            <div className="border-b border-neutral-200" />
            <div className="py-4 text-center">
              <p className="text-gray-500">
                Choose the blockchain that the token you are locking is built
                on.
              </p>
            </div>
            <Component />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lockups;
