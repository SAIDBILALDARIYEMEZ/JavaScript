// ********** Template Literals Kullanimi [option + , = (`)] **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

//eski kullanıım, satır atlayıp  yazamzsın. yani yazdıklarını tek satırda kullanmak zorundasın.
let email = username + "@" + DOMAIN

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)


// yeni kullanım. isteğe göre satır atlamalı olaraktan da kullanabiliyorsun.
let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)

// değişken kullanmak içinde $ işaretini kullanabilirsin bu daha kolay kod yazımını sağlar.