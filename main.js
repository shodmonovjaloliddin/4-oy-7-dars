let array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let N = 5;
let factorial = 1;
for (let i = N; i > 0; i--) {
    factorial *= i;
}
console.log ( Faktorial ($ {N} ), factorial);

let boshlangichSon = 2;
let qadam = 3;
let elementlarSoni = 10;
let yigindi = 0;
for (let i = 0; i < elementlarSoni; i++) {
    yigindi += boshlangichSon + (i * qadam);
}
console.log('Arifmetik progressiya yig\'indisi:', yigindi);

let text = "hello";
let repeatedText = '';
for (let i = 0; i < text.length; i++) {
    repeatedText += text[i].repeat(3);
}
console.log('Takrorlangan matn:', repeatedText);

for (let i = 1; i <= 10; i++) {
    console.log(i, 'kvadrati:', i * i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

let numbers = [3, 7, 2, 10, 6];
let engKatta = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > engKatta) {
        engKatta = numbers[i];
    }
}
console.log('Eng katta son:', engKatta);

let text2 = "assalamu alaykum";
let countA = 0;
for (let i = 0; i < text2.length; i++) {
    if (text2[i] === 'a') {
        countA++;
    }
}
console.log('"a" harfi soni:', countA);