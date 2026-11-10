
let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {

    if (month > 24) {
        break;
    }

    total += saving;

    let message = "";

    if (saving >= 500) {
        message = " - Big month!";
    }

    console.log(`Month ${month}: saved KES ${saving}, total KES ${total}${message}`);

    month++;
    saving += 50;
}

if (total >= goal) {
    console.log(`Goal reached in month ${month - 1} with KES ${total}!`);
} else {
    console.log("Safety limit reached!");
}
