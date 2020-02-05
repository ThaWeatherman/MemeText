function memeify() {
    var text = document.getElementById("usertext").value;
    // apply algo
    text = text.toLowerCase();
    var new_text = "";
    for (var i = 0; i < text.length; i++) {
        if (i % 2 != 0) {
            new_text += text[i].toUpperCase();
        }
        else {
            new_text += text[i];
        }
    }
    document.getElementById("output").value= new_text;
}