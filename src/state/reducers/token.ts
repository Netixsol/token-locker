// const initialState = {
//   isLoggedIn: false,
//   user: '',
// };
type Asset = {
  symbol: string;
  balance: string;
  decimals: number;
  address: string;
};

export type State = {
  tokenName?: string;
  asset?: Asset;
  lockAmount?: string;
  expiration?: number;
  approve?: boolean;
  lpToken?: boolean;
  step?: number;
  modal?: boolean;
};

const initialState: State = {
  tokenName: '',
  asset: {
    symbol: '',
    balance: '',
    decimals: 0,
    address: '',
  },
  lockAmount: '0',
  expiration: 0,
  approve: false,
  lpToken: false,
  step: 1,
  modal: false,
};
interface Action {
  type: string;
  payload: State;
}
export const token = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return {
        ...state,
        tokenName: action.payload.tokenName,
        step: 2,
      };
    case 'CHANGE_STEP':
      return {
        ...state,
        step: action.payload.step,
      };
    case 'STORE_ASSET':
      return {
        ...state,
        asset: action.payload.asset,
        step: 3,
      };
    case 'STORE_DATA':
      return {
        ...state,
        expiration: action.payload.expiration,
        lockAmount: action.payload.lockAmount,
      };
    case 'APPROVE_TOKEN':
      return {
        ...state,
        approve: action.payload.approve,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        modal: action.payload.modal,
      };
    default:
      return state;
  }
};
