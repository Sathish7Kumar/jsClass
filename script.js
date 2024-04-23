// javscripts - dataTypes

// 2 dt - primitive , non primitive

// primitive Dt ->
// string (characters -> A a 13 &%&^) "str" 'str'
// ,number (only numbers) , boolean (T,F), undefined , null , bigINt

// non primitive - objects function array

// variable in JS - 3 => var , vs (let , const - constant)

// let myname = "Dhoni"
// let myage = 41
// let isPlayer = true
// let city 
// let play = null

// // console.log(typeof(myname));
// // console.log(typeof(myage));
// // console.log(typeof(isPlayer));
// // console.log(typeof(city));
// console.log(typeof(play));

// // // concat +

// // let x = "MS"
// // let y = "Dhoni"
// // let z = "CSK"

// // // my name is MS Dhoni , I am playing for CSK
// // console.log("my name is "+ x + " "+ y + ", " + "I am playing for " + z); 

// // // template literals or string literals

// // console.log(`my name is ${x} ${y}, i am playing for ${z}`);

// // // operator 

// // // arithmetic ( + - * / )

// // let c = 10
// // let d = 20
// // console.log(c+d);

// // let a = "10"
// // let b = "20"
// // console.log(parseInt(a) + parseInt(b)); // 30

// // eqaulity = (assigning) , == (equalTo) ,=== (comaparing)!== (not equalto)

// // assignment 

// let i = 5
// i +=8 // i = i+8
// // console.log(i);

// // increment (pre,post) / decrement (pre,post)

// // let j = 5
// // j--
// // j++
// // ++j
// // ++j
// // console.log(j);

// // comparsion operator (t or F)

// let k = 10
// // console.log(k!==10);

// // logical

// let m = 20
// // console.log(k>10 || m!==20);
  
// // conditional statement  - if else

// let num = 16

// // if(num % 2 == 0 ){
// //     console.log("evenNumber");
// // }else{
// //     console.log("oddNumber");
// // }

// // ternary operator :
// // ((cond) ? "true" : "false"    )

// console.log((num % 2 == 0 ) ? "evenNumber" : "oddNumber");

// // if(condition){
// //  // true - code
// // }else{
// //     // false - code
// // }

// let myage = 18

// if(myage>=18){
//     console.log('i can eligible to vote');
// }else{
//     console.log("i can't eligible to vote");
// }

// let day = "Monday"

// switch(day){
//     case "Monday" : console.log("in Office");
//     break
//     case "Sunday" : console.log("Holiday");
//     break
//     case "Saturday" : console.log("weekend");
//     break
//     default : console.log("offc days");
// }

// let mark = 95

// switch(true){
//   case (mark>100) : console.log("invalid mark");
//     break
//     case (mark<0) : console.log("-ve mark not acpted");
//     break
//     case (mark>=90) : console.log("s-grade");
//     break
//     case (mark>=80) : console.log("a-grade");
//     break
//     case (mark>=70) : console.log("b-grade");
//     break
//     case (mark>=60) : console.log("c-grade");
//     break
//     case (mark>=55) : console.log("d-grade");
//     break
//     case (mark>=50) : console.log("e-grade");
//     break
//     case (mark<50) : console.log("fail");
//     break
// }

// // 1

// // looping - for while dowhile , (for in) , (for of)


// for (let i = 0 ; i<=10 ; i++){
//     console.log(i);
// }

// let x = 0
// while ( x<=5 ){
//     console.log(x);
//     x++
// }

// let y = 1
// do{
//    console.log(y); 
//    y++
// }while(y<=6)

// // 10-1

// let z = 10
// while(z>0){
//         console.log(z);
//         z--
// } 

// // date :

// const myDate = new Date()

// let todayDate = myDate.getDate();
// console.log(todayDate);

// // day starts from 0 to 6
// // let today = myDate.getDay();
// // console.log(today);

// let year = myDate.getFullYear();
// console.log(year);

// let month = myDate.getMonth() + 1;
// console.log(month);

// console.log(myDate.toLocaleTimeString());

// // today date is 21-3-2024

// // concat 

// console.log("Today date is " + todayDate + "-"+ month + "-"+year);

// console.log(`Today date is ${todayDate}-${month}-${year}`);

// // even Numbers - 1 to 100

// for (let num = 1 ; num<=10 ; num++){
//     if(num %2 !== 0){
//         console.log(num);
//     }
// }

// math 

// let sq = 25
// console.log(Math.sqrt(sq));

// console.log(Math.pow(3,9));

// let randNum = 36.446971773557624
// console.log(randNum);

// console.log(Math.floor(randNum));
// console.log(Math.round(randNum));

// console.log(Math.round(Math.random()*100));

// console.log(Math.max(25,10,41,9,7));

// // ceil

// let abc2 = new String("abc")
// console.log(abc2);
// console.log(typeof(abc2));

// let abc = Number(25)
// console.log(typeof(abc));

// let myName = "           MS Dhoni         "
// let myName2 = "Raina"
// console.log(myName.length);
// console.log(myName.includes("O"));
// console.log(myName.startsWith("M"));
// console.log(myName.endsWith("I"));
// console.log(myName.toLowerCase());
// console.log(myName.concat(",").concat(myName2));
// console.log(myName);
// console.log(myName.trim());

// // objects:
// //  { key () : value() , K:V  , K:V }

// let stuDetails =  {
//     MYname : "Dhoni",
//     MYage : 25,
//     MYCity : "CSK",
//     ISPlayer : true,
//     MYplace : "India"     
// }

// console.log(stuDetails.MYplace.address.MYPlace.myState);

// for(let key in stuDetails){
//     console.log(key + ":" + stuDetails[key]);
// }

// non PDT : function 


// function myname(){

//  let empName = "Dhoni"
//  let empAge = 35
//  console.log(`My name is ${empName}, my age is ${empAge}`);

// //  my name is VK , my age is 30
//  let empName2 = "VK"
//  let empAge2 = 30
//  console.log(`My name is ${empName2}, my age is ${empAge2}`);

// }
// myname()


// let myname2 = function(){
//     console.log("Hello Function");
// }
// myname2()

// function with arguments and parameter passing

// function stuDetails(x,y,z){ // parameter
//     let myname  = x
//     let myage  = y
//     let playing = z
//     console.log(`My name is ${myname}, my age is ${myage} , playing for ${playing}`);
// }
// stuDetails("Dhoni",25,"CSK") // argument
// stuDetails("VK",20,"RCB") 

// arrow Function :

// let myname3 = (x) => {
//     let myname = x
//     console.log(myname);
// }
// myname3("MY NAME IS DHONI")

// ( () =>  {
//     console.log("self - IIFE");
// })()

// array : ["str",num,boo]

// // let myArr = new Array(1,2,3)
// let myArr = [1,2,3,45,25,,{myname:"dhoni",myAge : 25},{}]
// // array having index => starts from 0
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[5]);

// // 
//  let colors = ["red","blue","yellow","green"] // z-a
//  // b,g,r,y,o
//     colors.sort()
//     colors.push("orange")
//  console.log(colors.reverse()); // z-a
 

// //  const sortMeth1 = colors.sort((a,b)=>{
// //     return b.localeCompare(a) 
// //  })
// //  console.log(sortMeth1);

// //  console.log(colors.sort());


//  const numArr = [10,2,13,45,5,25,255,155]

//  // reduce / sort 

//  console.log(numArr.sort());

//  const sortMeth = numArr.sort((a,b)=>{
//     return b-a 
//  })

//  console.log(sortMeth);
//  const reduMeth = numArr.reduce((a,b)=>{
//     return a+b  
//  })
//  console.log(reduMeth);


// //  forEach 
// numArr.forEach((x)=>{
//     const fEach = x * 2
//     console.log(fEach);
// })

// // find
//  const findmethod = numArr.find((x)=>{
//     return x > 100
//  })
//  console.log(findmethod);
// /// filter
//  const filtermethod = numArr.filter((x)=>{
//     return x > 100
//  })
//  console.log(filtermethod);
//  // map
//  const mapmethod = numArr.map((x)=>{
//     return x * 2
//  })
//  console.log(mapmethod);


//  for (let index in colors){
//     console.log(index + ":" + colors[index]);
//  }
//  console.log(colors);

//  //push - add new element at the end of an array
//  colors.push("black")
//  colors.push("white")
//  console.log(colors);

//  // pop - remove  element at the end of an array
//  colors.pop()
//  console.log(colors);

//  // unshift 
// //  unshift - add new element at the start of an array
//  colors.unshift("Magenta")
//  console.log(colors);

//  // shift - remove  element at the start of an array
//  colors.shift()
//  console.log(colors);

//  // sort :
//  colors.sort() // a-z 
//  // z-a
//  console.log(colors);

//  console.log(colors.toString());
//  console.log(colors.join("--"));

//  // delete : 
// //  delete colors[2]
// //  console.log(colors);

//  // concat
//  let color2 = ["rose","gold","silver"]
//  console.log(color2.concat(colors));

//  // spreadOperator or rest op
//  console.log([...color2,...colors]);
//  console.log({...color2},{...colors});

//  console.log(colors.fill("red",1,3));


//  console.log(numArr);
//  numArr.sort()
//  // 10 25 45 67 88 101 185 277
//  console.log(numArr);
// 

// findIndex,map,foreach,filter,find,reduce,sort,slice,splice



// push , pop , unshift , shift, tostring  , join , sort
//  [] notation - for of 

// array of objects

// let student = [
//    {myname:"vishnu" ,mark:100},
//    {myname:"kesavan" ,mark:40},
//    {myname:"msd" ,mark:10},
//    {myname:"virat" ,mark:90}
// ]
// console.log(student);

// const avg = student.reduce((a,b)=>{
//    return (a+  b.mark) 
// },0)
// console.log(avg/4);


// const abv50 = student.filter((x)=>{
//    return x.mark > 50
// })
// console.log(abv50);


// const nameOnly = student.map((data)=>{
//    return data.myname
// })
// console.log(nameOnly);

//  student.forEach((data)=>{
//    const stuname = data.myname
//    console.log(stuname);
// })

// const stuDetails = [
//     {studentName:'ajay',class:'6A',totalScore:350},
//     {studentName:'brahma',class:'6A',totalScore:420},
//     {studentName:'kesavan',class:'6A',totalScore:350},
//     {studentName:'Guru',class:'7A',totalScore:390},
//     {studentName:'vishnu',class:'6A',totalScore:250},
//     {studentName:'John',class:'8A',totalScore:316},
//     {studentName:'Ramesh',class:'8A',totalScore:388},
//     {studentName:'Suresh',class:'9A',totalScore:450},
//     {studentName:'Govind',class:'9A',totalScore:155},
//     {studentName:'Babu',class:'9A',totalScore:488},
//     {studentName:'Krishna',class:'9A',totalScore:299},
//   ]

//   const class6A = stuDetails.filter((x)=>{
//    return x.class == "6A"
//   })
//   .filter((e)=> e.totalScore > 300)
//   .map(e=> e.studentName)
//   .sort((a,b)=> b.localeCompare(a))
//   console.log(class6A);
  

  // const abv400_6A = classs6A.filter((e)=>{
//    return e.totalScore > 400
// })
// console.log(abv400_6A);


//   let myname = "vishnu" 
//   console.log(myname.split('').reverse().join(''));

//   	let myname2 = "vishnu" 
// 	let split = myname.split('')
//    let rev = split.reverse()
// 	let join = rev.join("")
// 	console.log(join);

//   for (const i of stuDetails) {
//       console.log(i);
//   }

//   calculate percentage for each student (total mark is 500)    and transform array like the following

//   [
//     {studentName:'ajay', percentage:'65.00'}
//     {studentName:'brahma', percentage:'85.00'}
//     like this ...
//   ]

//   const pc = stuDetails.map((x)=>{
//    return (x.totalScore / 5).toFixed(2)
//   })
//   console.log(pc)

  // calculate percentage

  // filter students  on class : 
   // 1 '6A', 
   // 2. '7A',
   // 3. '8A'.
   // 4. '9A'

//    // callback function : 

//    // function add1(){
//    //    console.log("hello world");
//    // }
//    // function add2(){
//    //    add1()
//    // }
//    // add2()

//    const add = (x) => {
//       return add2(x + 10) // add2(15)
//    }
//    const add2 = (m) => {
//       return add3(m + 10) // add2(25)
//    }
//    const add3 = (m) => {
//       return m + 25
//    }
//    console.log(add(5)); // 50

//    setTimeout( () => {
//       console.log("hello-1");
//       setTimeout(() => {
//          console.log("hello-2");
//          setTimeout(() => {
//             console.log("hello-3");
//          }, 3000);
//       }, 2000);
//    }, 1000 );

//    // cb hell , chaining , nesting

//    // promise : es-6
//    // promise - pending , success , failure , 
//    // .then() - success , .catch()- failure

  //  const p1 = new Promise((res,rej)=>{
  //        setTimeout(()=>{
  //           res("success-1")
  //           rej("failure-1")
  //        },2000)  
  //  })
//    // p1
//    // .then(console.log)
//    // .catch(console.log)

//    const p2 = new Promise((res,rej)=>{
//       setTimeout(()=>{
//          res("success-2")
//          rej("failure-2")
         
//       },1000) 
// })
// // promise methods : 

// // Promise.all([p1,p2])
// // .then(console.log)
// // .catch(console.log)

// Promise.allSettled([p1,p2])
// .then(console.log)
// .catch(console.log)

// Promise.race([p1,p2])
// .then(console.log)
// .catch(console.log)

//    function p3(){
//       return new Promise((res,rej)=>{
//          res("success-2")
//          rej("failure-2")  
//    })
//    }
//    p3()
//    .then(console.log)
//    .catch(console.log)


//    // 1 sec = 1000 ms

//    setTimeout(()=>{
//       console.log("hello");
//    },5000)

//    setInterval(()=>{
//       console.log("hello ");
//    },1000)

//    setInterval(()=>{
//       const x = new Date()
//       console.log(x.getSeconds());
//    },1000)

// // es-5 xml http request  // response 

// // const data = new XMLHttpRequest()

// // data.open("GET", "https://fakestoreapi.com/products")

// // data.send()

// // data.onload = function(){
// //   let products = this.response 
// //   // let products = JSON.parse(this.response) 
// //   console.log(products);
// // }

// // fetch 

// // fetch('https://fakestoreapi.com/products')
// // .then(res => res.json() )
// // .then(data => console.log(data))
      
// // const add =  (x) =>{
// //    return new Promise((res,rej)=>{
// //      res(x+10)
// //   })
// // } 
// // add(2).then(x => x+8).then((x) => x+30).then(console.log)

// function getProducts(){
//   return new Promise((res,rej)=>{
//     fetch("https://fakestoreapi.com/products")
//     .then(resp => resp.json())
//     .then(products => res(products) )
//     .catch(err => rej(err))
//   })
// }
// getProducts()
// .then(data => getData(data))
// .catch(err => console.log(err))

// function getData (prod){
//   //  prod.forEach((x)=>{
//   //   const titleOnly =  x.price
//   //   console.log("Price : " + titleOnly);
//   // })
//   console.log(prod);
//   const titleOnly = prod.map((x)=>{
//      return  {productName : x.title ,Price : x.price}
//   })
//   console.log(titleOnly);
// }

// async function : await // .then .catch

// async function name(){
//    return   "hello";
// }
// console.log(name());

// async function name(x){
//  try {
//    return x
//  } 
//  catch (error) {
//   console.log(error);
//  }
// }
// console.log(name("hello"))

// async function getResponse(){
//   try {
//    const resp =  await fetch("https://fakestoreapi.com/products")
//    const data = resp.json()
//    return data
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function getData(){
//   try {
//     const data  = await getResponse()
//     getProducts(data)
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData()

// function getProducts(products){
//   const price = products.map(x=>x.price)
//   console.log(price);
// }


// let mesg = new Promise((res,rej)=>{
//   rej("failure")
//   res("success")
  
// })

// let DB = async ()=>{
//   try {
//     const data = await mesg
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// DB()

// oops

// let myname = "kesavan"
// let myage = 22
// let favColor = ["red","blue"]
// let place = {
//   city : "chennai"
// }

// let student = {   
//   studname  : "kesavan", // string
//   age : 22, // number
//   favColor : ["red","blue"], // array
//   isStudent : true, // boolean
//   place : { // object
//       city : "chennai",
//     state : "tamilnadu"
//     },
//     details : function(){ // function
//       console.log(this.studname);
//     }
// }
// student.details()

// // factory functions 

// function createEmp(name){
//   return{
//     myname  : name,
//     welcome : function(){
//       let empdetail = `Hi , my name is ${this.myname} i am new Employee`
//       console.log(empdetail);
//     }
//   }
// }

// let emp1 = createEmp("vishnu") // 1st call
// emp1.welcome()

// let emp2 = createEmp("kesavan")  // 2nd call
// emp2.welcome()

// let emp3 = createEmp("dhoni")
// emp3.welcome()

// // createEmp("abcd").welcome()
// // createEmp("efgh").welcome()


// // contructor function : 

// function CreateStudent(name){
//    this.studName = name,
//     this.welcomeMesg = function (){
//       console.log(`student name is ${this.studName}`);
//   }
// }
// // new CreateStudent("vishnu").welcomeMesg()
// // new CreateStudent("kesavan").welcomeMesg()

// let student1 = new CreateStudent("kesavan")
// student1.welcomeMesg()


// let student2 = new CreateStudent("vishnu reddy")
// student2.welcomeMesg()

// class 

// let user1= {
//   name : "vishnu",
//   age : 21,
//   login(){
//     console.log('HI ' + this.name);
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }
// let user2= {
//   name : "kesavan",
//   age : 20,
//   login(){
//     console.log('HI ' + this.name);
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }
// let user3= {
//   name : "msd",
//   age : 42,
//   login(){
//     console.log('HI ' + this.name);
//     console.log("you are logged in");
//   },
//   logout(){
//     console.log("you are logged out");
//   }
// }

// user3.login()
// base class / parent class : 
class User{ 
  static totalUsers = 0
  constructor(name,age){
    this.myname =name
    this.myage = age
    User.totalUsers++
  }
  login(){
    console.log('HI ' + this.myname);
    console.log("you are logged in");
  }
  logout(){
    console.log("hi "+this.myname+  " logged out");
  }
  static totalNofUser(){
    console.log(User.totalUsers);
  }
}

  
let user1 = new User("kesavan",21) // free
let user2 = new User("vishnu",20) // free
// let user3 = new User("dhoni",42)  // premium = access for to play all movies

// console.log(User.totalUsers);
User.totalNofUser()

// user1.logout()

// derived or child class
class PaidUsers extends User {
  constructor(name,age,paidamount){
    super(name,age,paidamount)
    this.amount = paidamount
  }
  premiumMembership(){
    console.log("you have access for to play all movies u paid "+this.amount + " per month");
  }
}

let paidUser1 = new PaidUsers("dhoni",42,"rs.200")
paidUser1.login()
paidUser1.premiumMembership()






// datatypes - primitive - Str,num, boole,undef,null
// non - primi => obj , fun ,arr
// variables - let var const 
// conditional - if else , switch
// operators - arithmetic , assign , comp , logi , ternaryOperator
// increment -(pre,post) , decrement - (pre,post)
// looping- for while doWhile for in for of
// date 
//th 
// ob maj = {K:v,K:v} // .dot notation
// func -> func , func(with P&A) , fun decl , fun exp , arrow fun
// iife (f & AF)
// array - push,pop,shift,unshift,tostring,join,concat,spreadoperator,
// delete,sort, fill, indexof,map , filter,find,reduce,foreach slice splice
// array of objects =>
// call back func , timeout intervel
// promise
// xml http request
// async / await
// oops 
































