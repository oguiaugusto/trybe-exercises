export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const toggleLoginAct = () => ({ type: TOGGLE_LOGIN });

export const REGISTER_COSTUMER = 'REGISTER_COSTUMER';
export const registerCostumerAct = (data) => ({ type: REGISTER_COSTUMER, data });

export const REMOVE_COSTUMER = 'REMOVE_COSTUMER';
export const removeCostumerAct = (email) => ({ type: REMOVE_COSTUMER, email });
