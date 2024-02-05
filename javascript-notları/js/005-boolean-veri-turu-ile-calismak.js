// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak. boolen true ise 1; false ise 0 döner. ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)

// boş dönerse false olur
let userName;
let isUserName = Boolean(userName)
console.log(isUserName) // false

Boolean("11") // true // dolu dönmüş
Boolean("0") // true // dolu dönmüş
Boolean("") // false // boş dönmüş

userName = "user"

console.log("User Name:", Boolean(userName)) // true // çünkü bir şey varki dönmüş

// 0 ,-0, null, false, NaN, undefined, ("") -> bunlar false döner. çünkü değeri yok veya 0
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true // burada bir değerlendirme olduğu için true dönmüştür.

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true // çümkü karakter sayısı 0'dan büyük.