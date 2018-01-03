// define all variables
var displayEle;
var classDisplayEle;
var allStars = document.querySelectorAll('.star');
var allBars = document.querySelectorAll('.nav-list li');
var hiddeSibbling = document.querySelectorAll('.main-section > div');

// hidde and show sections in the main bar
for(let i=0; i< allBars.length; i++){
    allBars[i].addEventListener('click', function(){
        classDisplayEle = allBars[i].getAttribute('data-value') + '-section';
        displayEle = document.querySelector('.main-section .' + classDisplayEle);
        // hide all sections and add active class to the clicked bar
        for(let j=0; j<hiddeSibbling.length; j++){
            hiddeSibbling[j].style.display = 'none';
            allBars[j].classList.remove('active');
        }
        // show the wantted section only
        displayEle.style.display = 'block';
        allBars[i].classList.add('active');
    });
}

// change the activation status of the star when clicked
for(let i=0; i< allStars.length; i++){
    allStars[i].addEventListener('click', function(){
        allStars[i].classList.toggle('active');
    });
}
