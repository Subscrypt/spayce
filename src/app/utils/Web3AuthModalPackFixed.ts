import { Web3AuthModalPack } from '@safe-global/auth-kit'
import { IAdapter } from '@web3auth/base';
import { ModalConfig, Web3AuthOptions } from '@web3auth/modal';

export declare const ADAPTER_NAMESPACES: {
    readonly EIP155: "eip155";
    readonly SOLANA: "solana";
    readonly MULTICHAIN: "multichain";
    // readonly XRPL: "xrpl";
};
export type AdapterNamespaceTypeFixed = (typeof ADAPTER_NAMESPACES)[keyof typeof ADAPTER_NAMESPACES];

export declare interface IAdapterFixed<T> extends IAdapter<T> {
    adapterNamespace: AdapterNamespaceTypeFixed;
}

export declare class Web3AuthModalPackFixed extends Web3AuthModalPack {
    init({ options, adapters, modalConfig }: {
        options: Web3AuthOptions;
        adapters?: IAdapterFixed<unknown>[];
        modalConfig?: Record<string, ModalConfig>;
    }): Promise<void>;
}
