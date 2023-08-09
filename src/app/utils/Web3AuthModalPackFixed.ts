import { Web3AuthModalPack } from '@safe-global/auth-kit'
import { IAdapter } from '@web3auth/base';
import { ModalConfig, Web3AuthOptions } from '@web3auth/modal';
import { AdapterNamespaceType } from "@web3auth/base";

export declare interface IAdapterFixed<T> extends IAdapter<T> {
    adapterNamespace: AdapterNamespaceType;
}

export declare class Web3AuthModalPackFixed extends Web3AuthModalPack {
    override init({ options, adapters, modalConfig }: {
        options: Web3AuthOptions;
        adapters?: IAdapter<unknown>[];
        modalConfig?: Record<string, ModalConfig>;
    }): Promise<void>;
}
