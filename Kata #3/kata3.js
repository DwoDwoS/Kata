function drawMyPen(month) {

    const penCalendar = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

let penHead = " /\\\n";
penHead += "/__\\\n"

let penBody = "";
for (let i = 0; i < penCalendar[month.toLowerCase()]; i++) {
    penBody += "||||\n"
}

penHead += penBody;

const eraserWorning = ["septembre", "octobre", "novembre", "decembre", "janvier", "fevrier"];

if (eraserWorning.includes(month.toLowerCase())) {
    penHead += "|__|\n|  |\n|__|\n";
} else {
    penHead += "|__|\n|__|\n";
}

return penHead;
}

const pre = document.createElement("pre");
pre.textContent = drawMyPen("mars");
document.body.appendChild(pre);

console.log(drawMyPen("septembre"));
console.log(drawMyPen("mars"));
console.log(drawMyPen("juin"));
console.log(drawMyPen("juillet"));