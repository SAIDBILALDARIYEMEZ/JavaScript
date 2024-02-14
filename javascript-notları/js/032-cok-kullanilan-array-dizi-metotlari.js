// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp
let items = [1, 2, 3, 4, 5]
/*
Array icinde Array:
*/
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]
items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulastik :)


/*
Array icerisinden oge ayirmak -> splice(pos, item?) 2den bşalsın 4 taen olsun
*/
let newItems = items.splice(2, 2)
console.log("newItems: ", newItems)
console.log("items: ", items)


/*
Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
*/
items.unshift("lorem")
items.push("ipsum")
console.log( items.indexOf("ipsum") )


/*
Array Kopyalamak -> slice, [...ES6]
*/
let copyItems = items
console.log(items)
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)
console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)
let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)


/*
Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
*/
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek. bu iki farklı array yapısını tek array olarak atadık.
console.log(allUsers)
console.log(allUsers.length)


/*
Array icerisindeki bilgiyi String'e cevirmek -> toString, join
*/
console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) // araya --- koyduk


/*
Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value). yani yerini değiştirir.
*/
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)


/*
eleman vardı yoktu diye kontrol eder. True false döner includes
*/
const alisverisListem = ["elma", "ekmek", "süt"];
const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar); // true
const armutVar = alisverisListem.includes("armut");
console.log(armutVar); // false


/*
push eleman ekler. Yeni Dizimiz ["elma", "ekmek", "süt", "yumurta"] şeklinde olacaktır
*/
let alisverisListem = ["elma", "ekmek", "süt"];
alisverisListem.push("yumurta");
console.log(alisverisListem);


/*
slice ekleme yapar.
*/
const alisverisListem = ["elma", "ekmek", "süt"];
const yeniAlisverisListem = alisverisListem.slice(0,2);
// "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.
console.log(yeniAlisverisListem);
// ["elma", "ekmek"] görmeyi bekleriz.


/*
İhtiyacımıza göre bu parametrelerden hepsini veya aralarından birkaçını kullanabiliriz. forEach
*/
const malzemeler = ["yumurta", "un", "süt"];
malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});
// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.


/*
 sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır. map
*/
const sayilar = [1,2,3];
let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});
console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.
console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.


/*
sayının olup olmama durumuna göre true false döner. ----> some
*/
const sayilar = [4,5,6];
// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar.some(function(sayi) {
    return sayi > 5 ;
});
console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.
const sonuc2 = sayilar.some(function(sayi) {
    return sayi <3;
});
console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.


/*
some kıyasla dizi içindeki her elemanın buna uymasını  bekleriz. ---> every
*/
const sayilar = [4,5,6];
const sonuc1 = sayilar.every(function(sayi) {
    return sayi > 3;
});
console.log(sonuc1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.
const sonuc2 = sayilar.every(function(sayi) {
    return sayi > 5;
});
console.log(sonuc2);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.
const sonuc3 = sayilar.every(function(sayi) {
    return sayi > 7;
});
console.log(sonuc3);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.