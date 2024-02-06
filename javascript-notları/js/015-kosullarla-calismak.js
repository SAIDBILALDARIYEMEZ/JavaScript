// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

//let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}


/*let username = prompt("Kullanici Adinizi Giriniz:")

if (username) {  // if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz ${username}`)
} else {
    console.log("bilgi yok")
}*/


//not hesaplama
let ogrVizeNot = prompt("Vize Notunuzu Giriniz:")
let ogrFinalNot = prompt("Final Notunuzu Giriniz:")

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
    console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
    console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
    console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}


// sayı tahmin etme oyunu

var randomSayi = Math.floor(Math.random() * 100);

//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
    alert("Bir daha denee :(, Random sayi: " + randomSayi);
}



//boy kilo indexi hesaplama
function vkiHesapla() {
    var weight = prompt("kilonu gir");
    var height = prompt("boyunu gir")

    var vki = weight/ (height*height);
    if( vki <18.5) {
        alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
    }
    else if(vki>= 18.5 && vki <= 24.9) {
        alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
    }
    else if(vki>= 25.0 && vki <= 29.9) {
        alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    }
    else if(vki>= 30) {
        alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    }
    return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla();

















