var users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 },
];
// 명령형 코드
// 1. 30세 이상인 USERS
// const over30 = users.filter(r => r.age >= 30) // ES6
var over30 = [];

for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if(user.age >= 30) {
        over30.push(user);
    }
}

// 2. 30세 이상인 USERS의 NAME
// const names = over30.map(r => r.name) //ES6
var names = [];
for (var i = 0; i < over30.length; i++) {
    names.push(over30[i].name)
}

// 3. 30세 미만인 USERS
// const under30 = users.filter(r => r.age < 30) // ES6
var under30 = [];

for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if(user.age < 30) {
        under30.push(user);
    }
}

// 4. 30세 미만인 USERS의 age
// const ages = under30.map(r => r.age) //ES6
var ages = [];
for (var i = 0; i < under30.length; i++) {
    ages.push(under30[i].age)
}

// 2. _filter, _map 리팩토링
function _filter(list, predi) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        if(predi(list[i])) {
            new_list.push(list[i]);
        }
    }
    return new_list;
}

function _map(list, mapper) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

var over30 = _filter(users, function(user) { return user.age >= 30; });
var under30 = _filter(users, function(user) { return user.age < 30; });
var names = _map(over30, function(user) { return user.name });
var ages = _map(under30, function(user) { return user.age });

