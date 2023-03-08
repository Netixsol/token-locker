import { allBlockchains } from '@/constants/lockups';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ChooseToken = () => {
  const [stepOne, setStepOne] = useState(allBlockchains);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const findArray = stepOne.find((v, i) => v.checked == true);
  const storeToken = () => {
    dispatch({
      type: 'STORE_TOKEN',
      payload: { tokenName: findArray?.name },
    });
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 mx-auto max-w-7xl space-y-8">
        <div>
          <div role="radiogroup">
            <div className="grid gap-4 px-4 text-center md:grid-cols-2 lg:grid-cols-3">
              {stepOne.map((v, i) => {
                const onClick = () => {
                  setStepOne(
                    stepOne.map((v, ind) => {
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
                    key={i}
                    onClick={onClick}
                    className={` ${
                      v.checked ? 'border-blue-600' : 'border-gray-200'
                    }  flex cursor-pointer select-none rounded border bg-white px-4 py-3`}
                  >
                    <div className="inline-flex w-full items-center space-x-4 text-left">
                      {/* icon */}
                      <div className="flex w-full items-center justify-between">
                        <h6 id="headlessui-label-:R38dcilm:">
                          {v.name}
                          <p className="font-base text-xs text-gray-500">
                            Choose if your token is built on {/* */}ETH
                          </p>
                        </h6>
                        <span
                          className={` ${
                            v.checked
                              ? 'border-transparent bg-blue-600 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300'
                              : 'h-6 w-6 rounded-full bg-white border-2'
                          } `}
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
          <div className="px-4 py-6 text-center md:py-4">
            <button
              disabled={!findArray}
              onClick={() => storeToken()}
              className="md:max-w-sm inline-flex items-center justify-center font-medium rounded-md  duration-150 disabled:cursor-not-allowed bg-blue-600 border border-blue-600 text-white focus:ring-2 focus:bg-blue-600 focus:ring-blue-300 focus:outline-none hover:bg-blue-700 disabled:bg-blue-500 disabled:text-neutral-50 px-4 py-2 text-base w-full"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseToken;
