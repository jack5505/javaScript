let roma = {
    age:"151",
    sayHello: function () {
        alert("hello Roma");
    }

};

roma.sayHello();


let str = "SeeWhatIsIt";
console.log(str.toUpperCase());



let str = "stringify";

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)

alert( 'a' > 'Z' ); // true