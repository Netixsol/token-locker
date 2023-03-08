import { State } from '@/state/reducers/token';
import { ethers } from 'ethers';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContract, useSigner } from 'wagmi';

const useApproveToken = () => {
  const { data: signer } = useSigner();
  const erc20Abi = require('@/abi/erc20ABI.json');

  const erc20 = useContract({
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    abi: erc20Abi,
    signerOrProvider: signer,
  });
  const redux = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const approveToken = useCallback(async () => {
    try {
      const app = await erc20?.approve(
        '0xc0698e75550aA53C8212Ef857d19ecf1DdE834E9',
        ethers.utils.parseEther(redux.lockAmount ? redux.lockAmount : '0'),
      );
      const conformation = await app.wait();
      if (conformation) {
        dispatch({
          type: 'APPROVE_TOKEN',
          payload: {
            approve: true,
          },
        });
      }
    } catch (error) {}
  }, []);
  return {
    approveToken,
  };
};
export default useApproveToken;
