const cards = document.querySelectorAll("div .flip-card-back");
const toggle = document.getElementById("switch");

toggle.addEventListener("click", () => {

    console.log(toggle.checked)
    !toggle.checked ? whiteBackgroundColor()  : darBackgroundColor(); 
    
})

function whiteBackgroundColor(){
    document.body.style.backgroundColor = 'white'
    cards.forEach(card => {
        card.style.color = 'white';
    })
}

function darBackgroundColor(){
    document.body.style.backgroundColor = '#31312c';
    cards.forEach(card => {
        card.style.color = 'black';
    })
}