// import Image from './Image';
import React from 'react';
import Order from './Order';
import './App.css';

class App extends React.Component {
  render() {
    const products = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];

    return (
      // <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
      <div className='App'>
        <h1> Orders recently created </h1>
        {products.map((product) => <Order order={product}/>)}
      </div>
    );
  }
}

export default App;
