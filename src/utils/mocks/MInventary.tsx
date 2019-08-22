import IMockInventary from '../../interfaces/IMockInventary';

const MockInventary: IMockInventary[] = [
  {
    id: 1,
    description: 'Dog Show',
    price: 10000,
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    quantity: 10,
    discount: 3
  },
  {
    id: 2,
    description: 'Cat Show',
    price: 50000,
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    quantity: 30,
    discount: 5
  }, 
  {
    id: 3,
    description: 'Agility Gold',
    price: 25000,
    image: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    quantity: 1,
    discount: 0
  }
];

export default MockInventary;
