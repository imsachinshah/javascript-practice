// Promises - it the object in js which makes the async call and output will be in it can be resolved or rejected

// Mdn Definition
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise(function(resolve, reject){}).then(function(){}).catch(function(){}).finally(function(){})

// resolve is internally linked with then() likewise reject linked with catch() 
// and finnaly() will always be called if the promise has resolved or rejected


const promiseOne = new Promise(function(resolve, reject){
    // do async task
    // like DB call, cryptography, network call
    setTimeout(function(){
        console.log('Async Task has been completed');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('PromiseOne is resolved');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('PromiseTwo is resolved..!');
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // here we can pass the argument as an object to the resolve() and can be able to get that object in then(function(arg){}) 
        resolve({username: "imsachinshah", email: "imsachinshah0@gmail.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        
        if(!error){
            resolve({username: "helloworld", email: "helloworld@codefarm.dev"});
        }
        else{
            reject('ERROR: Something Went Wrong...!');
        }
    }, 1000);
});

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(`Username: ${username}`);
}).catch(function(error){
    console.log(`${error}`);
}).finally(function(){
    console.log('Here everything executed everytime...')
});

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        
        if(!error){
            resolve({username: "helloworld", email: "helloworld@codefarm.dev"});
        }
        else{
            reject('ERROR: Something Went Wrong...!');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(`error - ${error}`);
    }
}

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});

Promise.all([promiseOne, promiseThree]);

const promises = [promiseOne, promiseFour];

Promise.any(promises)
.then((value) => {console.log(`value: ${value}`)});
