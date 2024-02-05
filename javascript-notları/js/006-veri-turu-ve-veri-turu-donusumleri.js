// ********** Veri Turunu Ogrenmek ve Veri Turu Donusumleri ********** 

/*
veri turunu ogrenmek için typeof kullanılır:
*/


console.log(typeof 42); // beklenen output: "number"

console.log(typeof 'kodluyoruz'); //beklenen output: "string"

console.log(typeof true); // beklenen output: "boolean"

console.log(typeof Variable); // beklenen output: "undefined"



/*
Bir başka şekilde isInteger( ), isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.
*/


//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true


/*
string(metinsel) bilgileri int ve float'a donusturmek
*/
//parseInt
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof(number1) )

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2) ) // parseInt ile dönüşlerde harf sona takılıyorsa çıktı int olarak döner ve number ifdesi gerçekleşir. harf başta olursa nan döner ve number tipi alır.


//number
let number3 = "11.1vt"
number3 = Number(number3)
console.log("number3: ", number3, typeof(number3) ) //Number iledönüşlerde değer nan döner ama tipi number olarak isimlendirilir

let number4 = "11.1"
number4 = Number(number4)
console.log("number4: ", number4, typeof(number4) )

//parseFloat
let number5 = "11.4px"
number5 = parseFloat(number5)
console.log("number5: ", number5, typeof(number5) )



/*
number veri tipinden string'e donusturmek:
*/
let number6 = 55
number6 = number6.toString()
console.log(number6, typeof(number6))