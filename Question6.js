//program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 

let david = 80;
let vinoth = 77;
let divya = 88;
let ishitha = 95;
let thomas = 68;
let average = (david + vinoth + divya + ishitha + thomas)/5 

switch (true) {
    case average<60: 
    console.log("F")
    break 
    case average<70: 
    console.log("D")
    break 
    case average<80: 
    console.log("C")
    break
    case average<90: 
    console.log("B")
     break
     case average<100: 
    console.log("A")
    break
    default: break 
};
