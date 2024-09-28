// var arr=['a','b','c'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// to check arrary presnet os not

                        // console.log(arr.includes('t'))
                        // console.log(arr.includes('b'))

                // function guest(){
                //     let name1=prompt("Enter your name ")
                //     let invite=arr1.includes(name1);
                //     if(invite==true){
                //         alert("you are invited")
                //     }
                //     else{
                //         alert("you are not invited")
                //     }
                // } 
                // var arr1=['ajay','raushan','ansh','bharti']; 
                // guest(arr1);

//leap year challenge

                // function leapYear(year){
                //     if(year%4==0 && year%100!=0 || year%400==0){
                //         console.log("this is a leap year");
                //         }
                //         else{
                //            console.log("this is not a leap year");
                //         }
                //     }


                //             leapYear(2000);
                //             leapYear(1999);


//   Random friend given the party

                // let friends=['ajay','raushan','ansh','ashish'];
                // function party(){
                //     let p=Math.floor(Math.random()*friends.length);
                //     alert(friends[p] + " party de rha hai.");

                // }

// party(friends);

// while loop
            // let i=0;
            // while(i<10){
            //     console.log(i);
            //     i++;
            // }
// 2 table in while loop
            // let i=1;
            // while(i<=10){
            //     console.log(i*2);
            //     i++;
            // }
// string in while loop
           
            // let str="ajay";
            // let i=0;
            // while(i<str.length){
            //     console.log(str[i]);
            //     i++;
            // }

            // let a=1;
            // while(a<=20){
            //     if(a%4==0){
            //         console.log(a);
            //         }
            //         a++;
            //     }


    // for loop
                // let i=0;
                // for(i=0;i<10;i++){
                //     console.log(i);
                // }


    // 3 table in for loop
                // let i=1;
                // for(i=1;i<=10;i++){
                //     console.log(i*3);
                // }

                // let str='abcdefgh'
                // let i=0;
                // for(i=0;i<str.length;i+=2){
                //     console.log(str[i]);
                //     }


                // let p=1;
                // for(p=1;p<=10;p=0){
                //     console.log(p);
                //     }
                
    // fizz and buzz
            // let i=1;
            // while(i<=100){
            //     if(i%3==0 && i%5==0){
            //         console.log('fizzbuzz');
                
            //         }
            //     else if(i%3==0){
            //         console.log('fizz');
            //         }
            //     else if(i%5==0){
            //         console.log('buzz');
            //         }
            //     else{
            //         console.log(i);
            //          }
            //         i++;
            // }
                    
        
    // vowel and consonat
                // let str='hello world';
                // let i=0;
                // for(i=0;i<str.length;i++){
                //     let ch=str[i];
                //     if(ch=='a' || ch=='e' || ch=='i' || ch== 'o' || ch=='u'){
                //         console.log(ch,'is a vowel');
                //         }
                //     else{
                //         console.log(ch,'is a consonant');
                //         }
                        
                // }


//     function person(arr){
//         for(i=0;i<=arr.length;i++){
//             for(j=1;j<=arr.length;j++){
//                 if(arr[i]+arr[j]==0){
//                     console.log(arr[i],arr[j]);
//             }
//         }
//     }
// }
// person([-5,-4,-3,-2,-1,0,1,2,3,4]); 


// count repeat number element in one word

            let arr=[1,1,2,2,3,4,4,5,6,6,7,7,9,9];
            let count=0;
            let i=0;
            for(i=0;i<arr.length;i++){
                if(arr[i]!=arr[i+1]){
                    count++;
                }
            }
            console.log(count);

