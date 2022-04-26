let value = prompt("ENTER PALINDROME");
document.getElementById("check").value = value;

const revValue = () => {
    let input = value.toLowerCase();
    let myRevValue = input.split("").reverse().join("");

    if (myRevValue == input) {
        document.getElementById("demo").innerHTML = "Palindrome";
    }
    else {
        document.getElementById("demo").innerHTML = "Not a palindrome";
    }
}

revValue();