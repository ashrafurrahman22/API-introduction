// Javascript Object Notation 
// JSON
const user = { id: 22, name: 'Opu', job: 'Student' };
// console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);


const shop = {
    name: 'Opu Address',
    address: 'Choto Komoldoho',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'], 
    owner: {
        name: 'Opu', 
        profession: 'Student'
    },
    isExpensive: false
};
// console.log(shop);

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);