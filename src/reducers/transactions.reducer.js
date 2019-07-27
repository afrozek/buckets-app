import * as log from 'loglevel';


export default (state = [], action ) => {
    switch(action.type) {
        case 'FETCH_TRANSACTIONS' :
            log.debug("transactions.reducer, action.payload: ", action.payload);
            return action.payload;
        default:
            return state;
    }

}