const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (thing) => console.log(thing());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);