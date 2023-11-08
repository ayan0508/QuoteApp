import * as actionType from '../Contants/Quote';

export const getTag=(state={tags:[]},actions)=>{
    switch(actions.type){
        case actionType.GET_TAG_SUCCESS:
            return {tags: actions.payload}
        case actionType.GET_TAG_FAILURE:
            return {error: actions.payload}
        default:
            return state;
    }
}

export const getRandom=(state={quotes:[]},actions)=>{
    switch(actions.type){
        case actionType.GET_RANDOM_SUCCESS:
            return {quotes: actions.payload}
        case actionType.GET_RANDOM_FAILURE:
            return {error: actions.payload}
        default:
            return state;
    }
}

export const getRandombyTag=(state={quotes:[]},actions)=>{
    switch(actions.type){
       
        case actionType.GET_RANDOM_BY_TAG_SUCCESS:
            return {quotes:actions.payload}
        case actionType.GET_RANDOM_BY_TAG_FAILURE:
            return {error: actions.payload}
        default:
            return state;
    }
}