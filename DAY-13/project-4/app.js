const {a,b,c} = require('./variables');
const {hello,hey,hi} = require('./function');

//console.log(name.c);
//console.log(a,b,c);

// hello(c);
// hey(b);
// hi(a);


let user = {
    name:"siva",
};
console.log(user?.fname ? user.fname : 'No data');