let count=0;

function change(num){
    count+=num;
    document.querySelector(".zero").innerHTML=count;   
}

function reset() {
    count=0;
    document.querySelector(".zero").innerHTML=count; 
}