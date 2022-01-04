const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

const showClickerCountValue = (clicks) => {
  const clicksCounter = document.getElementById("clicks-counter");
  clicksCounter.innerText = clicks;
};

showCountValue(0);
showClickerCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = (value = 1) => {
  value = value === "" ? 1 : parseInt(value, 10);
  store.dispatch({ type: INCREMENTO, value });
};

const actionDecremento = (value) => {
  value = value === "" ? 1 : parseInt(value, 10);
  store.dispatch({ type: DECREMENTO, value });
};

// ========== REDUCER ==========
const initialState = { counter: 0, clicks: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        counter: (state.counter += action.value),
        clicks: (state.clicks += 1)
      };
    case DECREMENTO:
      return {
        ...state,
        counter: (state.counter -= action.value),
        clicks: (state.clicks += 1)
      };
    default:
      return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { counter, clicks } = store.getState();
  showCountValue(counter);
  showClickerCountValue(clicks);
  incInput.value = "";
  decInput.value = "";

  console.log(clicks);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

const incInput = document.getElementById("inc-input");
const decInput = document.getElementById("dec-input");

btnInc.addEventListener("click", () => actionIncremento(incInput.value));
btnDec.addEventListener("click", () => actionDecremento(decInput.value));
