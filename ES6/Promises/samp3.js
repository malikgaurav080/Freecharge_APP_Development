
function getUser(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
                resolve([
                    {username:'john',email:'john@gmail.com'},
                    {username:'jane',email:'jane@gmail.com'}
                ]);
        },1000);
    });
}

const promise = getUser();
promise.then((users)=>{
    console.log(users);
});