
  
//  //filter ke question 

// let arr=[1,2,3,4,5,6]          // //question=1
// function filter1() {
// let result=arr.filter((ele)=>ele%2==0)  
// return result  
// }
// console.log(filter1());


 
// let arr=[-3,4,-1,6,-7,9]         // // question =2
// function filter2(arr) {
// let result=arr.filter((ele)=>ele>0)    
// return result
// }
// console.log(filter2(arr));




// let arr =["apple", "banana", "cat", "strawberry"];   // // question 3
// function filter3(arr) {
//     let result=arr.filter((ele)=>ele.length>5)
//     return result
// }

// console.log(filter3(arr));


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];           // // question=4
// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true;
// }
// function prime(arr) {
//     let primes = arr.filter(isPrime);
//     console.log(primes);
// }
// prime(arr);



// let arr=[{name: "Alice", age: 17}, {name: "Bob", age: 20}];    // // question =5
// function filter5(arr) {
//     let result=arr.filter((ele)=>ele.age>18)
// return result
// }
// console.log(filter5(arr));




// // map ke question

// let arr=[1,2,3]         // // question=1
// function map1(arr) {
//     let result=arr.map((ele)=>ele*2)
//     return result
// }
// console.log(map1(arr));


// let arr=[0,25,100]         // // question=2
// function temperatures(arr) {
//     let result=arr.map((ele)=>(ele*9/5)+32)
//     return result
// }

// console.log(temperatures(arr));


// let arr=[{name: "Alice", age: 25}, {name: "Bob", age: 30}]    // // question=3
// function map3(arr) {
//     let result=arr.map((ele)=>ele.name )
//     return result
// }

// console.log(map3(arr));


// let  arr=["hello", "world"]     // // question=4
// function map4(arr) {
//     let result=arr.map((ele)=>ele.toUpperCase())
//     return result
// }
// console.log(map4(arr));


// let arr=[2,3,4]           // //question=5
// function map5(arr) {
//     let result=arr.map((ele)=>ele*ele)
//     return result
    
// }

// console.log(map5(arr));



// // foreach ke question 


// let arr=["apple", "banana", "cherry"];     // // question =1
// function foreach1(arr) {
//  arr.forEach((ele)=>console.log(ele))
// }
// foreach1(arr)


// let arr=[1,2,3,4]       // // question=2
// let sum=0
// function foreach2(arr) {
//     arr.forEach((ele)=>console.log(sum+=ele) )
// }
// foreach2(arr)



// let arr=[1,2,3,4,6]        // // question =3
// let count=0
// function foreach3(arr) {
//     arr.forEach((ele)=> {if (ele%2==0) {
//         count++;   
//     }}) 
//     console.log(count);
// }
// foreach3(arr)



// let arr=[{item: "apple", price: 100}, {item: "banana", price: 50}]    // //    question=4
// function discount(arr) {
//     arr.forEach((ele)=>{
//         let a=ele.price-ele.price*0.1;
//         console.log({item:ele.item,price:a});
        
//     })
    
// }
// discount(arr)



// let arr=["hello", "world"];           // // question=5
// function foreach5(arr) {
//     arr.forEach((ele)=>console.log(ele+"!"))
// }
// foreach5(arr)















function check(a) {
//     if (a<2) return false
    
// for (let i = 2; i < a; i++) {
//     if (a%i==0) {
//         return false
//     }
// }
//     return true
// }


// console.log(check(9))


// let str="hello Javascript"
// let str2=""
// function revese(str) {
//         for (let i =str.length-1; i >=0; i--) {
        
//             str2 +=str[i]
//         }
//     console.log(str2);
    
    
//     }
    
//     revese(str)
    



    // function first(a) {
    //     if(a===1  || a===0) return 1
    //     return a * first(a-1);
    
    // }
        
    
    
    // console.log(first(5));




// let arr=[1,2,3,4,5]
// let res=0

// function sum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         res+=arr[i]
//     }
// console.log(res);

// }
// sum(arr)



// let str="mom"
// res=""

// function checkpailandrome(str) {
//   for (let i = str.length-1; i >=0; i--) {
// res+=str[i]
// }  

// if (str==res) {
//     console.log("yes,it is Palindrome--->",str );
    
// }else{
//     console.log("it is not a Palindrome--->",str);
    
// }

// }

// checkpailandrome(str)