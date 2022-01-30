//method 1
let stringToReverse = "asli"
let firstString = [...stringToReverse].reverse().join("");
console.log(firstString);

//method 2
function reverseString(newString) {
    let reversed = "";
    for (let i of newString){
        reversed = i + reversed;
    }
    console.log(reversed);
}
reverseString("asli");

//method 3
function reverseString2(str) {
    if(str === "")
       return "";
    else 
        return reverseString2(str.substr(1)) + str.charAt(0);
}
console.log(reverseString2("asli"));

//method 4
const reverseString3 = (str) => {
    return str.split("").reduce((reversed,char) => char + reversed, "");
};
console.log(reverseString3("asli"));





