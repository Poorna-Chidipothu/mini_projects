const wordCon = document.querySelector("span");
const words = ["Coding", "Dreaming", "Learning","Thinking"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
// Function to type the text one character at a time

const displayText = ()=>{
    const text = words[wordIndex];
    const char = text.substring(0,charIndex);
    wordCon.classList.add("stop-blinking");
    wordCon.innerHTML = char;
    // console.log(char);
    if (!isDeleting && charIndex < text.length){
        charIndex++;
        
        setTimeout(displayText,300);
        
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(displayText,200);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ?  (wordIndex + 1) % words.length : wordIndex;
        wordCon.classList.remove("stop-blinking");
        setTimeout(displayText,1200);
        
    }
}

displayText();