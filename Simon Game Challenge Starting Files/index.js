var randomnumberstore = [];
var clickvalue = [];
var checkanswer;
var Level = 0;


document.addEventListener("keypress", function (event) {
    if ((event.key === "a" || event.key === "A") && randomnumberstore.length == 0) {
        // console.log("call from A:- "+randomnumberstore);
        myFunction();

    } else {
        // console.log("else statment");
    }

});
function myFunction() {
    randomnumber = Math.floor(Math.random() * 4) + 1;
    // console.log(randomnumber);
    // blink and sound of 4 color block     ok
    switch (randomnumber) {
        case 1:
            document.getElementById("1").classList.add("pressed");
            setTimeout(function () { document.getElementById("1").classList.remove("pressed"); }, 100)
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
        case 2:
            document.getElementById("2").classList.add("pressed");
            setTimeout(function () { document.getElementById("2").classList.remove("pressed"); }, 100)
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
        case 3:
            document.getElementById("3").classList.add("pressed");
            setTimeout(function () { document.getElementById("3").classList.remove("pressed"); }, 100)
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        case 4:
            document.getElementById("4").classList.add("pressed");
            setTimeout(function () { document.getElementById("4").classList.remove("pressed"); }, 100)
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        default:
            var wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
            break;

    }
    // push in randomnumberstore Array   ok
    randomnumberstore.push(randomnumber);
    // Level ++ ;
    // console.log("rnum length:-" + randomnumberstore.length);    
    clickvalue = []; // reset the array for    
    // console.log(randomnumberstore);
    isEqual();
    // return randomnumberstore;
}



// let intervalID = setInterval(myFunction, 5000);
function idmatch(a) {
    // push  ok
    clickvalue.push(a);
    // console.log("click value array:- " + clickvalue);
    isEqual();
}

// compare the two array ok
function isEqual() {
    var a = clickvalue;
    var b = randomnumberstore;
    // console.log(a);
    // console.log(b);
    if (a.length === b.length) {
        myFunction();

    }

    for (var i = 0; i < a.length; i++)
        if (a[i] != b[i])
            return document.getElementById("level-title").innerText = ("game-over"),
                location.reload(), document.getElementById("bodyid").classList.add("game-over");//IF FALSE
    // UPDATE LEVEL 
    return document.getElementById("level-title").innerText = ("Level:-" + randomnumberstore.length);// TRUE

}

// var v = isEqual(); /// THESE THE EEROR

