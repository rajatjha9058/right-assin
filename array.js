
// let arr=[2,3,4,1,5,7,6,8]           //ques=1
// for (let i = arr.length; i >0; i--) {
//   console.log(i);
  
  
// }



// let a=[1,5,7,9,4,3,6,8,10,52,42]         //ques=2
// let max=a[0];
// let min=a[0];

// for (let i = 0; i < a.length; i++) {
//   if(a[i]>max){
// max=a[i]
//   }else if(a[i]<min){
// min=a[i]
//   }
  
// }
// console.log(max);
// console.log(min);



// let a=[1,5,7,9,4,3,6,8,10,52,42] ;    //ques=3
// let k=8;

// let b=a.sort((a,b)=>b-a)

// for (let i = 0; i < a.length; i++) {
//   if(a[i]>b){
//     b=a[i]
//       }else if(a[i]<b){
//     b=a[i]
//       }
  
// }
// console.log(b);
// console.log(b[k-1]);



// let a=[1,2,-1,-5,8,9,-3]         //ques=4
// // let b=a.sort((a,b)=>b-a)
// for (let i = 0; i < a.length; i++) {
//   for (let j = a.length; j >i; j--) {
//     if(a[j]>a[j-1]){
// [a[j],a[j-1]]=[a[j-1],a[j]]
//     }
    
//   }
  
// }
// console.log(a);
// // console.log(b);





// let arr5=[8,4,3,2,1];          //ques=5
// let count=0;
// for (let i = 0; i < arr5.length; i++) {
//     for (let j = i; j < arr5.length; j++) {
//         if(arr5[i]>arr5[j]){
//             count++;
//             console.log([arr5[i],arr5[j]]); 
//         }
        
//     }
// }
// console.log(count);



// let a=[4,5,6,7,-2]      //ques=6
// let sum=0
// let max=a[0]
// for (let i = 0; i < a.length; i++) {
//   sum=Math.max(a[i],sum+a[i])
//   max=Math.max(sum,max)
  
// }
// console.log(max);






// let a=[1,2,3,4,5]          //ques=7
// let b=a.sort((a,b)=>b-a)
// let n=3
// console.log(b[n-1]);




// let a=[1,2,3,4,5,8]      //ques=8
// let b=a.length-1
// console.log(a[0]);
// console.log(a[b]);





// let a="abccdffes"     //ques=9
// let d1={}

// for (let i = 0; i < a.length; i++) {
//   if(d1[a[i]]){
//     d1[a[i]]+=1
//   }else{
//     d1[a[i]]=1
//   }
  
// }
// console.log(d1);




// let a="abccdffes"        //ques=10
// let d1={}

// let result=[]
// k=1;
// for (let i = 0; i < a.length; i++) {
//   if(d1[a[i]]){
//     d1[a[i]]+=1

//   }else{
//     d1[a[i]]=1
//   }
  
// }
// for(let key in d1){
//   if(d1[key]==k){
//     result.push(key)
//   }
// }
// console.log(result);

