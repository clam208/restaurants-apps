var splitBill = function(){
    // private var
    var totalBill=0;
    var tip=0;
    var people=0;
    // private functions
    //passes parameter into private vars
    function init(val,tipVal,p){
        totalBill = val;
        tip= tipVal;
        people=p;
    }
    // split bill
    function splitBill(){
        return makeBill()/ people;
    }
    // calculates bills by adding tip to the end
    function makeBill(){
    var finalBill=totalBill + calculateTip(totalBill,tip)
     return finalBill.toFixed(2);
    }
    //calculates the tip based on percentage entered by user
    function calculateTip(total,tip){
     switch(tip){
         case 10: 
         return total*.10;
         break;
         case 15:
         return total *.15
         break;
         case 20:
         return total * .20
         break;
         case 25:
         return total * .25
         break;
         default:
         console.log("stingy ");
     }
     return total;
    }
    //public functions
    // takes and displays final bill that was calculated from private functions
   return {
    getBill: function(){
        if (document.getElementById("bill").value=="" || document.getElementById("people").value=="" ){
            alert("please fill in the text boxes");
            document.getElementById("split").innerHTML = "error";
        }
        else{
        document.getElementById("split").innerHTML = splitBill();
        }
    },
     setBill: function(){


var bill= Number(document.getElementById("bill").value);
var radios = document.getElementsByName('optradio');
var people = Number(document.getElementById('people').value);
var tip=0;
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
   tip=Number(radios[i].value);
  break;
 }
}

         return init(bill,tip,people);
}
     
   };
}();

 