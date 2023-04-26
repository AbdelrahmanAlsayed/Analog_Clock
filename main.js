
const hours = document.getElementById("clock-hour");
const minutes  = document.getElementById("clock-minutes");
const seconds = document.getElementById("clock-seconds"); 

const clock = () => {
    let date = new Date();

    let hour = (date.getHours() * 360 / 12 ) + (date.getMinutes() * (360 / 60) / 12);
    let min = (date.getMinutes() * 360 / 60 ) + (date.getMinutes() * (360 / 60) / 60);
    let sec = date.getSeconds() * (360 / 60 ) ;

    hours.style.transform = `rotateZ(${hour}deg)`; 
    minutes.style.transform = `rotateZ(${min}deg)`;
    seconds.style.transform = `rotateZ(${sec}deg)`;  
}

setInterval(clock, 1000);

const   textHour = document.getElementById("text_hours"),
        textMinutes = document.getElementById("text_minutes"),
        textSeconds = document.getElementById("text_seconds"),
        textAmPm = document.getElementById("text_ampm");

const   day = document.getElementById("date_day"),
        month = document.getElementById("date_month"),
        year = document.getElementById("date_year");


const clockText = () => {
    let date = new Date();

    let hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        amPm,
        today = date.getDate(),
        mon = date.getMonth(),
        yr = date.getFullYear();

    if(hour >= 12) {
        hour = hour - 12;
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    if(hour == 0) hour = 12;
    if(hour < 10) hour = `0${hour}`;
    if(min < 10) min = `0${min}`;
    if(sec < 10) sec = `0${sec}`;

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    textHour.innerHTML = `${hour}:`
    textMinutes.innerHTML = `${min}:`;
    textSeconds.innerHTML = sec;
    textAmPm.innerHTML = amPm;
    day.innerHTML = today;
    month.innerHTML = `${months[mon]},`;
    year.innerHTML = yr;
}

setInterval(clockText, 1000);

const themeButton = document.getElementById("button");
const darkTheme = "dark_theme"
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected_theme");
const selectedIcon = localStorage.getItem("selected_icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bxs-moon" :"bxs-sun";

if (selectedTheme && iconTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected_theme", getCurrentTheme ());
    localStorage.setItem("selected_icon", getCurrentIcon());
})

