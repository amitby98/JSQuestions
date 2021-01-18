//JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 

let a = 4;
let b = 0;
let c = -1;

if (a>b) {
    if (a>c) {
       if (b>c) {
        alert (a + "," + b + "," + c);
        }
       else {
        alert (a + "," + c + "," + b)
        }
    } else {
        alert (c + "," + a + "," + b)
    }
}

if (b>a) {
    if (b>c) {
       if (a>c) {
        alert (b + "," + a + "," + c);
        }
       else {
        alert (b + "," + c + "," + a)
        }
    } else {
        alert (c + "," + b + "," + a)
    }
}
   

