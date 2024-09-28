   let arr=[1,1,2,2,3,4,4,5,6,6,7,7,9,9];
            let count=0;
            let i=0;
            for(i=0;i<arr.length;i++){
                if(arr[i]!=arr[i+1]){
                    count++;
                }
            }
            console.log(count);

