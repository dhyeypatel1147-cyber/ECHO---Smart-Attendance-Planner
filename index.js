function calculate() {
    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);
    let required = parseInt(document.getElementById("required").value);

    let percent = ((attended / total) * 100).toFixed(2);

    document.getElementById("percent").innerText = percent;

    let message = "";
    let status = "";
    let img = document.getElementById("moodImg");

    if (percent < required) {
        let need = Math.ceil((required * total / 100) - attended);
        message = "You need to attend " + need + " more classes";
        status = "Critical 😰";
        img.src = "Echo -moods 1.png";
    } 
    else if (percent >= required && percent < required + 10) {
        message = "You are close, be careful!";
        status = "Warning 😐";
        img.src = "Echo - Angry.png";
    } 
    else {
        let canSkip = Math.floor((attended - (required * total / 100)));
        message = "You can skip " + canSkip + " classes";
        status = "Safe 😎";
        img.src = "Echo - moods 2.png";
    }

    document.getElementById("status").innerText = status;
    document.getElementById("message").innerText = message;
}