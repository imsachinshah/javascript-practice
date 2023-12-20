// Immediately Invoked Function Expression

// (function name(){})();

// ( () => ())();

function sayHelloWorld() {
    console.log('Hello World')
}

sayHelloWorld();

(function sayHii(){
    console.log('Hii..!')
})();

// if we don't use ; we get the error if there are more line of code after function as, 
// it doesn't able to think where to stop execution like

(function one(){
    console.log('One')
})();

(function two(){
    console.log('Two')
})();

(function add(num1, num2){
    console.log(num1 + num2);
})(3, 4);

// using arrow function

((num1) => (console.log(num1)))(5);

(() => (console.log('Hello, from Arrow Function...!')))();
