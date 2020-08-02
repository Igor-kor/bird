document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
    let gamecanvas = document.getElementById("gamecanvas");
    let birdimg = document.getElementById("birdimg");
    let tubeimg = document.getElementById("tubeimg");
    let tubeimgup = document.getElementById("tubeimgup");
    let gamecontext = gamecanvas.getContext("2d");
    let gamex = 400;
    let gamey = 400;
    let birdy = gamey/2;
    let birdylast = birdy;
    let loose = 0;

    let tubex = gamex - 100;
    let tubey = gamey / 2;
    let up = 0;
    let total = 0
    let countdown = 0;
    document.addEventListener('keydown', function (event) {
        if (event.code == 'ArrowUp' && loose == 0) {
            if(countdown < 3)up += 30;
            countdown++;
        }
        if (event.code == 'Enter' && loose == 1) {
            loose = 0;
            tubex = gamex - 100;
            tubey = Math.random() * 400;
            if(tubey < 50)tubey = 50;
            birdy = gamey/2;
            total = 0;
            up = 0;
            countdown = 0;
        }
    });
    document.addEventListener('keyup', function (event) {
        if (event.code == 'ArrowUp' && loose == 0) {
            up = 0;
            countdown = 0;
        }
    });
    let timerId = setInterval(function () {
        if(loose != 1){
            birdylast = birdy;
            birdy -= up;
            var my_gradient = gamecontext.createLinearGradient(0, 0, gamex, gamey);
            my_gradient.addColorStop(0, "blue");
            my_gradient.addColorStop(1, "white");
            gamecontext.fillStyle = my_gradient;
            gamecontext.fillRect(0, 0, gamex, gamey);
            gamecontext.drawImage(birdimg, 50, birdy, 100, 100);
            gamecontext.drawImage(tubeimg, tubex, tubey, 100, 400);
            gamecontext.drawImage(tubeimgup, tubex, 0, 100, tubey - 50);
            gamecontext.font = "bold 20px sans-serif";
            gamecontext.textBaseline = "top";
            gamecontext.fillStyle = "black";
            gamecontext.fillText("Total: "+total, 300, 0);
            birdy += 10;
            tubex -= 10;
            if (birdy >= gamey - 50 || birdy <= 0) {
                loose = 1;
            }
            if((birdy > tubey || birdy < tubey-90) && (tubex < 120 && tubex > 0) ){
                loose = 1;
            }
            if (tubex <= 0) {
                tubex = gamex - 100;
                tubey = Math.random() * 400;
                if(tubey < 50)tubey = 50;
                total++;
            }
        }else{
            gamecontext.font = "bold 40px sans-serif";
            gamecontext.textBaseline = "middle";
            gamecontext.fillStyle = "black";
            gamecontext.fillText("GAME OVER", 80, gamey/2);
            gamecontext.font = "bold 20px sans-serif";
            gamecontext.fillText("press Enter", 140, gamey/2+40);
        }

    }, 100);
});
