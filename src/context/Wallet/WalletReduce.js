import { CONNECT_WALLET, CONNECT_CHAIN, GET_TOKEN_TOTALSUPLY, GET_BALANCE_P_USER, GET_SYMBOL_P } from "../type";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case CONNECT_WALLET:
            return {
                ...state,
                currentAccount: payload

            }
        case CONNECT_CHAIN:
            return {
                ...state,
                chainId: payload.chainId,
                chainName: payload.chainName,
                signer: payload.signer

            }
        case GET_TOKEN_TOTALSUPLY:
            return {
                ...state,
                TokenTotalSupply: payload
            }

        case GET_BALANCE_P_USER:
            return {
                ...state,
                balance_p: payload
            }
        case GET_SYMBOL_P:
            return {
                ...state,
                symbol_P: payload
            }

        default:
            return state;
    }

}