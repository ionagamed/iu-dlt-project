import { Button } from '@material-ui/core'
import React, { ReactElement, useContext, useState } from 'react'
import Web3 from 'web3'

const abi = [{ 'inputs': [], 'stateMutability': 'nonpayable', 'type': 'constructor' }, {
  'inputs': [{
    'components': [{ 'internalType': 'string', 'name': 'inventorName', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'applicantName',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'state', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'addr',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'title', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'website',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'country', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'patentNumber',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'decisionNumber', 'type': 'string' }, {
      'internalType': 'uint256',
      'name': 'decisionDate',
      'type': 'uint256'
    }, { 'internalType': 'string', 'name': 'lawNumber', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'classificationNumber',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'certificationAuthorityName', 'type': 'string' }],
    'internalType': 'struct IdeaChainCoin.PatentPayload',
    'name': 'payload',
    'type': 'tuple'
  }], 'name': 'createPatent', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [], 'name': 'getAllPatents', 'outputs': [{
    'components': [{ 'internalType': 'uint256', 'name': 'id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'owner',
      'type': 'address'
    }, {
      'components': [{ 'internalType': 'string', 'name': 'inventorName', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'applicantName',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'state', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'addr',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'title', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'website',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'country', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'patentNumber',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'decisionNumber', 'type': 'string' }, {
        'internalType': 'uint256',
        'name': 'decisionDate',
        'type': 'uint256'
      }, { 'internalType': 'string', 'name': 'lawNumber', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'classificationNumber',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'certificationAuthorityName', 'type': 'string' }],
      'internalType': 'struct IdeaChainCoin.PatentPayload',
      'name': 'payload',
      'type': 'tuple'
    }], 'internalType': 'struct IdeaChainCoin.Patent[]', 'name': '', 'type': 'tuple[]'
  }], 'stateMutability': 'view', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'id', 'type': 'uint256' }], 'name': 'getPatent', 'outputs': [{
    'components': [{ 'internalType': 'uint256', 'name': 'id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'owner',
      'type': 'address'
    }, {
      'components': [{ 'internalType': 'string', 'name': 'inventorName', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'applicantName',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'state', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'addr',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'title', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'website',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'country', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'patentNumber',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'decisionNumber', 'type': 'string' }, {
        'internalType': 'uint256',
        'name': 'decisionDate',
        'type': 'uint256'
      }, { 'internalType': 'string', 'name': 'lawNumber', 'type': 'string' }, {
        'internalType': 'string',
        'name': 'classificationNumber',
        'type': 'string'
      }, { 'internalType': 'string', 'name': 'certificationAuthorityName', 'type': 'string' }],
      'internalType': 'struct IdeaChainCoin.PatentPayload',
      'name': 'payload',
      'type': 'tuple'
    }], 'internalType': 'struct IdeaChainCoin.Patent', 'name': '', 'type': 'tuple'
  }], 'stateMutability': 'view', 'type': 'function'
}, {
  'inputs': [],
  'name': 'getUserProfile',
  'outputs': [{
    'components': [{
      'internalType': 'string',
      'name': 'name',
      'type': 'string'
    }, { 'internalType': 'string', 'name': 'email', 'type': 'string' }, {
      'internalType': 'string',
      'name': 'bio',
      'type': 'string'
    }, { 'internalType': 'bool', 'name': 'isRegistered', 'type': 'bool' }],
    'internalType': 'struct IdeaChainCoin.UserProfile',
    'name': '',
    'type': 'tuple'
  }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
    'internalType': 'string',
    'name': 'email',
    'type': 'string'
  }, { 'internalType': 'string', 'name': 'bio', 'type': 'string' }],
  'name': 'registerUser',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'id', 'type': 'uint256' }, {
    'internalType': 'address',
    'name': 'to',
    'type': 'address'
  }], 'name': 'transferPatent', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}]
const address = '0xF702d3A97B9a0470bA13D20165371C648A4f4a7d'

declare global {
  interface Window {
    web3: Web3
    ethereum: any
  }
}

interface Ok {
  fallback?: undefined
  ethereum: Ethereum
  provideEthereum: (x: ReactElement) => ReactElement
}

interface NotOk {
  fallback: ReactElement
  ethereum?: undefined
  provideEthereum?: undefined
}

type UseEthereumResult = Ok | NotOk

export interface UserProfile {
  email: string
  bio: string
  name: string
  isRegistered: boolean
}

export interface PatentPayload {
  inventorName: string
  applicantName: string
  state: string
  addr: string
  title: string
  website: string
  country: string
  patentNumber: string
  decisionNumber: string
  decisionDate: number
  lawNumber: string
  classificationNumber: string
  certificationAuthorityName: string
}

export interface Patent {
  id: number
  owner: string
  payload: PatentPayload
}

export interface MixedPatent extends PatentPayload, Patent {
}

export function mixPatent (patent: Patent): MixedPatent {
  return {
    ...patent,
    ...patent.payload
  }
}

class Ethereum {
  constructor (
    public account: string,
    private contract = new window.web3.eth.Contract(abi as any, address)
  ) {
    window.web3.defaultAccount = account
  }

  async getMyProfile (): Promise<UserProfile> {
    return await this.contract.methods.getUserProfile().call({ from: this.account })
  }

  async updateMyProfile (values: UserProfile): Promise<void> {
    return await this.contract.methods.registerUser(values.name, values.email, values.bio).send({ from: this.account })
  }

  async getAllPatents (): Promise<Patent[]> {
    return (await this.contract.methods.getAllPatents().call()).map((x: any) => ({ ...x }))
  }

  async createPatent (values: PatentPayload): Promise<void> {
    return await this.contract.methods.createPatent(values).send({ from: this.account })
  }

  async getPatent (id: string): Promise<Patent> {
    return await this.contract.methods.getPatent(Number(id)).call()
  }

  async transferPatent (id: number, transferTo: string): Promise<void> {
    return await this.contract.methods.transferPatent(id, transferTo).send({ from: this.account })
  }
}

const EthereumContext = React.createContext<Ethereum | undefined>(undefined)

export function useEthereumInit (): UseEthereumResult {
  const [account, setAccount] = useState<string | undefined>(undefined)

  if (window.ethereum === undefined) {
    return { fallback: <>Metamask is not installed</> }
  }

  if (!account) {
    return {
      fallback: <MetamaskRequest onAccount={(x: string) => setAccount(x)}/>
    }
  }

  window.web3 = new Web3(window.ethereum)
  window.ethereum.enable()

  const ethereum = new Ethereum(account)
  return {
    provideEthereum: (x) =>
      <EthereumContext.Provider value={ethereum}>{x}</EthereumContext.Provider>,
    ethereum,
    fallback: undefined
  }
}

export function useEthereum (): Ethereum {
  return useContext(EthereumContext) as Ethereum
}

function MetamaskRequest ({ onAccount }: { onAccount: (x: string) => void }) {
  function connectMetamask () {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then((x: string[]) => onAccount(x[0]))
  }

  return <Button variant={'contained'} onClick={connectMetamask}>Connect MetaMask account</Button>
}
