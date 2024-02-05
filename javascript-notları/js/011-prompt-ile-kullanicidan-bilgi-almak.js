// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

// prompt ile bilgi almak
let fullName = prompt("Bir değer giriniz ") // buraya girilen yazı alertte görülür.

//css na sayfaya eklnedi
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`