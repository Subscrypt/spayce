import { Web3AuthModalPack } from '@safe-global/auth-kit'
import { IAdapter } from '@web3auth/base';
import { ModalConfig, Web3AuthOptions } from '@web3auth/modal';

declare const ADAPTER_NAMESPACES: {
    readonly EIP155: "eip155";
    readonly SOLANA: "solana";
    readonly MULTICHAIN: "multichain";
    readonly XRPL: "xrpl";
};
type AdapterNamespaceTypeFixed = (typeof ADAPTER_NAMESPACES)[keyof typeof ADAPTER_NAMESPACES];

declare interface IAdapterFixed<T> extends IAdapter<T> {
    adapterNamespace: AdapterNamespaceTypeFixed;
}

export default class Web3AuthModalPackFixed extends Web3AuthModalPack {
    /**
     * Initialize the Web3Auth service provider
     * @param options Web3Auth options {@link https://web3auth.io/docs/sdk/web/modal/initialize#arguments}
     * @param adapters Web3Auth adapters {@link https://web3auth.io/docs/sdk/web/modal/initialize#configuring-adapters}
     * @param modalConfig The modal configuration {@link https://web3auth.io/docs/sdk/web/modal/whitelabel#whitelabeling-while-modal-initialization}
     * @throws Error if there was an error initializing Web3Auth
     */
    async init({
        options,
        adapters,
        modalConfig
    }: {
        options: Web3AuthOptions
        adapters?: IAdapterFixed<unknown>[]
        modalConfig?: Record<string, ModalConfig>
    }) {
        super.init({ options, adapters, modalConfig })
    }
}
