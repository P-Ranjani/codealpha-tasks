const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseover", event => {
    card.style.transform = "scale(1.05)";
    card.style.backgroundColor = "beige";
});
})
cards.forEach(card => {
    card.addEventListener("mouseout", event => {
    card.style.transform = "scale(1)";
    card.style.backgroundColor = "white";
});
})

function msg1(){
    window.alert("Link Coming Soon!");
}
function msg2(){
    window.alert("This is the current site!");
}