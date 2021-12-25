function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    var deg = getRandomInt(360);
    var wid = getRandomInt(500);
    var hei = getRandomInt(500);
    var bor = getRandomInt(10);
    var br = getRandomInt(100);
    var deg =getRandomInt(360);
    var br2 =getRandomInt(10)

    console.log ("#clickkrug", red, green, blue, wid, hei,bor, deg);
    
    var stringBoxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";
    
    document.getElementById("cube") .style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("cube") .style.boxShadow = stringBoxShadow;
    document.getElementById("cube") .style.transform = "scale ("+ 2 + ", "+ 1 + ",)";
    document.getElementById("cube").style.width = wid + "px";
    document.getElementById("cube").style.height = hei + "px";
    document.getElementById("cube").style.borderRadius = br + "px";
    document.getElementById("cube").style.transform = "rotate(" + deg +"deg)";
    document.getElementById("cube").style.boxShadow = stringBoxShadow;
    document.getElementById("cube").style.border = br2 + "px solid";
}
    function clickContainer() {
        var red = getRandomInt(255);
        var green = getRandomInt(255);
        var blue = getRandomInt(255);

    var stringBoxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";
    
    document.getElementById("container") .style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("container") .style.boxShadow = stringBoxShadow;
    }
     
    function getRandomInt(max) {
         return Math.floor(Math.random() * max)
     }