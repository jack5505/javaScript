arr.forEach(function(item, index, array) {
    // ... делать что-то с item
});




// Вызов alert для каждого элемента
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);



["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
});





//Sort number
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15