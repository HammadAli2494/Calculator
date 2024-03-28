let show = document.getElementById('display');

function insertValue(value){
    show.innerText+=value;
}

function clearD(){
    show.innerText="";
}

function delValue(){
    let newDisplay = show.innerText.slice( 0, show.innerText.length - 1);
    show.innerText = newDisplay;
}

function solution(){
    let solution=eval(show.innerText)
    show.innerText=solution;
}