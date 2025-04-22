let log = document.getElementById('Log')
let buttons = document.querySelectorAll('.buttons');
let blue = document.getElementById('Blue');
let white = document.getElementById('White');

log.addEventListener('click', function () {
})


    const time = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
 let minutesWithTwoDigits = minutes.toString().padStart(2, "O")
        console.log(hours + ":" + minutesWithTwoDigits);



document.getElementById("alert")
    .addEventListener('click', function () {
        alert("stop clicking the button")
    });


blue.addEventListener('click', function () {
    buttons.forEach(function (element) {
        element.style.backgroundColor = "blue";
    })
});

white.addEventListener('click', function () {
    buttons.forEach(function (element) {
        element.style.backgroundColor = "white";
    })
});
