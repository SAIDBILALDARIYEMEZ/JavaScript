// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

//bu şekilde yapılırsa konsol tarafında yapılabilecek işlemler ortaya çıkar. ve  getElementsByTagName ile bir çok çekme işlemi ayı anda yapılır.  * ile bütün etiketler getirilebilir.
let h2 = document.getElementsByTagName('h2')
console.log(h2)

//dökümanın  içindeki title adlı ıd ile bilgileri getirebiliyoruz.  getElementById bunun ile id ye göre çekme işlemleri yapılır.
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi" //hem concole daki başlığı hem sayfadaki başlığı değiştirdi.
console.log(title.innerHTML)


// css kısmını etkiler.
let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti" //kodluyoruz link ıd sine sahip olan yazı aslen "link bilgi" idir. ona artı ilave olarak "değişti" bilgisi gelmektedir.
link.style.color = "red"
link.classList.add('btn')

//dökümanıı ismine göre getirir.  getElementsByName
let posta = document.getElementsByName('e-posta');
console.log(posta)

//getElementsByClassName class türüne göre çağırır.
let kuslar = document.getElementsByClassName('kusu');
console.log(kuslar)

let kartal= document.getElementsByClassName('kartal kusu');
console.log(kartal)
