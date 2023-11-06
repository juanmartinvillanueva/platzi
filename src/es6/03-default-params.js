function newUser(name, age, country){
    var name = name || 'Juan'
    var age = age || 42
    var country = country || 'ARG'
    console.log(name, age, country)
}

newUser();
newUser('Yoana', 31, 'ARG')

function newAdmin(name = 'Juanma', age = 42, country = 'ARG'){
    console.log(name, age, country)
}

newAdmin();
newAdmin('Yoana', 31, 'ARG');
