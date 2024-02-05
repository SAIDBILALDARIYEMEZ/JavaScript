// ********** let ve const ile Degisken Tanimlama ********** 

/*
 var ile degisken tanimlamak:
 var + değişken imi + tanım
*/
var serverNames = "api.kodluyoruz.org"
console.log(serverNames)


/*
let ile degiskeni bos tanimlamak:
noktalı virgül ile tanımlama kapanır.
*/
let serverName;
console.log(serverName)


/*
let ile degiskene bilgi atamak:
let ve var aeasındaki fark şuanlık yoktur.
*/
serverName = "https://kodluyoruz.org"
console.log(serverName)
// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)


/*
degisken atamasi yapmadan once kullanmaya calismak:
kullanılamaz çünkü kod satırları okunurken sıra ile okunur. önce tanımlama yapılmalı. sonra değişken atanmaı
*/

/* HATALI KULLANIM:  
console.log(fullName)
let fullName = "Hakan Yalcinkaya";
*/


/*
let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
kod sıra ile okundupu için önceki tanım sonraki tanım yüzünden ezildi ve okunmadı
*/
let fullName = "Hakan Yalcinkaya";
fullName = "Lorem Ipsum Dolor"
console.log(fullName)

/*
birlestirme veya ekleme islemi
*/
fullName + "Yeni Eklenen Bilgi" // bu şekilde eklenemez. çünkü arada + işareti değil. += işareti olmalı. veya:::::::::

console.log(fullName + " Test Bilgisi") // Log içinde ekledik

fullName = fullName + " Yeni Bilgi" // tekrardan tanımlama yapu-ılım tanımlar iç içe geçer
fullName =  "2: Bilgi : " + fullName // sırası değişebilir.

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi" // aradaki operatör sayesinde yine birleştirme işlemi gerçekleşti.
console.log(fullName)

/*
const ile degiskeni bos tanimlamaya calismak ama içinin cons tanımlamasında dolu olması lazım :
*/
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

/*
const ile degisken tanimlamak:
*/
const SERVER_PASSWORD = "oisjefo9jwes221"
console.log(SERVER_PASSWORD)

// ////////////// aynı değişken ile tanımlama yapmaya çalıştığım için tekrar bir password tanımlayamam. deişkenin ismini değiştirmem gerekiyor.

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)