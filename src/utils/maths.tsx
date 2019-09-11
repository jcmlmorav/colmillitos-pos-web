export const currencyFormat = (number: number) => `$ ${ number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') }`;

export const getDiscount = (price: number, discount: number) => price * (discount/100);
