
//  111111111
//  111111111
//  111111111
//  111111111
//  111111111
function getSquare(size) {
    let str = "";
  
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        str += "*";
      }
        str += "\n";
    }
    return str;
  }
 
 //  11111111
 //  1      1
 //  1      1
 //  1      1
 //  11111111
 function getEmptySquare(size) {
    let str = "";
  
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
         if (a === 0 || a === size - 1 || b === 0 || b === size- 1) {
   str += "*";
  }else {
  str += ' '; }
       
      }
        str += "\n";
    }
    console.log(str);
  }

//  1
//  11
//  111
//  1111
//  11111
function getTriangle(size) {
    let str = "";
  
    for (let a = 0; a < size; a++) {
      for (let b = 0; b < size; b++) {
        if (b <= a){
          str += "*";
        } else {
          str += " ";
        }
      }str += "\n";
    } console.log(str);
  }

  //  1
  //  11
  //  1 1
  //  1  1
  //  11111
   function getTriangle(size) {
    let str = "";
   
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
         if (j === i || j === 0 || i===size -1) {
   str += "*";
   }else {
   str += ' '; }
      
      }
        str += "\n";
    }
    console.log(str);
   }

   //  11111
   //  1111
   //  111
   //  11
   //  1
   function getTriangle(size) {
       let str = '';

       for(let a = 0; a < size; a++) {
           for (let b = 0; b < size; b++) {
               if (b < a) {
                   str += ' ';
               } else {
                   str += '*';
               }
           } str +='\n';
       } return str;
   }
