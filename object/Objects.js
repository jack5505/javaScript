//let user = new Objects();

let fields = {};

fields = {
    name:"Jakhongir"
};

let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];

console.log(fields.name);


    function setNames(name,age) {
        return{
            name:name,
            age:age
        }
    }

    let get = setNames("jakhongir",21);
    alert(get.name);