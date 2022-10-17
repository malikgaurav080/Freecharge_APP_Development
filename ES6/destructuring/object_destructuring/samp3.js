let employee = {
    id : 101,
    emp_name : {
        fname : "Gaurav",
        lname : "Malik"
    }
};

let {
    id,
    emp_name: {
        fname,
        lname
    }
} = employee;

console.log(id,fname,lname)