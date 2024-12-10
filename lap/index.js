function fetchData( callback){
  setTimeout(()=>{
    console.log("du lieu da duojc lay");
    callback("du lieu da duoc lay")


  },1000)
}
function processdata(data){
  console.log("xu ly du lieu ",data);
  
}
fetchData(processdata);