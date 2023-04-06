function playGame() {
    //dice1
    var randomNr1 = Math.floor(Math.random() * 6 + 1);
    var baseString = "images/dice";
    var imgAddres = baseString.concat(randomNr1.toString(), ".png");
    document.querySelector(".img1").setAttribute("src", imgAddres);

    //dice2
    var randomNr2 = Math.floor(Math.random() * 6 + 1);
    var imgAddres2 = baseString.concat(randomNr2.toString(), ".png");
    document.querySelector(".img2").setAttribute("src", imgAddres2);

    if (randomNr1 > randomNr2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Won!";
        document.querySelectorAll("p")[0].innerHTML = "🚩Player 1🚩";
        document.querySelectorAll("p")[1].innerHTML = "Player 2";
    } else if (randomNr1 < randomNr2) {
        document.querySelector("h1").textContent = "Player 2 Won! 🚩";
        document.querySelectorAll("p")[1].innerHTML = "🚩Player 2🚩";
        document.querySelectorAll("p")[0].innerHTML = "Player 1";
    } else {
        document.querySelector("h1").textContent = "🚩 Draw! 🚩";
        document.querySelectorAll("p")[1].innerHTML = "🚩Player 2🚩";
        document.querySelectorAll("p")[0].innerHTML = "🚩Player 1🚩";
    }
}

$(".play-btn").on("click", function (btn) {
    $(".play-btn").toggleClass("pressed");
    setTimeout(function () {
        $(".play-btn").toggleClass("pressed");
    }, 100);
    playGame();
});
