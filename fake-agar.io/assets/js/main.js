let area = document.querySelector("#area")
let ball = document.querySelector("#ball")
let speed = 5
let isShiftPressing=false;

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    ball.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

window.addEventListener("keydown",function (e){
    
    if (e.keyCode == 16) {
       isShiftPressing=true ;
    
    }
})
window.addEventListener("keyup",function(e){
    
    if (e.keyCode == 16) {
        isShiftPressing=false;
    
     }
})

window.addEventListener("keydown", function (e) {
    if(isShiftPressing){
        speed=20
    }
    else{
        speed=5
    }
    if (e.keyCode == 39) {
        if(ball.offsetLeft+speed<=area.offsetWidth - ball.offsetWidth){
            ball.style.left = ball.offsetLeft + speed + "px";
        }
        else{
            ball.style.left=area.offsetWidth - ball.offsetWidth+"px";
        }
    }
    
    else if (e.keyCode == 37) {
         if(ball.offsetLeft-speed>=0){
            ball.style.left = ball.offsetLeft - speed + "px";
        }
        else{
            ball.style.left=0+"px";
        }
      
    }
    else if (e.keyCode == 38) {
        if(ball.offsetTop-speed>=0){
        ball.style.top = ball.offsetTop- speed + "px";
        }
        else{
            ball.style.top=0+"px"
        }
    }
    else if (e.keyCode == 40) {
        if(ball.offsetTop+speed<=area.offsetHeight - ball.offsetHeight){
            ball.style.top = ball.offsetTop + speed + "px";
        }
        else{
            ball.style.top=area.offsetHeight - ball.offsetHeight+"px";
        }
    }
   
})
function dotGenerator(){
    for(let i=0;i<200;i++){
        let leftPosition = Math.floor(Math.random()*1000);
        let topPosition = Math.floor(Math.random()*1000);
        let dot = document.createElement('div');
        dot.classList.add('dot')
        dot.style.left=leftPosition;
        dot.style.top=topPosition;
        area.appendChild(dot)

    }
}
dotGenerator()








