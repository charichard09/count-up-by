
function countUpBy(countTo, countBy ) { 

// Code: 
// const countTo = 30;
// const countBy = 5;
// countBy(countTo, countBy)
// Expected Result: [5, 10, 15, 20, 25, 30]
  let outputArray = []; 

  for (let index = countBy; index <= countTo; index + countBy) {
    outputArray.push(countBy);
  }
  
  return outputArray  //should equal: [5,10,15,20,25,30];

}








countUpBy(30, 5);  //what we should get is [5, 10, 15, 20, 25, 30]

















































// UI Logic
window.addEventListener("load", function() {

  // print output of countUpBy to p element
  const countToNum = 0;
  const countByNum = 0;

  document.getElementById("count-output").innerText = countUpBy(countToNum, countByNum);
});