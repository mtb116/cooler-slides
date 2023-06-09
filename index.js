//fake database
let database = [
    { img: "./worm1.jpg" },
    { img: "./worm2.jpg" },
    { img: "./worm3.jpg" },
    { img: "https://picsum.photos/250/310" }
]

window.onload = function () {
    const coolest = document.getElementById("firstimg");

    let i = 0
    coolest.setAttribute("src", database[i].img)

    coolest.onclick = function () {
        i++
        if (i < database.length) {
            coolest.setAttribute("src", database[i].img)
        } else {
            i = 0
            coolest.setAttribute("src", database[0].img)
        }
    }

};