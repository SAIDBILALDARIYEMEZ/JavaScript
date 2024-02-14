// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

/*
web sayfaları veriyi yerel (local) veya tarayıcı (browser) içinde saklayabilir hale gelmiştir.
hızlı çalışmasının nedeni artık veriler her sunucu istediğinde değil, sadece çağırıldıklarında gelmektedir.
Veriler key/value şeklinde saklanmaktadır ve web sayfaları sadece kendi oluşturdukları verilere erişebilmektedir.
Birçok tarayıcı Web Storage API yapısıyla uyumlu şekilde çalışabilmektedir.
*/

// localStorage icerisine bilgi kaydetmek:

let email = "saidbilal@gmail.com"
localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilir(key, value)
/*
Eğer daha önce belirttiğiniz bir anahtarı kullanırsanız kaydetmek için veri eski kaydın üzerine yazılacaktır.
sadece string biçiminde kayıt yapılır.
Karmaşık bir veriyi kaydetmek istediğinizde toString() metodu çalıştırılmalı ve üretilen değer kaydedilmelidir.
Json verisini kaydetmek içinse JSON.stringify() metodu kullanılmalıdır.
*/



// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:

let localStorageEMailInfo = localStorage.getItem('userEmail') // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo)

// localStorage icerisinden istenilen Key bilgisinin silinmesi:

// 1
localStorage.removeItem('userEmail') // key bilgisini yazarak silebiliriz..

// 2 fakat 1 tane değil tüm ögeleri siler
localStorage.clear();
