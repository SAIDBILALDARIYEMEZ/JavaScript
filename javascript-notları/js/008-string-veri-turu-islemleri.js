// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "saidbilal@gmail.com"
let firstName = "Said"
let lastName = "Bilal"

/*
string karakter sayisi -> length
*/
console.log( firstName.length ) // 5 cevabı alınır.


/*
İstenilen yerdeki karakteri bulmak ama değerler 0'dan başlar -> [0]:
*/
console.log(firstName[0]) //h
console.log(firstName.charAt(4)) //n


/*
buyuk harf / kucuk harf :
*/
firstName = firstName.toUpperCase()
console.log(firstName) // hepisini büyük harf yapar

firstName = firstName.toLowerCase()
console.log(firstName) //hepsini küçük harf yapar.


/*
String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
*/
console.log(email.search("@")) //cevap 15
console.log( email[15] ) //cevap @

email.search('olmayan') // -1 çümkü normalde index 0'dan başlar. ama olmayan bir değer yeri böyle olur.  // includes olsaydı false dönerdi.


/*
belli bir yere kadar al -> slice :  (domain bilgisi) gmail.com
*/
// let DOMAIN = email.slice( email.search("@")) // cevap @gmail.com
let DOMAIN = email.slice( email.search("@") + 1) //cevap gmail.com
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') )  // sadece gmail kismini aldik çünkü artık domain olarak bir değişkeni tanımlamış olduk.
)


/*
bilgiyi degistir -> replace :
*/
email = email.replace('gmail.com', 'kodluyoruz.org') // burada ilk başta bu değişikliği bir değişkene tanımlamammız gerekli. (email)
console.log(email) //saidbilal@kodluyoruz.org


/*
istedigim bilgi var mi ? -> includes : true false döner
*/
email.includes('dkfhsd') // false //search olsaydı -1 dönerdi
email.includes('@') // true


/*
istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
*/
console.log(
    email.endsWith('kodluyoruz.org') // bu ilgi ile bitti // true
)

console.log(
    email.endsWith('kdddeffrgg') // bu ilgi ile bittimedi // false
)

console.log(
    email.startsWith('kodluyoruz.org') // bu ilgi ile başlamadı // false
)

console.log(
    email.startsWith('said') // bu ilgi ile başladı // true
)


/*
Ilk Harflerini Buyuk Yapmak
*/
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)


/*
iki string verisini birleştirme --> concat
*/

console.log(firstName.concat('', lastName)) // FIRSTLAST

/*
karakterin Unicode değerini bula --> charCodeAt
*/

console.log(firstName.charCodeAt(3)) // S-->83
