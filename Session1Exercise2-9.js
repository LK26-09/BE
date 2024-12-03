/* // excercise 2
function findMax(arr){
    var result
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            result=arr[i+1]
            i++
        }
        else {
            result=arr[i]
            i++
        }
    }
    return result
}
console.log(findMax([10,20,30,5]))
 */


/* // exercise 3 
function filterEvenNumbers(arr){
    var result=[]
    for(let i=0;i<=arr.length-1;i++){
        
        if((arr[i]%2)==0){
            result.push(arr[i])
        }
      
    }
    return result
}
console.log(filterEvenNumbers([1,2,3,4,5,6])) */

/* //exercise 4
function countOccurrences(arr,value){
    var result=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            result+=1
        }
    }
    return result
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)) */

/* //exercise 5
function reverseArray(arr) {
   var result=[]
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result
  }
  console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1] */

/*   //exercise 6
  function removeDuplicates(arr) {
    for(let i=0;i<arr.length-1;i++){
       for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice (j,1)
        }
       }
    }
    return arr
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
   */
  
/*   //exercise 7
function sortArrayAscending(arr) {
    let temp;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
  }
  console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9] */

   /*  //exercise 8
    function findMostFrequent(arr) {
      var curent=1
      var result=[]
        for(let i=0;i<arr.length;i++){
            let count=1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]=arr[j]){count+=1}
        }
        if(count>result){
            curent=count
            result=arr[i];
        }
       }
       return result
      }
      console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2 */
         
    /*   //exercise 9
      function mergeAndRemoveDuplicates(arr1, arr2) {
       var arraynew=arr1.concat(arr2)

       for(let i=0;i<arraynew.length-1;i++){
        for(let j=i+1;j<arraynew.length;j++){
         if(arraynew[i]==arraynew[j]){
             arraynew.splice (j,1)
         }
        }
     }
     return arraynew
      }
      console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4] */
      
    //exercise 10
    function isSymmetricArray(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false; 
            }
        }
        return true;
      }
      console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
      console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
      