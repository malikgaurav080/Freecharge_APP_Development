let john = {name: "john"},
    lily = {name: "lily"},
    peter = {name: "peter"}
    alex = {name: "alex"}


let userRoles = new Map();
console.log(userRoles)
console.log(userRoles instanceof Map)


userRoles.set(john,'admin');
userRoles.set(lily,'edtior');
userRoles.set(peter,'subscriber');


console.log(userRoles)

console.log(userRoles.get(lily));
console.log(userRoles.has(lily));
console.log(userRoles.size);
console.log(userRoles.has(alex));

console.log("==============================")


for(const user of userRoles.keys()){
    console.log(user.name)
}

console.log("==============================")


for(const role of userRoles.values()){
    console.log(role)
}

console.log("==============================")

for(const role of userRoles.entries()){
    console.log(`${role[0].name}:${role[1]}`)
}

console.log("==============================")

for(const [user,role] of userRoles.entries()){
    console.log(`${user.name}:${role}`)
}

console.log("==============================")

userRoles.forEach((role,user) => console.log(`${user.name} : ${role}`))

console.log("==============================")

let roles = [ ...userRoles.values()]
console.log(roles);

console.log("==============================")

console.log(userRoles.size);
userRoles.clear();
console.log(userRoles.size);
