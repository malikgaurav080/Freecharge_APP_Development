let server = {
    name: "server",
    // restart: function(){
    //     console.log("the " + this.name + " is restarting..."); }

    restart(){
        console.log("the " + this.name + " is restarting...");            //with es6

    },
    'starting up'(){  //concise method syntax

        console.log("The " + this.name + " is starting up!!!"); 

    }
}

server.restart()
server['starting up']();