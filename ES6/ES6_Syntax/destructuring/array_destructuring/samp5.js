function getprofile(){
    return [
        "gaurav",
        "malikgaurav080@gmail.com",
        ["Python","Java","C"]
    ];
}

let [
    name,
    uname,
    [skill1,skill2,skill3]
] = getprofile();

console.log(name,uname,skill1,skill2,skill3);