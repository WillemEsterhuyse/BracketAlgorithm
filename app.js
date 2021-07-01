import isBalanced from "./src/algoritm.js";

let input;
// Removes elements from offset of 0
process.argv.splice(0, 2);
input = process.argv.join(' ')
// Function call
// Check empty or null characters
switch (input) {
    case null:
        console.log("Input is : " + input);
        console.log("Input is empty");
        break;
    case "":
        console.log("Input is : " + input);
        console.log("Input is empty");
        break;
    default:
        console.log("\nHas value\n");
        console.log("Input is : " + input);
        if (isBalanced(input))
            console.log("Balanced \n");
        else
            console.log("\nNot Balanced ");
        break;
}