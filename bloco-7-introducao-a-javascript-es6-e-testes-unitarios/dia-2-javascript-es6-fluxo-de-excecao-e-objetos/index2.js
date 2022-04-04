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

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const entregaPara = order.name;
  const phone = order.phoneNumber;
  const rua = order.address.street;
  const num = order.address.number;
  const ap = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para:  ${entregaPara}, telefone ${phone}, ${rua}, ${num} - AP ${ap}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const novoComprador = order.name = 'Luiz Silva';
  const pizza = Object.keys (order.order.pizza);
  const drink = order.order.drinks.coke.type;
  order.payment.total = 50;
  const pay = order.payment.total;


  console.log(`Olá ${novoComprador}, o total do seu pedido de ${pizza[0]} e ${pizza[1]} com ${drink} é de ${pay}.`);
}

orderModifier(order);