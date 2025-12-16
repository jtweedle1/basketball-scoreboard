let homeScore = 0;
let guestScore = 0;

document.getElementById("guest-score").textContent = guestScore;

function plusOneHome() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
}

function plusTwoHome() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
}

function plusThreeHome() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}


function plusOneGuest() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
}

function plusTwoGuest() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function plusThreeGuest() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}