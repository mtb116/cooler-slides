//fake database
let database = [
    { img: "https://picsum.photos/250/310" },
    { img: "https://picsum.photos/200/300" },
    { img: "https://picsum.photos/210/350" }
]

window.onload = function () {
    const coolest = document.getElementById("firstimg");
    let image = database[0].img
    coolest.setAttribute("src", image)

};