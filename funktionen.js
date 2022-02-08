/* DATENSTRUKTUREN */

/* Primitives */

// let a // (var) Definition oder Deklaration

// // Wertzuweisung / Assignment
// a = true; // boolean (true, false)
// a = "Hallo"; // string
// a = 2; // number

// console.log(typeof a);
// console.log(a);

/* Arrays */
// Navigation über INDEX

// let arr;
// arr = new Array();
// arr = [true,false,false,true];

// Index beginnt mit 0
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[5]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */
// Navigation über Bezeichner (keys)

// let obj = {};

// obj = {x:10, y:"Hi"};

// console.log(obj);
// console.log(obj.x); // Dot-Sysntax
// console.log(obj.y);

// obj = {
//         val0: 10,
//         sub1:{
//             val1: "hi",
//             val2: 2
//             }
//     }


// console.log(obj);
// console.log(obj.val0);
// console.log(obj.sub1.val1);
// console.log(obj.sub1.val2);
// {{{{{....}}}}} ... nested object

 /*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite  

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

/* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

// let cond; // ??

// cond = true;
// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == 4); // Test auf Wert
// cond = (4 === "4"); // Test auf Wert UND Typ

// if (cond) {
//     console.log("Aussag wahr"); 
// } else {
//     console.log("Aussag falsch"); 
// }

   // switch (key) {
    //     case value:
    //         break;
    //     default:
    //         break;
    // }

 //   https://github.com/01-PP/03_Entscheidungsstrukturen






