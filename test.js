const str = 'boraps-app@z8L4BUpYRqD6wi9s';

const a = Buffer.from(str).toString('base64');
console.log('a: ', a);


const b = Buffer.from(a, 'base64').toString('ascii');

console.log(b);
