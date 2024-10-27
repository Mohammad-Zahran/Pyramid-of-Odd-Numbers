const number = parseInt(prompt("Enter a number: "));

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j.toString());  
    }
    console.log();  
}
