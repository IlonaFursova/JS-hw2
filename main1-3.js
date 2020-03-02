//Task 1
// let length = prompt('Введите длину');
// let width = prompt('Введите ширину');
// let height = prompt('Введите высоту');
// let capacity = 0;
// capacity = Math.ceil((length * width * height) / 16);
// alert (`${capacity} банок необходимо для покраски стен`);

//Task 2
let a1 = +prompt('Введите цену за 1 песок');
let a2 = +prompt('Введите цену за 2 песок');
let a3 = +prompt('Введите цену за 3 песок');

let b1 = +prompt('Введите объем 1 емкости');
let b2 = +prompt('Введите объем 2 емкости');
let b3 = +prompt('Введите объем 3 емкости');
let sum = 0;
if ((a1 || a2 || a3 || b1 || b2 || b3) > 100) {
    alert ('Числа не должны превышать 100');
}
else {
    sum1 = a1 * b1;
    sum2 = a1 * b2;
    sum3 = a1 * b3;
    sum4 = a2 * b1;
    sum5 = a2 * b2;
    sum6 = a2 * b3;
    sum7 = a3 * b1;
    sum8 = a3 * b2;
    sum9 = a3 * b3;

}
sum = sum + Math.max(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9,)

alert(sum);

//Task 3
// let goldticket = prompt('введите номер вашего билета, чтобы проверить является ли он счастливым!');
// let n1 = (goldticket % 10);
//   let n2 = ((goldticket - n1) / 10);
//   let op2 = (n2 % 10);
//   let n3 = ((n2 - op2) / 10);
//   let op3 = (n3 % 10);
//   let n4 = ((n3 - op3) / 10);
//   let op4 = (n4 % 10);
//   let n5 = ((n4 - op4) / 10);
//   let op5 = (n5 % 10);
//   let n6 = ((n5 - op5) / 10);
//   let op6 = (n6 % 10);

// if ((n1 + op2 + op3) == (op4 + op5 + op6)) {
// alert('Yes!');
// }
// else alert('No'); 