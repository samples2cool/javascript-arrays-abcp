var chocolateBars =["snickers","hundred grand","kitkat","skittles"];
function chocolateBars(array,element){
  return("element");
}
chocolateBars.push("addElementToBeginningOfArray");
[...chocolateBars,"Skittles"]
function addElementToBeginningOfArray(myarray,element){
  return([element,...myarray])
}
function removeElementFromEndOfArray(myarray,element){
  return([...element,myarray])
}