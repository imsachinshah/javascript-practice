const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const fillColor = "#3498db";
const emptyColor = "#e0e0e0";
const circleColor = "#999"

let currentActive = 1;
nextBtn.addEventListener('click', function(e) {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    updateProgress();
});

prevBtn.addEventListener('click', function(e) {
    currentActive--;
    if (currentActive < 1){
        currentActive = 1;
    }
    updateProgress();
});

const completingProgressBar = function(progressColor, circleBorderColor, circleColor) {
    progress.style.backgroundColor = progressColor;
    circles.forEach((circle) => {
        // if(circle.classList.contains('active')){
            circle.style.borderColor = circleBorderColor;
            circle.style.color = circleColor;
        // }
    });
};

const updateProgress = function() {
    circles.forEach(function(circle, index){
        if (index < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }    
    });

    const actives = document.querySelectorAll('.active');
    
    progress.style.width = ((actives.length - 1) / (circles.length -1)) * 100 + '%';
    
    if(currentActive == circles.length){
        nextBtn.disabled = true;
        prevBtn.disabled = false;
        // completingProgressBar('green', 'green', 'black');
    }
    else if (currentActive == 1){
        prevBtn.disabled = true;
        // completingProgressBar(fillColor, fillColor, circleColor);
    }
    else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        // completingProgressBar(emptyColor, emptyColor, circleColor);
    }
};