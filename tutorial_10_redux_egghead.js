//Redux Tutorials
//In egghead.io by Dan Abramov
//01
const counter = (state, action) => {
  switch(action){
    case 'INC':
        return state + 1;
    case 'DEC':
        return state - 1;
    default:
        return state;
  }
}

var state = 0;

console.log(counter(1 , 'INC')) // 2
console.log(counter(2 , 'INC')) // 3
console.log(counter(state , 'INC')) // 1

//02
//Using the redux createStore
const counter = (state=0, action) => {
  switch(action.type){
    case 'INC':
        return state + 1;
    case 'DEC':
        return state - 1;
    default:
        return state;
  }
}

const {createStore}  = Redux;
const store = createStore(counter);

console.log(store.getState());
store.dispatch({ type:'INC' });
store.dispatch({ type:'INC' });

console.log(store.getState());

//03
//Use vanilla to just fire an increment in the 
//body and print it in the body
const counter = (state=0, action) => {
  switch(action.type){
    case 'INC':
        return state + 1;
    case 'DEC':
        return state - 1;
    default:
        return state;
  }
}

const {createStore}  = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click',() => {
  store.dispatch({ type: 'INC' });
})

//

