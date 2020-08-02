document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    let gamecanvas = document.getElementById("gamecanvas");
    let birdimg = document.getElementById("birdimg");
    let gamecontext = gamecanvas.getContext("2d");
    let gamex = 400;
    let gamey = 400;
    let birdy = 200;
    let birdylast = birdy;
    let loose = 0;
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp' && loose == 0) {
            birdy-=20;
        }
    });
    let timerId = setInterval( function (){
        gamecontext.clearRect(150, birdylast, 100, 100);
        birdylast = birdy;
        var my_gradient = gamecontext.createLinearGradient(0, 0, gamex, gamey);
        my_gradient.addColorStop(0, "blue");
        my_gradient.addColorStop(1, "white");
        gamecontext.fillStyle = my_gradient;
        gamecontext.fillRect(0, 0, gamex, gamey);
        gamecontext.drawImage(birdimg,150,birdy,100,100);
        birdy +=5;
        if(birdy >= gamey-100 || birdy <= 0){
            birdy -=5;
            loose = 1;
        }
    }, 100);
});
