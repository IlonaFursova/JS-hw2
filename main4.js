//Task 4

//1.1
let yearOld =  prompt('How old are you?', '');
if (yearOld == 0 || yearOld < 3) {
    alert('You are a child');
}
else if (yearOld > 11 && yearOld < 18) {
    alert('You are a teenager');
}
else if (yearOld > 17 && yearOld < 61) {
    alert('You are an adult');
}
else if (yearOld > 60 && yearOld < 131) {
    alert('You are an pensioner');
}

//1.2
let number = +prompt("Введите значение от 0 до 9!")
switch(number) {
    case 0:
        alert(')');
        break;
        case 1:
            alert('!');
            break;
            case 2: 
            alert('@');
            break;
            case 3:
            alert('#');
            break;
            case 4:
                alert('$');
                break;
                case 5:
                alert('%');
                break;
                case 6:
                alert('^');
                break;
                case 7:
                alert('&');
                break;
                case 8:
                alert('*');
                break;
                case 9:
                alert('(');
                break;
                default:
                    alert('Вы ввели не правильное число!');

}

//1.3
let a1 = prompt('Введите трехзначное число');
let b1 =  a1% 10;
  let c1 = (a1 - b1) / 10;
  let c2 = c1 % 10;
  let d1 = (c1 - c2) / 10;
  let d2 = d1 % 10;
if (b1 == c2 || b1 == d2 || c2 == d2) {
    alert('Совпадения есть!');
}
else {
    alert('Совпадений нет!');
}

//1.4
let currentYear = prompt('Введите год');
let thisyear = (currentYear % 4 == 0 || currentYear % 400 == 0 && !currentYear % 100 == 0) ? 
alert('Это высокосный год') : alert('Год не высокосный');

//1.5
let fiveNumber = prompt('Введите 5-значное число, чтобы проверить его на палиндром');
let n1 = String(fiveNumber % 10);
  let n2 = String((fiveNumber - n1) / 10);
  let op2 = String(n2 % 10);
  let n3 = String((n2 - op2) / 10);
  let op3 = String(n3 % 10);
  let n4 = String((n3 - op3) / 10);
  let op4 = String(n4 % 10);
  let n5 = String((n4 - op4) / 10);
  let op5 = String(n5 % 10);
  let fNumber = String(n1 + op2 + op3 + op4 + op5);
let proverka = (fNumber == fiveNumber ) ?
alert('Это палиндром') : alert('Это не палиндром');

//1.6
let money = prompt('В какую валюту вы хотите поменять USD?');
let dollars = prompt('Какую сумму хотите поменять?');

let valuta;
const euro = .9191;
const uan = 24.6;
const azn = 1.7;
switch(money) {
    case 'EUR': {
        let valuta = euro * dollars;
        alert(`${valuta} EUR`);
        break; }
        case 'UAN': {
            let valuta = uan * dollars;
            alert(`${valuta} UAN`);
        break;}
            case 'AZN': {
                let valuta = azn * dollars;
                alert(`${valuta} AZN`);
                break;
            }
}

//1.7
let purchaseAmount = +prompt('Введите сумму покупки и получите персональную скидку!');

switch(true) {
    case (purchaseAmount >= 200 && purchaseAmount < 300): {
    let a12 = (purchaseAmount / 100) * 3;
    let b12 = purchaseAmount - a12;
        alert(`Ваша скидка составляет 3 % и сумма к оплате ${b12}`);
    break;
    }
    case purchaseAmount >= 300 && purchaseAmount < 500: {
        let a12 = (purchaseAmount / 100) * 5;
        let b12 = purchaseAmount - a12;
        alert(`Ваша скидка составляет 5 % и сумма к оплате ${b12}`);
        break;
    }
    case ( purchaseAmount >= 500): {
        let a12 = (purchaseAmount / 100) * 7;
        let b12 = purchaseAmount - a12;
        alert(`Ваша скидка составляет 7 % и сумма к оплате ${b12}`);
        break;
    }
    default :
    alert('Вы не ввели сумму');
}


//1.8
let circum = prompt('Введите радиус окружности');
let square = prompt('Введите сторону квадрата');
const circumference = 2 * Math.PI * circum;
const squarePerimeter = 4 * square;
if (squarePerimeter > circumference) {
    alert ('Окружность поместится в квадрат');
}
else {
    alert ('Окружность не поместится в квадрат');
}


let money = prompt('В какую валюту вы хотите поменять USD?');
let dollars = prompt('Какую сумму хотите поменять?');

let valuta;
const euro = .9191;
const uan = 24.6;
const azn = 1.7;
switch(money) {
    case 'EUR': {
        let valuta = euro * dollars;
        alert(`${valuta} EUR`);
        break; }
        case 'UAN': {
            let valuta = uan * dollars;
            alert(`${valuta} UAN`);
        break;}
            case 'AZN': {
                let valuta = azn * dollars;
                alert(`${valuta} AZN`);
                break;
            }
} 

//1.9
let answ1 = +prompt('Сколько будет 2*2?');
let answ2 = +prompt('Сколько типов данных в JS?');
let answ3 = +prompt('Какой будет остаток от деления 8 % 3?');
let summ = 0;
switch (true) {
    case (answ1 == 4): {
    summ += 2
    break;
    }
    case (answ1 == 6): {
    summ += 0
    break;
    }
    case (answ1 == 5): {
    summ += 0
    break;
    }
    default: { break; }
}
    switch(true) {
    case (answ2 == 8): {
     //number, bigint, string
    //boolean, null, undefined, object, symbol
    summ += 2
    break;
    }
    case (answ2 == 7): {
    summ += 1
    break;
    }
    case (answ2 == 5): {
    summ += 0
    break;
    }
    default: { break; }
}
    switch(true) {
    case (answ3 == 2): {
    summ += 2
    break;
    }
    case (answ3 == 4): {
    summ += 0
    break;
    }
    case (answ3 == 3): {
    summ += 0
    break;
    }
    default: { break; }
    }
if (summ < 3 ) {
    alert(`Придется подтянуть знания. Ваш результат ${summ}`);
}
 else if (summ > 3) {
    alert(`Ого! Да вы молодец! Ваш результат - ${summ}`); }
   
// не получилось через if else
//     //if (summ => 0 || sum <=2 ) {
//    // alert(`Придется подтянуть знания. Ваш результат ${summ}`);
// //}
 // else if (summ == 3 || summ == 4 ) { 
     // alert('Могло быть и хуже')
 //}
//  //else if (summ == 5 || summ == 6 ) {
//   //  alert(`Ого! Да вы молодец! Ваш результат - ${summ}`); }

//1.10
let cday = +prompt('Введите дату', '');
let cmonth = +prompt('Введите месяц', '');
let cyear = +prompt('Введите год', '');
let tyear = 0;

if (cyear % 4 == 0 || tyear % 400 == 0 && !tyear % 100 == 0) {
    tyear = 1;
}
else { tyear= 0; }

if (cday == 31 && cmonth == 12) {
    cday = 1;
    cmonth = 1;
    cyear = cyear + 1;
} 
else if ( cday >= 28 && cday <= 29 && cmonth !== 2 ) {
   cday++;
}
else if (cday >= 28 && cmonth == 2 && tyear == 0) {
   cday = 1;
   cmonth = cmonth + 1;
}
   else if (cday == 28 && cmonth == 2 && tyear == 1) {
   cday = cday + 1;
   }
   else if (cday == 29 && cmonth == 2 && tyear == 1) {
    cday = 1;
    cmonth = cmonth + 1;
    }
   else if (cday <= 27 ) {
       cday = cday + 1;
   }


if (cday == 31 && cmonth % 2 !== 0) { 
 cmonth = cmonth + 1;
 cday = 1;
}


if (cmonth % 2 == 0 && cday == 30) {
        cmonth = cmonth + 1;
        cday = 1;    
    }
    else if (cday == 28 && cmonth == 2 && tyear == 0) {
        cday = 1;
    }
    else if (cday == 29 && cmonth == 2 && tyear == 1) {
        cday = 1;
    }
alert (`${cday}.${cmonth}.${cyear}`)


