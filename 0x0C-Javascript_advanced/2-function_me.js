//Closure function

function welcomeMessage(fullName) {

    function displayFullName() {
        alert(`Welcome ${fullName}`);
    }
    return displayFullName;
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
