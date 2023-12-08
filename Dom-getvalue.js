var section=document.getElementById("text")

function font() {
    var content = document.getElementsByClassName("content")[0];
    var para = document.getElementById("size");

    var fontSize = parseFloat(para.value);
    if (!isNaN(fontSize)) {
        content.style.fontSize = fontSize + "px"|| +"%";
    } else {
        console.error("Invalid font size");
    }
}