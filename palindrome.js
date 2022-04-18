let value = 121;

const revValue = () =>{

    let myRevValue = value.toString().split("").reverse().join("");
    console.log( myRevValue);
    
    if(myRevValue == value){
        console.log("palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}

revValue();