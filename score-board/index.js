// variables
let homeCount = 0;
let guestCount = 0;

// reset function

function reset() {
    homeCount = 0;
    guestCount = 0;
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
}

// home function

function addOneHome() {
    ++homeCount;
    document.getElementById("home-score").textContent = homeCount;
}

function addTwoHome() {
    homeCount += 2;
    document.getElementById("home-score").textContent = homeCount;
}

function addThreeHome() {
    homeCount += 3;
    document.getElementById("home-score").textContent = homeCount;
}

// guest function:

function addOneGuest() {
    ++guestCount;
    document.getElementById("guest-score").textContent = guestCount;
}

function addTwoGuest() {
    guestCount += 2;
    document.getElementById("guest-score").textContent = guestCount;
}

function addThreeGuest() {
    guestCount += 3;
    document.getElementById("guest-score").textContent = guestCount;
}