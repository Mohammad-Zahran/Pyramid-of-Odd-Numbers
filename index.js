const number = parseInt(prompt("Enter a number: "));


for (let i = 1; i <= number; i++) {
    let row = ""; 
    for (let j = 1; j <= i; j++) {
       row += (2 * j - 1).toString(); 
    }
    console.log(row); 
}

/* I used this formula to multiply by two to garantee getting
even number after getting the even number I subtract by 1 
to have an odd number I used this method also in python
*/
