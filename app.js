var userInput;
var userName;
userInput = 5;
userInput = "Kareem";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(msg, code) {
    throw {
        msg: msg,
        errorCode: code,
    };
}
generateError("an error ocurred", 500);
