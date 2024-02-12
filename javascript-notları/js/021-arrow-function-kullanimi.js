// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript") // bu bir return değerini gösterdim.

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
helloFuncV1("helloFuncV1") // az bir parametreye sahip olduğu için arrow kullanabildik.


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir donus islemi yani 1den az parametreye sahip.
helloFuncV2("helloFuncV2")


const helloFuncV3 = (firstName, lastName) => console.log( //birden fazla parametre alırsa parantez içine alınmalı.
    `Merhaba ${firstName} ${lastName}`
) // console.log parantezi

helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) => { // birden fazla işlem gerekirse süslü parnteze alınır.
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info) 
    return info
}

helloFuncV4("helloFuncV4", "Other Info")
