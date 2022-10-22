function getUser(){
    return [
        {username:'john',email:'john@gmail.com'},
        {username:'Jane',email:'jane@gmail.com'}
    ]
}

function findUser(username){
    const users = getUser();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('john'));