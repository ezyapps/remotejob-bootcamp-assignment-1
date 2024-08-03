let msg="Hello world"

var btnKeyGenerate = document.getElementById("generateKeyBtn");
var secretKeyPlaceholder = document.getElementById("keyPlaceholder");
var pinLabel = document.getElementById("pinLabel");
const msgSuccess = document.getElementById("messageLabelSuccess");
const msgError = document.getElementById("messageLabelError");
const numPadDivs = document.querySelectorAll(".num-pad div");
msgSuccess.style.display = "none";
msgError.style.display = "none";

var secretKey = "";
var inputKey = "";
btnKeyGenerate.onclick = function() { 
    do{
        secretKey = Math.floor(Math.random()*999999)+'';
    } while(secretKey.length!=6);
    secretKeyPlaceholder.innerText = secretKey;
 };

numPadDivs.forEach((div) => {
  div.addEventListener("click", function () {
    var dataValue = this.getAttribute("data-value");
    switch (dataValue) {
        case "submit":
            if(secretKey === ""){
                alert("Please generate a secret key first");
                return;
            }
            if (secretKey === inputKey) {
              msgSuccess.style.display = "flex";
              msgError.style.display = "none";

            //     document.getElementById("messageLabel").innerHTML = "Secret key has been matched";
            //   document.getElementById("messageLabel").setAttribute("class", "message-success");              
            } else {
              msgSuccess.style.display = "none";
              msgError.style.display = "flex";
            //     document.getElementById("messageLabel").innerHTML =  "Sorry! Secret key did not match";
            //   document.getElementById("messageLabel").className =  "message-error";
            }
            return;
            break;
        case "clear":
            inputKey = "";
            break;
        case "delete":
            inputKey = inputKey.slice(0, -1);
            break;
        default:
            if (inputKey.length < 6) {
              inputKey += dataValue;
            }
            break;
    }
     msgSuccess.style.display = "none";
     msgError.style.display = "none";
    // document.getElementById("messageLabel").innerHTML = "";
    pinLabel.innerHTML = inputKey;
  });
});