import { useEffect, useState } from 'react';
import { useContract, useSigner } from 'wagmi';

const tokens = [
  {
    coinFirstName: 'Jane Cooper',
    coinLastName: 'Jane Cooper',
    blockchain: 'BSC',
    liquidity: '0%',
    ranking: 'N/A',
    token_lock: '29,810,197,200.00 (99.367%)',
    value_lock: '$ 1,047,298,406.27	',
    next_lock: '28 Days',
    action: 'View',
  },
];
export default function Coins() {
  const abi = require('@/abi/lockupABI.json');

  const [stt, setStt] = useState(1);
  const { data: signer, isError, isLoading } = useSigner();

  const lock = useContract({
    address: '0xc0698e75550aA53C8212Ef857d19ecf1DdE834E9',
    abi: abi,
    signerOrProvider: signer,
  });
  useEffect(() => {
    const fun = async () => {
      await lock?.register_user(
        'anish',
        '0xC398Bc9182bF56fB709d5983bbF8303BdcfE058C',
        '0xC398Bc9182bF56fB709d5983bbF8303BdcfE058C',
      );
    };
    fun();
  }, [stt]);

  return (
    <div className="flex flex-col">
      <div className="bg-white my-5">
        <h2 className="sr-only">Why you should buy from us</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex items-center py-6 pl-6 pr-8 space-x-4 bg-cover shadow-lg bg-indigo-600 rounded-xl sm:px-8">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                    }}
                  />
                </span>
                <img
                  alt="Icon"
                  srcSet="/_next/image?url=%2Ficons%2Fdollar.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fdollar.png&w=48&q=75 2x"
                  src="/_next/image?url=%2Ficons%2Fdollar.png&w=48&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </div>
            <div className="text-white">
              <span className="text-xl font-semibold">
                $&nbsp;465,366,318.00
              </span>
              <h6 className="text-sm text-white/80">Total Token Lock Value</h6>
            </div>
          </div>
          <div className="flex items-center py-6 pl-6 pr-8 space-x-4 bg-cover shadow-lg bg-indigo-600 rounded-xl sm:px-8">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                    }}
                  />
                </span>
                <img
                  alt="Icon"
                  srcSet="/_next/image?url=%2Ficons%2Fchart.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Fchart.png&w=48&q=75 2x"
                  src="/_next/image?url=%2Ficons%2Fchart.png&w=48&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </div>
            <div className="text-white">
              <span className="text-xl font-semibold">
                $&nbsp;186,587,252.15
              </span>
              <h6 className="text-sm text-white/80">
                Total Liquidity Lock Value
              </h6>
            </div>
          </div>
          <div className="flex items-center py-6 pl-6 pr-8 space-x-4 bg-cover shadow-lg bg-indigo-600 rounded-xl sm:px-8">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                    }}
                  />
                </span>
                <img
                  alt="Icon"
                  srcSet="/_next/image?url=%2Ficons%2Flock.png&w=32&q=75 1x, /_next/image?url=%2Ficons%2Flock.png&w=48&q=75 2x"
                  src="/_next/image?url=%2Ficons%2Flock.png&w=48&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </div>
            <div className="text-white">
              <span className="text-xl font-semibold">31108</span>
              <h6 className="text-sm text-white/80">
                Projects Locked With Team Finance
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="-my-2 overflow-x-auto  ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Blockchain
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Liquidity Locked
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coingecko ranking
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tokens Locked
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Value locked
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Next unlock
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tokens.map((token) => (
                  <tr key={token.blockchain}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          /> */}
                          <div className="h-2 w-2 rounded-full"></div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {token.blockchain}
                          </div>
                          <div className="text-sm text-gray-500">
                            {token.blockchain}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {token.blockchain}
                      </div>
                      <div className="text-sm text-gray-500">
                        {token.liquidity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.liquidity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.ranking}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.token_lock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.value_lock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {token.next_lock}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="text-indigo-600 hover:text-indigo-900">
                        {token.action}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button onClick={() => setStt(stt + 1)}>Lock</button>
      </div>
    </div>
  );
}
