function placeBid() {

    let currentBid = Number(
        document.getElementById("currentBid").innerText
    );

    let bidAmount = Number(
        document.getElementById("bidAmount").value
    );

    let message = document.getElementById("message");

    if (bidAmount <= currentBid) {

        message.innerText =
            "Your bid must be higher than the current bid.";

        return;
    }

    document.getElementById("currentBid").innerText = bidAmount;

    message.innerText =
        "Bid placed successfully! Your bid is ₹" + bidAmount;

    document.getElementById("bidAmount").value = "";
}