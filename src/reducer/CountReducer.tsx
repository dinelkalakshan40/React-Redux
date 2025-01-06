const defaultState ={
    number : 0
}
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';

// Create and export the store

const reducer=(state=defaultState,action:{type:string;payload:number})=>{
    switch (action.type) {
        case INCREMENT:
            return{...state,number: state.number+1};
        case DECREMENT:
            return {...state,number: state.number-1}
        default:
            return state;
    }
}
// Action creators for increment and decrement
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export default  reducer