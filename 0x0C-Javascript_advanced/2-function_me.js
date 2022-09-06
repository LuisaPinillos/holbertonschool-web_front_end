//Closure function

function welcomeMessage(fullName) {

    return function displayFullName() {
        alert(`Welcome ${fullName}`);
    }
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');