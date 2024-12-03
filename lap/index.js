const arr=[1, 2, 3, 4, 5, 6]


//chuyen mang thanh gia tri x2
function convertArray(array){
      return array.map(num=>{
        return num*2// Excutation
    })
}
console.log(convertArray(arr)); 