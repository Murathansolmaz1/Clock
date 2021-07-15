let myname = prompt("Lütfen Adınızı Girer Misiniz? : ")

let namespan = document.querySelector("#myName");

namespan.innerHTML = myname;


function showTime() {
    
    
    var date = new Date();
    var saat = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours()
    var dakika = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()
    var saniye = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds()
    var session =""
    let day = date.getDay()

    
    switch (day) {
        case 1:
            session = document.querySelector("#myClock").innerHTML = "Pazartesi"
            break;
        case 2:
            session = document.querySelector("#myClock").innerHTML = "Salı"
            break;

        case 3:
            session = document.querySelector("#myClock").innerHTML = "Çarşamba"
            break;

        case 4:
            session = document.querySelector("#myClock").innerHTML = "Perşembe"
            break;

        case 5:
            session = document.querySelector("#myClock").innerHTML = "Cuma"
            break;

        case 6:
            session = document.querySelector("#myClock").innerHTML = "Cumartesi"
            break;

        case 7:
            session = document.querySelector("#myClock").innerHTML = "Pazar"
            break;
    }

    var time = saat + ":" + dakika + ":" + saniye + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();




