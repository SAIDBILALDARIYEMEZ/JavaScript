// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz
// if else yapısını tek satırda halleder.

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("

info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`

//undefined (Tanımsız):
//NaN (Not-a-Number): sayı olmayan ifadeleri gösterir.