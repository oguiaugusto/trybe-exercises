type Slices = 4 | 6 | 8;

type CommonFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';
type VegetarianFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetFlavors = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza<F, S> { _flavor: F, _slices: S };

class Pizza<F, S> {
  constructor(flavor: F, slices: S) {
    this._flavor = flavor;
    this._slices = slices;
  }
};

const calabresa = new Pizza<CommonFlavors, Slices>('Calabresa', 8);
const marguerita = new Pizza<VegetarianFlavors, Slices>('Marguerita', 6);
const nutela = new Pizza<SweetFlavors, 4>('Nutela', 4);

console.log(calabresa);
console.log(marguerita);
console.log(nutela);