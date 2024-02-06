// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector("#greeting")
let paragraflar = document.querySelector('.a1')

console.log("paragraflar: ", paragraflar)
console.log("d: ", greeting.id, )

greeting.style.background = '#e30000'

console.log(greeting.classList) // burada class içinde ne olduğunu kontrol ediyoruz. ama şuanlık bişey olmadığı için boş döndü.

/*
greeting.classList.add("text-primary") // burada class ekledik
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek


greeting.classList.remove("title", "second-class", "third-class") // birden fazla class silmek

console.log(greeting.classList)*/
