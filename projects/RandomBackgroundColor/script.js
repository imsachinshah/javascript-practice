const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += hex[randomIndex];
    }
    return color;
};

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

let changeVar;

startButton.addEventListener('click', function (e) {
    if (!changeVar) {
        changeVar = setInterval(changeBackgroudColor, 1000);
    }

    function changeBackgroudColor() {
        document.body.style.backgroundColor = randomColor();
    }
});

stopButton.addEventListener('click', function (e) {
    clearInterval(changeVar);
    changeVar = null;
});
