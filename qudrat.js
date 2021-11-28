// const myfunc =(a,b,c)=>{

//     var k = 0;
//     while (a >= c || b >=c) {
//         a -=c;
//         b -=c;
//         k++;
//     }

//     console.log(k*2);

// }

// myfunc(10,2,1)

// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const areEqual =() => {
//     (data.a === data2.a && data.b === data2.b) ? console.log('true') : console.log('false');
// }

// areEqual();

// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish
// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };

// var myData = Object.values(data);

// myData.map((val)=>{

//     if(Object.values() == 'null'){
//         console.log('ddd');
//     }
// })

// nestedValueExists =(data) =>{
//    var asd = data.a;

// }

// nestedValueExists();

// nestedValueExists(data2)  => true
// nestedValueExists(data3)  => false

// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// const data3 = { c: 3, b: 5 };

// checkSame( data, data2 )  => true
// checkSame( data2, data3 )  => false

// const carry =(a,b)=>{
//     for (let i = a; i <= b; i++) {

//         for (let j = a; j <= b; j++) {

//             console.log(`${i} * ${j} = ${i*j}`);

//         }
//         console.log('=================');

//     }
// }

// carry(1,9);

// const curry =(a)=>{
//     return (b)=>{
//         console.log(`${a} x ${b} = ${a * b}`);
//     }
// }

// for (let i = 1; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {

//         curry(i)(j);
//     }
//     console.log('------------');

// }

// let students = [
//     {
//         id : 1,
//         Name : 'Eldor',
//         MiddleName : 'WebDeveloper',
//         Status : 'Talaba',
//         Year : 1999,
//     },
//     {
//         id : 2,
//         Name : 'Ali',
//         MiddleName : 'Coder',
//         Status : 'Talaba',
//         Year : 2001,
//     },
//     {
//         id : 3,
//         Name : 'Vali',
//         MiddleName : 'AndroidDeveloper',
//         Status : 'Talaba',
//         Year : 2021,
//     },
//     {
//         id : 4,
//         Name : 'Messi',
//         MiddleName : 'IosDeveloper',
//         Status : 'Talaba',
//         Year : 1992,
//     },
// ]

// const onSort_onDelete =(value,key)=>{

//     students.filter((v)=>{
//         (v[`${key}`] == value) && console.log(v);
//     })
// }
// onSort_onDelete('Ali','Name');

//   vazifa

// const array = [4, 5, 9, 11, 15, 3, 7, 1, 5, 8, 9, 10];

// const mySort =()=>{
//     array.sort((a, b) => b - a);
// }
// mySort();

// console.log(array);

// while (array.length > 1) {
//     if(array[0] - array[1] != 0){

//         array[1] = array[0] - array[1];
//         (array.shift());
//         mySort();
//         console.log(array);

//     }else{

//         array.splice(0,2);
//         console.log(array);
//     }
// }

// user = {
//     id : 1,
//     name: 'Eldor',
//     status : 'WebDeveloper',
//     fullName : function() {
//         console.log(this.name + ' ' + this.status);
//     }
// }

// user.fullName();
// -------------------------------------------------------------------
// user = {
//     id : 1,
//     name: 'Eldor',
//     status : 'WebDeveloper',
//     fullName : {
//         name : 'Asaka',
//        getName : function() {
//             console.log(this);
//         }
//     }
// }
// user.fullName.getName();

// --------------------------------------------CLASS && EXTENDS

// class Student{

//     constructor(value){
//         this.Locat = value;
//     }

//     id = 123;
//     name = 'Eldor';
//     surname ='Eshmanov';
//     status = 'Talabasi';

//     fullName = function (a) {
//         this.a = a;
//         console.log(this);
//         console.log(a);
//         console.log(this.name + ' ' + this.surname + ' ' + this.Locat + ' ' + this.status);
//     }
// }

// // new Student('WebBrain').fullName('salom !!!');

// class Deportment extends Student{
//     constructor(title){
//         super(title);
//     }
// }

// new Deportment('Univer').fullName('salom !!!');

// ------------------------------------------------------------------
// let a = 'W3bBra1n academy1';
// sum = 0;
// let b = a.split('').map((value)=>{
//     if(Number(value)){
//         sum +=value;
//     }
// });
// -------------------------------------------------------------------
// const myfunc = (arr, num) => {
//     let sum = 0;
//     let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] % num == 0){
//             sum += arr[i];
//             console.log(sum);
//             k++;
//         }else{
//             sum += arr[j] ;
//             (sum / (j+1)) == num && k++;
//             console.log(sum);
//         }
//     }
//   }
//   console.log(k);
// };

// myfunc([1,3,2,2],2);

// ------------------------------------------------------------

// const myData = (res) => {

//     var data = [
//         {
//             id: 1,
//             name : "Asad",
//             status : "Students",
//             fruit : 'apple'
//         },
//         {
//             id: 1,
//             name : "Anvar",
//             status : "Students",
//             fruit : 'apple'
//         },

//     ]
//     k=0;
//     data.map((value)=>{
//         let arr = Object.values(value);
//         arr.map((item)=>{
//             for (let i = 0; i < item.length; i++) {

//                if(item[i].toLowerCase()==res){
//                    k++;
//                }

//             }
//         })
//     })

// console.log(k);
// };
// myData('a');

// -----------------------------------------------------------

// const test = () => {
//   let str = "AAABBAD";
//   let sp = str.split("");
//   console.log(sp);

//   for (let i = 0; i < sp.length; i++) {
//     let k = 0;
//     for (let j = i; j <= sp.length; j++) {
//         if(sp[i] == sp[j]){
//             k++;
//         }

//     }
//     console.log(`${k} ta ${sp[i]}`);
//   }
// };

// test();

// --------------------------------------------------------------

// ---------------------------------------------------------------

// let students = [
//     {
//         id : 1,
//         Name : 'Eldor',
//         MiddleName : 'WebDeveloper',
//         Status : 'Talaba',
//         Year : 1999,
//     },
//     {
//         id : 2,
//         Name : 'Ali',
//         MiddleName : 'Coder',
//         Status : 'Talaba',
//         Year : 2001,
//     },
//     {
//         id : 3,
//         Name : 'Vali',
//         MiddleName : 'AndroidDeveloper',
//         Status : 'Talaba',
//         Year : 2021,
//     },
//     {
//         id : 4,
//         Name : 'Messi',
//         MiddleName : 'IosDeveloper',
//         Status : 'Talaba',
//         Year : 1992,
//     },
// ]

// const onSort_onDelete =(key,value)=>{

//     students.map((res)=>{
//         if(res[key].includes(value) ){
//             console.log(res);
//         }
//     })

// }

// onSort_onDelete('Name','Ali');

// -----------------------------------------------------------------------------
// let str = "ABCDACB".split("");

// function myFilter(res) {
//   let arr = [];
//   for (let i = 0; i < res.length; i++) {
//     arr.push(res[i]);
//     console.log(arr);
//     if (arr.includes(res[i + 1])) {
//       console.log(res[i + 1]);
//       break;
//     }
//   }
// }

// myFilter(str);
// ------------------------------------------------------------------------------
// var maximum69Number = function (num) {
//   num = num.toString().split("");
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === '6') {
//       num[i] = '9';
//       break;
//     }
//   }
//   sum = '';
//   for (let i = 0; i < num.length; i++) {
//       sum +=num[i];
//       sum = Number(sum)
//   }

//   return sum;
// };

// console.log(maximum69Number(9666669));

// ---------------------------------------------------------------------------------

// const getData = (arr, num) => {
//   newArrParent = [];
//   arr.map((value, Index) => {
//       let newArrChild = [];
//     arr.map((res, resIndex) => {
//       if (value + res == num) {
//         newArrChild.push([Index,resIndex])
//         newArrParent.push(newArrChild);
//         // console.log(newArrChild);
//         console.log(newArrParent);
//       }
//     });
//   });
// };

// getData([1, 3, 9, 8, 6], 9);

// -----------------------------------------------------------

// const myAnswer =(arr)=>{
//     let arr2 = [];
//     let p = 1;
//     for (let i = 0; i < arr.length; i++)
//     {
//         for (let j = 0; j < arr.length; j++)
//         {
//             if (i != j)
//             {
//                 p *= arr[j];
//             }
//         }
//         arr2[i] = p;
//         p = 1;
//     }
//     for (let i = 0; i < arr.length; i++) {

//         console.log(arr2[i]);

//     }
// }

// myAnswer([-1, 1, 0, -3, 3]);
// myAnswer([1,2,3,4]);

// ----------------------------------------------------------------

// const strPalindrom = (str) => {
//   str = str.split("");
//   arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//     // console.log(arr);
//     if (arr.includes(str[i + 1])) {
//       arr.push(str[i + 1]);
//       // console.log(arr);
//       let index = arr.indexOf(str[i + 1]);
//       // console.log(index);
//       let k = "";
//       for (let j = index; j < arr.length; j++) {
//         for (let n = arr.length - 1; n >= 0; n--) {
//           if (arr[j] == arr[n]) {
//             k += arr[j];
//             j++;
//           }
//         }
//         console.log(k);
//       }
//       arr.pop(str[i + 1]);
//     }
//   }
// };

// strPalindrom("babad");

// ------------------------------------------------------------


// const zig_zag_func =(str,num)=>{

//   const array = str.split('');
//   let line1 = '';
//   let line2 = '';
//   let line3 = '';
//   for (let i = 0; i < array.length; i += num+1) {
//     line1 += array[i] + '   ';     
//   }
//   for (let i = 1; i < array.length; i += num-1) {
//     line2 += array[i] + ' ';  
//   }
//   for (let i = 2; i < array.length; i +=num +1) {
//     line3 += array[i] + '   ';       
//   }
  
// console.log(line1);
// console.log(line2);
// console.log(line3);

// }

// zig_zag_func("ELDORBEKJON",3)
