let statuses = {
    OPEN : Symbol('open'),
    In_Progress : Symbol('inprogress'),
    Completed : Symbol('completed'),
    hold : Symbol('on-hold'),
    Cancelled : Symbol('cancelled')
}

console.log(statuses.Completed);

let status = Symbol('status');

let task = {
    [status] : statuses.OPEN,
    description : 'Learning ES6 Symbol'
};

console.log(task)
console.log(Object.keys(task));
console.log(Object.getOwnPropertyNames(task));