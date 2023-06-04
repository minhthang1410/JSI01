// const url = 'https://currency-converter219.p.rapidapi.com/converter?source=USD&target=VND&amount=100';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f51016ddc3msha9c2bab85d069f1p1bb6c0jsn063cf77191e2',
// 		'X-RapidAPI-Host': 'currency-converter219.p.rapidapi.com'
// 	}
// };

// fetch(url, options).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
// })

//ES6++:
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);

// const a = { name: 'thang' }; // 1E2F
// const b = a; // 1E2F
// a.name = 'thang 1';
// console.log(b.name);

// let i = 10;

// function tangI(i) {
//     return i += 1;
// }

// i = tangI(i);
// console.log(i);

//assign

// let o1 = {
//     a: 10,
//     b: 14
// }

// let o2 = Object.assign({ c: 20 }, o1);
// console.log(o1);
// console.log(o2);

//---------Spread Syntax--------
// function sum(x, y, z) {
//     return x + y + z;
// }
//copy mảng, nối mảng
// let arr = [1, 4, 6, 8];
// let arr1 = [9, 4, 2, 7]
// // console.log(sum(...arr));

// let arrNew = [...arr, ...arr1];
// arrNew.push(999999)
// console.log(arr);
// console.log(arrNew);

// let className = "TL-JSI01";
// // console.log(className[3]);
// let arrChar = [...className];
// console.log(arrChar);

//Copy obj
// let o1 = {
//     a: 10,
//     b: 14
// }

// let o2 = {
//     c: 20,
//     ...o1
// }

// console.log(o1);
// console.log(o2);

//----------map() & filter()-------
// let arr = [1 , 2, 3 , 4, 5];
// let doubled = arr.map(function (item) {
//     return item * 2;
// });

// let soChan = arr.filter(function (item) {
//     return item % 2 == 0;
// })

// console.log(arr);
// console.log(soChan);


// let phones = [
//     {
//         name: "Iphone 11",
//         price: 10
//     },
//     {
//         name: "Iphone 11 Pro",
//         price: 15
//     },
//     {
//         name: "Iphone 12",
//         price: 18
//     },
//     {
//         name: "Iphone 13",
//         price: 20
//     },
//     {
//         name: "Iphone 13 likenew",
//         price: 15
//     }
// ]

// console.log(phones);

// let phonesUnder15 = phones.filter(function (item) {
//     return item.price <= 15;
// });

// let iphone13s = phones.filter((item) => {
//     return item.name.includes("13");
// })

// console.log(phonesUnder15);
// console.log(iphone13s);

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 6, 8, 9, 0, 3];
arr1.splice(3, 1);
console.log(arr1)

// let newArray = arr1.filter((item) => {
//     if (arr2.includes(item)) {
//         return item;
//     }
// });

// console.log(newArray);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => { accumulator + currentValue },
    initialValue
);

console.log(sumWithInitial);