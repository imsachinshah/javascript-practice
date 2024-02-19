const cards = document.querySelectorAll('.card');
let evnt;

cards.forEach(function(card) {
    evnt = card.addEventListener('click', function(e) {
        removeActiveClasses();
        card.classList.add('active');
    });
});
const removeActiveClasses = () => {  
    cards.forEach(function(card) {
        card.classList.remove('active');
    });
}