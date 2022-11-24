var userInput;
var userName;
userInput = 5;
userInput = 'text';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an Error has occurred', 500);
