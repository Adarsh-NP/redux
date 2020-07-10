const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'
//can have more than one entry but type is compulsory

const BuyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    
    }
} //the function is called an action creator

// (prevState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
         ...state,  //this is to say that make a copy of the previous state and change only the numOfCakes and keep others the same, remeber the text fields first and last name in react example
         numOfCakes: state.numOfCakes - 1
        }   

        default: return state 
    }
}

const store = createStore(reducer)
console.log('Intial State', store.getState())
const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
unsubscribe()
