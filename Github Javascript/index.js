setInterval(()=>{
    let mydate = new Date()
    let time = mydate.toLocaleTimeString()
    document.getElementById("time").innerHTML = time
},1000)


let mydate = new Date()
console.log(mydate);
let mydays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let day = mydays[mydate.getDay()]
document.getElementById("day").innerHTML = day
let myMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = myMonths[mydate.getMonth()]
document.getElementById("month").innerHTML = month
let date = mydate.getDate()
document.getElementById("date").innerHTML = date
let year = mydate.getFullYear()
document.getElementById("year").innerHTML = year