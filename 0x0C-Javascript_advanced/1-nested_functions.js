// This script display three popups one by one with the text:
//Welcome, Welcome Holberton, and Welcome Holberton!

let globalVariable = "Welcome";

function outer() {
    alert(`${globalVariable}`);
    const course = "Holberton";

    function inner() {
        alert(`${globalVariable} ${course}`)
        const exclamation = "!";

        function inception() {
            alert(`${globalVariable} ${course} ${exclamation}`)
        }
        inception();
    }
    inner();
}
outer();
