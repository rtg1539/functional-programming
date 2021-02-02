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

function _filter(list, predi) {
    var new_list = [];
    
    _each(list, function(val) {
        if(predi(val)) new_list.push(val);
    });

    return new_list;
}

function _map(list, mapper) {
    var new_list = [];

    _each(list, function(val) {
        new_list.push(mapper(val));
    });
    
    return new_list;
}

function _each(list, iter) {
    for (var i = 0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;
}

// 1. curry, curryr
function _curry(fn) {
    return function(a, b) {
        return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b); };
    }
}

function _curryr(fn) {
    return function(a, b) {
        return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a); };
    }
}

var add = _curry(function(a, b) {
    return a + b;
})

var add10 = add(10);
var add5 = add(5);
console.log( add10(5) );
console.log( add(5)(3) );
console.log( add5(3) );
console.log( add(10)(3) );

var sub = _curryr(function(a, b) {
    return a - b;
})

console.log( sub(10 ,5) );

var sub10 = sub(10);
console.log( sub10(5) );

// 2. _get
var _get = _curryr(function(obj, key) {
    return obj ? obj[key] : undefined;
})

var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, 'name'));
console.log(_get('name')(user1));

var get_name = _get('name');
console.log( get_name(users[5]) );

var over30 = _filter(users, function(user) { return user.age >= 30; });
var under30 = _filter(users, function(user) { return user.age < 30; });
var names = _map(over30, _get('name'));
var ages = _map(under30, _get('age'));
console.log(over30);
console.log(under30);
console.log(names);
console.log(ages);