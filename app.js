// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

// answer:

// let number = Number(prompt("Type..."))
// if (number > 0 ){
//     console.log("დადებითია")
// }else if (number < 0 ){
//     console.log("უარყოფითია")
// }


// 2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

// asnwer: 


// let num1 = Number(prompt("enter first number"));

// switch (num1) {
//       case num1:
//         console.log(num1 + 1);
//         break;
//       default:
//         console.log("Error");
//     }







// let num2 = Number(prompt());

// switch (num1) {
//       case num1:
//         console.log(num1 - 1);
//         break;
//       default:
//         console.log("Error");
//     }




// let num3 = Number(prompt());

// switch (num1) {
//       case num1:
//         console.log(num1 * 1);
//         break;
//       default:
//         console.log("Error");
//     }



//     let num4 = Number(prompt());

// switch (num1) {
//       case num1:
//         console.log(num1 / 1);
//         break;
//       default:
//         console.log("Error");
//     }



//new version
// let operation = prompt('enter operation')
// let num2 = Number(prompt('enter second number'))

// switch (operation) {
//     case "+":
//         console.log(num1 + num2)
//         break;
//     case "-":
// ესე შეგიძლია დაწერო * და / აც
//         console.log(num1 - num2)
//     default:
//         break;
// }


//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 



// let num1 = Number(prompt());

// if (num1) {
//     console.log(num1 + 1);
// }else {
//     console.log("error")
// }


// let num2 = Number(prompt());

// if (num2) {
//     console.log(num2 - 1);
// }else { 
//     console.log("error")
// }


// let num3 = Number(prompt());

// if (num3){
//     console.log(num3 * 1);
// }else {
//     console.log("error")
// }


// let num4 = Number(prompt());

// if (num4) {
//     console.log(num4 / 1);
// }else {
//     console.log("error")
// }

//new version
//ერთი if else გვჭირდება

// let num1 = prompt("enter number")
// let num2 = prompt("enter number")
// let operation = prompt("operation")

// if(operation === "*"){
//     console.log(num1 * num2)
// }else if (operation === '+' && num1 !== '' && num2 !== ''){
//     console.log(num1 + num2)
// }else if(operation === '-'){
//     console.log(num1 - num2)
// }else if(operation === '/' && num2 !== '0'){
//     console.log(num1 / num2)
// }else if(num1 === '' || num2 === ''){
//     console.log('type input')
// }
// else{
//     console.log("some error")
// }

//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else 

//answer:

// let firstName = prompt('enter first name')
// let lastName = prompt('enter last name')
// let email = prompt('enter email')
// let phoneNumber = parseInt(prompt('enter phone number'))
// let password = prompt('enter password')


// if (firstName === '' || lastName === '' || email === '' ||
// phoneNumber === '' || password === '') {
//     console.log('input is requiered')
    
// }else{
//     console.log('welcome')
// }
