//run node app.js "{[{}{}]}[()]" or "[(])" in command line to check for balanced or not balanced expressions.

// Function to check if brackets are balanced
/**
 * @param {string | any[]} exp
 */
export default function isBalanced(exp)
{
    // Array deque is faster than using Stack class
    let stack = [];

    // Traverse the "exp"
    for(let i = 0; exp.length > i; i++)
    {
        let x = exp[i];

        if (x === '(' || x === '[' || x === '{')
        {
            // Push the element in the stack
            stack.push(x);
            continue;
        }

        /* If current character is not opening bracket, then it must be closing.
            Stack cannot be empty here.
         */

        if (stack.length === 0)
            return false;

        let check;

        switch (x)
        {
            case ')':
                check = stack.pop();
                if (check === '{' || check === '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check === '(' || check === '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check === '(' || check === '{')
                    return false;
                break;
        }
    }
    // Check empty stack
    return (stack.length === 0);
}
