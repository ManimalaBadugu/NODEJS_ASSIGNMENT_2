const readline=require('readline')  
//*create interface for taking a user input from commandline(terminal)*//
const rl=readline.createInterface(process.stdin,process.stdout)
//* taking unput from user*//
rl.question("Please enter your name: ",(name)=>{
    console.log(`Hello ${name}`)
    rl.close()
})