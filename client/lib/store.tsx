import React, { createContext, useReducer } from "react";
import { EthereumProvider } from "hardhat/types"

const typeStateMap = {
  SET_ACCOUNT: "account",
  SET_CHAIN: "chain",
  SET_CONNECTED: "isConnected",
  SET_WEB3: "web3",
  SET_MSG: "msg",
  SET_STEP: "step",
};

export type MetaMaskState = {
  account: string[];
  chain: { id: string | null, name: string | null };
  isConnected: boolean;
  web3: null | EthereumProvider,
  msg: string,
  step: string,
}

type ReducerAction = {
  type: string,
  payload: number | string | object
}

export const initialState: MetaMaskState = {
  account: [],
  chain: { id: null, name: "" },
  isConnected: false,
  web3: null,
  msg: "",
  step: "STEP1",
};

const reducer = (state, action: ReducerAction) => {
  const stateName = typeStateMap[action.type as keyof typeof typeStateMap];
  if (!stateName) {
    console.warn(`Unkown action type: ${action.type}`);
    return state;
  }
  return { ...state, [stateName]: action.payload };
}

const MetaStateContext = createContext(initialState);
const MetaDispatchContext = createContext();

const MetamaskStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MetaDispatchContext.Provider value={dispatch}>
      <MetaStateContext.Provider value={state}>
        {children}
      </MetaStateContext.Provider>
    </MetaDispatchContext.Provider>
  );
};

export {
  typeStateMap,
  MetaStateContext,
  MetaDispatchContext,
  MetamaskStateProvider
}