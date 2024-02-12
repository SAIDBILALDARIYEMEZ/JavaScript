// ** Ilk Fonksiyonumuzu Tanimlamak:

function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}


// hata alabiliriz...
// function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }


hello() // calistir

function printHello(name){    // fonksiyonun yanındaki parantez istenlen parametreyi aiır.
    console.log("Merhaba" + name);
}
printHello(" Şafak");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak



/*function addition(sayi1,sayi2){  //function name and parameters
    console.log(sayi1+sayi2);     //body
}

addition(2,4)*/



function addition(sayi1,sayi2){
    return (sayi1+sayi2); // return kullanılan fonksiyonarda fonksiyonu başka bir değere atayarak kullanabilriz
}

var add = addition(1,2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.

console.log(add)


//Callback Fonksiyonlar ve Asenkron Çalışma // js senkron yapda bir dil kod değildir yani sıra ile okunmasını beklemez.
//çıktımız 1-3-2 olarak çıkar.

/*
function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2() {
    setTimeout(function() {
        console.log("İkinci ekran çıktısı");
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}

printScreen1();
printScreen2();
printScreen3();
*/


//Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur.
function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}


printScreen2(printScreen1, printScreen3);


let func = (param1, param2, param3) => expression;
/* burada return değeri arrow (ok) ile gösterilmiş. altataki asıl ifade edilmesi istenilen şey ama üsttekiyle daha koaly bir kod okunaklığı elde edilir.
let func = function (param1, param2, param3) {
    return expression;
};*/


/*let experience = prompt('Kac yillik gelistirici tecrubeniz var', );

const developer =
    experience < 5
        ? () => alert('Bir cok konuyu biliyorum')
        : () => alert('Hicbir sey bilmiyorum:)');

developer();*/

/*Recursion*/

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
/*
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(2, 3)); // 8
*/


//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
    return n == 1 ? x : x * pow(x, n - 1);
}

alert(pow(5,3));
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(5,3));


