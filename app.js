// for (let i=0; i <100; i++) console.log(100);

function log(number) {
    for(let i =1; i<= number; i++){
        if(i % 3 === 0 && i % 5 ===0)
        console.log("Fizz & Buzz");
    else if (i % 3 == 0)
    console.log("Fizz")
else if (i % 5 === 0)
console.log ("Buzz")
else console.log(i)
}   
}
// Prime time//
//What i need to do//
/*
1.decalre an arbitrary number()
2.create loops that starts at and counts until it finds a prime number.
3.after it finds prime number, log that # and exit loop.
4.don't set n too large , loop will take long to start.
5.use if  else loops for this problem, since yevery number it counts its either yes for odd and no for even.
6.if n =3, the next number it should be logging would be 5. although it would count 4,
and say falso to continue counting.
7.
*/
let n = 3;

/*feeling loopy*/
/* what to do?
1.store each cell of data in its own variable
2.a comme should indicate that we are moving to a new cell
3.each row of data should be logged/stores on its own
4."\r\n" should indicate we are starting on new row below.
5.what has been given?
6.only 4 cells per row.
7.only escaped character is "\n"
8.use this example to test code " console.log(cell1, cell2, cell3, cell4);"
9.input this string and run program "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066
10.\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138
11.\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174
12.\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205
13.\n10,4.41,0.238,0.232"
*/
