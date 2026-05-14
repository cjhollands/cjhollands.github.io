// Bigger button
function makeBigger() {
    // makes font bigger upon click, no more alerts?
    document.getElementById("textInput").style.fontSize = "24pt";
     
}

// Fancy / Boring radio buttons
function applyStyles() {
    let text = document.getElementById("textInput");
    let header = document.getElementById("pageHeader"); // wanted to change the header color without CSS
    alert("Radio button pressed!");

    if (document.getElementById("fancy").checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";

        // header change
        header.style.fontFamily = "Comic Sans MS, cursive";  
        header.style.color = "purple";

    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";

        // header change 
        header.style.fontFamily = "serif";                   
        header.style.color = "black"; 
    }
}

// Moo button
function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    // split sentences by period 
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        // trim space
        let sentence = sentences[i].trim();
        if (sentence.length === 0) continue;

        // Split sentence into words
        let words = sentence.split(" ");

        // Add "-MOO" to the last word
        words[words.length - 1] = words[words.length - 1] + "-MOO";

        // Rebuild the sentence again 
        sentences[i] = words.join(" ");
    }

    // Rejoin sentences with periods
    textArea.value = sentences.join(". ");
}

