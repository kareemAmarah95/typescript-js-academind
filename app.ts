let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Kareem";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(msg: string, code: number): never {
  throw {
    msg: msg,
    errorCode: code,
  };
}

const result = generateError("an error ocurred", 500);
console.log(result);
