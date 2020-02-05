

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}



// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // огурец: 500 и так далее
});


// массив пар [ключ, значение]
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);

alert( map.get('1') ); // str1