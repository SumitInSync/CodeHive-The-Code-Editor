function run(){
    let htmlCode  = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" +  cssCode.value + "</style>";

    // make js code usable
    output.contentWindow.eval(jsCode.value);

}

// fucntion myfunction(){
//     document.getElementById("color").style.backgroundColor = "black";
// }