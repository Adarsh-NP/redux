const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger  = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECream = 'BUY_ICECream'




//can have more than one entry but type is compulsory
const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
        
    }
} //the function is called an action creator

const BuyIceCream = () => {
    return {
        type: BUY_ICECream,
        info: 'another redux action'
    }
}

// (prevState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 15  //example of single reducer
// }

// const reducer = (state=initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,  //this is to say that make a copy of the previous state and change only the numOfCakes and keep others the same, remeber the text fields first and last name in react example
//             numOfCakes: state.numOfCakes - 1
//         }   
//         case BUY_ICECream: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state 
//     }
// } example of single reducer

// const store = createStore(reducer)
// console.log('Intial State', store.getState())
// const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
// store.dispatch(BuyCake())
// store.dispatch(BuyIceCream())
// store.dispatch(BuyCake())
// store.dispatch(BuyIceCream())
// unsubscribe()
//this was example of single reducer doing all the work



const initialCakes = {
    numOfCakes: 10
}
const initialIceCreams = {
    numOfIceCreams: 15
}



const cakeReducer = (state = initialCakes, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
const IceCreamReducer = (state = initialIceCreams,action) => {
    switch(action.type){
        case BUY_ICECream: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Intial State', store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
store.dispatch(BuyCake())
store.dispatch(BuyIceCream())
unsubscribe()


