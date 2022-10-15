function gettime(){
    console.log(new Date().toLocaleString())
}

//setTimesout(gettime,3000)
setInterval(gettime,1000)