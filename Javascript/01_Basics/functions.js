//Function without parameters

function showMessage(){
    console.log("Hello");
}

// showMessage();

//Function with parameters

function showMessage(customMessage){
    console.log(customMessage);
}

//showMessage("Hello user");

//Arrow functions
//with parameter(s)
let showText = (customMessage) => console.log(customMessage);
//showText("This is a arrow function example");

//without parameter
let sayHello = () => console.log("hello");
//sayHello();

//Multi line arrow function
let addNumbers = (num1, num2, num3) => {
    console.log(num1+num2+num3);
}
addNumbers(2,3,4);