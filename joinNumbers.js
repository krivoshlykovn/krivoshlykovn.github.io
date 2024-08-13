const joinNumbersFromRange = (start,finish) => {
  let result = '';
  while(start!==finish+1){
    result+=String(start);
    start+=1;
  }
  return result;
}
console.log(joinNumbersFromRange(2,10))


