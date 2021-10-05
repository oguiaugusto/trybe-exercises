const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
const ordered = order['order'];
const pizzas = ordered['pizza'];

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const message = `Olá ${order['order']['delivery']['deliveryPerson']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R. ${order['address']['street']} Nº: ${order['address']['number']}, AP: ${order['address']['apartment']}`;
  return message;
}

console.log(customerInfo(order));

order['order']['delivery']['deliveryPerson'] = 'Luiz Silva';
order['payment']['total'] = 50;

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizza1 = Object.keys(pizzas)[0];
  const pizza2 = Object.keys(pizzas)[1];
  const drink = ordered['drinks']['coke']['type'];
  const message = `Olá ${order['order']['delivery']['deliveryPerson']}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é R$${order['payment']['total']},00.`;
  return message;
}

console.log(orderModifier(order));
