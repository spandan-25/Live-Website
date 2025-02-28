// Surprise Message Function
function showMessage() {
    document.getElementById("secretMessage").classList.remove("hidden");
}

// Countdown Timer (Set your date)
const targetDate = new Date("2025-04-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = 
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    } else {
        document.getElementById("timer").innerHTML = "We're finally together! 🎉";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
