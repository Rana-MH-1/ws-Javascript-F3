// this is a comment 
/* this is another
comment */
// Declaration de variable
//1)
var x= 3;
x = true;
console.log(x)
//2)
let greeting = 'hello';
greeting = false;
//console.log(greeting)
//3)
const a = 8;
//a = 6;
//console.log(a)
//TypeError: Assignment to constant variable.
// we cannot change a constant variable once declared

// object
const Person = {
    name:'Firas',
    age: 24,
    Adresse: 'Testour'
}
/* Person = {
    greeting:'hello'
} */
// TypeError: Assignment to constant variable.
 //but we can modify a value of key or add a new key
 //Modify a value of a key
Person.Adresse = 'Testour Tunisia'
Person["age"] = 23;

//Add a key
Person.FavouriteFoods = ['pasta','pizza']
console.log(Person)

// array instance of obj
const arr = [1,5,87,true, 'abc'];
console.log(typeof(arr))
console.log(typeof(null))
console.log(Array.isArray(arr))

//arr = [5,23,false]
//console.log(arr)
//TypeError: Assignment to constant variable.
// déterminer le nombre des éléments
console.log(arr.length)
// afficher un el 
console.log(arr[2])
//modify an el
arr[2] = 222
console.log(arr)
//add el à la fin du tableau
arr[arr.length] = 5
arr.push(77)
// delete an el at the final arr
arr.pop()
//add el in the front of arr
arr.unshift(0)
// eliminer un el du l'amont du arr
arr.shift()
console.log(arr)

// Incrementation
let x = 3;
x = x + 1;
x += 1
++x

// Incrementation

x = x - 1;
x -= 1
--x
console.log(x)

let greeting = 'hello'
let greeting2 = 'Aero Blue Cavaliers'
console.log(greeting + ' ' + greeting2)
console.log(greeting.concat(' ', greeting2 ))
// + with string works like concat

let a =false;
let b = 'hi'
console.log(a + b) //concat

//declaration de fonction
//1)
/*var a = 3;
var b = 5; */
function Sum (){ //paramètre
    /*let a =3;
    let b =5; */
    return a+b
}

// call the function
console.log(Sum()) //arguments
//2)
const Sum = function (a,b){
    return a + b;
}

console.log(Sum(2,8))

//if statement
let color='red';
if(color=='red') {
    console.log('please wait')
}
else if (color== 'green'){
    console.log('you can move on')
}
else {
    console.log('stand by')
}

//Switch
switch(color){
    case 'red' : console.log('please wait') ;break
    case 'green' : console.log('you can move on'); break
    default :  console.log('stand by')
}
//we add break after each statement ==> to stop and execute onnly the instruction that verify the condition

// boucle finie ==> for ==> nbr d'itération est bien définie
let Sum = 0;
const tab = [5,89,2,126]
for(let i =0;i< tab.length;i++){
    Sum += tab[i]
}

//2)
for(const i in tab){
    Sum += tab[i]
}

//3)
const tab = [5,89,2,126]
for(const el of tab){
    Sum += el
}

console.log(Sum)
//Sum des elements dont leur index est pair
let Sum = 0;
const tab = [5,89,2,126]
for(const i in tab){
    if(i%2==0){
    Sum += tab[i]
    }
}

console.log(Sum)

// boucle infini/ nbr d'itération est inconnue
let i =0;
const tab = [5,89,2,126]

while(i< tab.length){
    
Sum += tab[i]
i++
}

let found = false;
while(found==true){
    console.log('l el existe')
}
// while verify the condition then execute the instruction // execute 0 if the condition is false
let found = false;
do{console.log('l el existe')} while(found == true)
// output : 'l el existe'
// do while execute the instruction then verify the condition  // execute at least one if the condition is false

