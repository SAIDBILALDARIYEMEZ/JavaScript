// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti..."


//kendi ögeni oluştur.
let ulDOM = document.querySelector("ul#list") //değişecek öge belirlendi
let liDOM = document.createElement('li') //oluşturulacak öge seçildi.

liDOM.innerHTML = "Kendi Olusturdugumuz Oge" //oluşturuldu ama ekşlenmedi

// ulDOM.append(liDOM) // en sona ekler.
ulDOM.prepend(liDOM) // en başa ekler


//console kısmında ıd seçici ile gözükecek.
var one = document.getElementById("walterwhite");
console.log(one.innerHTML)

//console kısmında class seçici ile gözükecek.
var two  = document.getElementsByClassName("alternate");
console.log(two)

//two clasına sahip olan ögeler kırmızı olsunlar.
for (var i = 0; i < two.length; i++) {
    two[i].style.color  = "red";
}

