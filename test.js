//button move random
var button = document.getElementById("move");
button.addEventListener("click", function () {
    var x = Math.floor(Math.random() * (window.innerWidth - 100));
    var y = Math.floor(Math.random() * (window.innerHeight - 100));
    document.getElementById("box").style.left = x + "px";
    document.getElementById("box").style.top = y + "px";
    console.log(x, y);
}, false);

//button alert
var button = document.getElementById("alert");
button.addEventListener("click", function () {
    alert("loveyou to piaa");
}
    , false);
