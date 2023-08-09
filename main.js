const buttons = document.querySelectorAll(".btn");
console.log(buttons);
let btnvalue;
let inputValue = document.querySelector('.inputfield');
const outputContainer = document.querySelector(".outputContainer");
const outputfield = document.querySelector(".outputField");


for(let i = 0; i<buttons.length;i++){

    buttons[i].addEventListener('click',function(){
        btnvalue = buttons[i].getAttribute('data-btnvalue');

        switch(btnvalue){
            case "split":
                spliting();
                break
            case "Reverse":
                reverse();
                break
            case "Length":
                calcLength();
                break
            case "vowel":
                vowel();
                break
            default:
                alert("Happy Hacking");
         }
        }
        
        );}
    


function spliting(){
   let word = inputValue.value.split(" ")
   outputfield.innerText = word;
}

function reverse(){
    let outputString = "";
    for(let i = inputValue.value.length - 1 ; i>=0; i-- ){
        outputString += inputValue.value[i];
    }
    outputfield.innerText = outputString;
}

function calcLength(){
    outputfield.innerText = inputValue.value.length;    
}

function vowel(){
    let vowelCount = 0;
    let otherLetters = 0;
    for (let i = 0; i < inputValue.value.length; i ++){
        letter = inputValue.value[i];
        if(letter === 'a' || letter ==='e' || letter === 'i'|| letter ==='o'||letter ==='u'){
            vowelCount += 1;
        }else{
            otherLetters +=1;
        }
    }
    outputfield.innerText = "Vowel Count: " + vowelCount + " Other Letter:" + otherLetters;

}

