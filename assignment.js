
// let mark=65;             //question no=1
// if(mark>=90) {
//     console.log("grade a");

// }else if(mark>80 && mark<89){
// console.log("grade b");

// }else if(mark>70 && mark<79){
// console.log("grade c");

// }else if(mark<70 && mark>=50){
// console.log("grade d");

// }else{
//     console.log("grade f");

// }




//  let a = 5;            //question no =2
//   let b = 5;
//      let c = -5;
//      if(a<0||b<0||c<0){
// console.log("Invalid");
//      }else{
//      if(a==b && b==c && a==c){
// console.log("Equilateral triangle");

//      }else if(a==b&&c>0 ||b==c &&a>0 ||a==c&& b>0){
// console.log("Isosceles triangle.");

//      }else{
//         console.log("Scalene triangle");

//      }
//     }


// let  a=27;              //  question no=3

// if(a%2==0){

//     if(a>50){
// console.log("Even and Large");

//     }else{
//         console.log("Even and Small");

//     }
// }else if(a<30){
// console.log("Odd and Small");

// }else{
//     console.log("Odd and Large");

// }


//   for loop

// for (let i = 1; i<=10 ;i++) {    //question no =1
//     console.log(i*5);

// }


// let n=6;                  // question no =2
//  let sum= 0;

// for (let i = 1; i <=n; i++) {
//     sum+= i;
//     console.log(sum);

// }


// let a=4;             //question no =3

//     for (let  i= 0; i <=a; i++) {        
//         let rowstar="";

//         for (let  j= 1;  j<=i ; j++) {
//             rowstar +=j;
//         }
//         console.log(rowstar);

//     }






// for (let i = 0; i <= 5; i++) {              //    // question=1   

//     let rowstar = "";

//     for (let j = 0; j <= 5-i ; j++) {
//         rowstar += ""
//     }
//     for (let j = 0; j < i; j++) {
//         rowstar += "*"
//     }
//     console.log(rowstar);

// }


// for (let i = 0; i <=5; i++) {            //question no =2

//     let star=""
//     for (let j = 0; j <=i; j++) {

//          star =star+"";     
//         }
//         for (let j = 0; j <5-i; j++) {

//             star+="*";
//     }

//     console.log(star);

// }




// for (let i = 1; i <=9; i+=2) {            //question no =3

//         let star=""
//         for (let j = 9; j>=i; j-=2) {

//              star =star+" ";     
//             }
//             for (let k= 1 ; k <=i; k++) {

//                 star+="*";
//         }

//         console.log(star);

//     }



// let a=5;                         // question no=4
// for (let i = 0; i <=a; i++) {
//     let star="";
//     for (let j = 1; j <=i ;j++){
//         star+=j
//     }
//     console.log(star);

// }



// let a=5;                    // question no =5

// for (let i = 0; i <a; i++) {         
//     let b="";
//     for (let j = 5; j > i; j--) {
//         b +=j
//     }
//     console.log(b);

// }






// let a = 9;

// for (let i = 1; i <= a; i += 2) {            //question no =6
//     let star = ""

//     for (let j = a; j >= i; j -= 2) {

//         star = star + " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         star += "*";
//     }
//     console.log(star);
// }
// for (let i = a - 2; i >= 1; i -= 2) {
//     let row = "";
//     for (let j = a; j >= i; j -= 2) {
//         row += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         row += "*";

//     }
//     console.log(row);
// }