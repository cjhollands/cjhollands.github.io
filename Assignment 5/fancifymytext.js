// Bigger button
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Fancy / Boring radio buttons
function applyStyles() {
    let text = document.getElementById("textInput");

    if (document.getElementById("fancy").checked) {
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

// Moo button
function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    // Split sentences by period
    let sentences = text.split(".");

    // Add "-MOO" to last word of each sentence
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-MOO";
    }

    // Rejoin sentences with periods
    textArea.value = sentences.join(". ");
}