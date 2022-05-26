function sameCase(a, b){
  let regex =/[a-z]/;
  let regex2 = /[A-Z]/;
  let regex3 = /[^A-Z]/ig;
 if (a.match(regex) && b.match(regex) || (a.match(regex2) && b.match(regex2))) {
   return 1;
 }
  else if (a.match(regex3) || b.match(regex3)){
  return -1;}
  else if (a.match(regex) || b.match(regex)) {
   return 0;
 }
}
