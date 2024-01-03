// call() used to call the function inside the function and also send this reference of the parent to the function
// call() mainly jab use jab apn function ke andar function call krte hain aur 1st function ka changes 2nd func me ho rha ho jo ki apn this pass parke context dete hain jisse ki change ho jaye

function SetUserName(username){
    this.username = username;
    console.log('called');
}

function createUser(name, email, username){
    // SetUserName(username); // called but does not set username of this function as execution of the function is done and this belongs to setuser function context for this context of createUser we will use call function
    // SetUserName.call(username); //  again called but does not set same this wala reason 
    SetUserName.call(this, username); // ye wala sahi chalega kyuki apn isme ye function ka context pass kr rhe ki is function var me username set karo
    this.name = name;
    this.email = email;
}

const userOne = new createUser('Rahul', 'rahul@gmail.com', 'codewithrahul');

console.log(userOne);