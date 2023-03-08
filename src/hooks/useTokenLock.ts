import { State } from '@/state/reducers/token';
import { ethers } from 'ethers';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount, useContract, useSigner } from 'wagmi';

const useTokenLock = () => {
  const { address } = useAccount();
  const dispatch = useDispatch();
  const { data: signer } = useSigner();
  const lockAbi = require('@/abi/lockupABI.json');
  const lock = useContract({
    address: '0xc0698e75550aA53C8212Ef857d19ecf1DdE834E9',
    abi: lockAbi,
    signerOrProvider: signer,
  });
  const redux = useSelector((state: State) => state);
  console.log('exp', redux.expiration);
  const lockToken = useCallback(async () => {
    try {
      const lockToken = await lock?.lock(
        address,
        '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        false,
        ethers.utils.parseEther(redux.lockAmount ? redux.lockAmount : '0'),
        redux.expiration,
      );
      const approve = await lockToken.wait();
      if (approve) {
        dispatch({1
          type: 'SHOW_MODAL',
          payload: {
            modal: true,
          },
        });
      }
    } catch (error) {}
  }, []);
  return {
    lockToken,
  };
};
export default useTokenLock;
