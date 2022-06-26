let x = 0;

 let name = prompt(`4+5?`);
 if (name == `9`){
	x++;
 }
 if (5 == prompt(`9-4?`)){
	 x++;
 }
let z1 = confirm (`20+5`)
 if (z1 == true){
	 x++;
 }
 let z3 = confirm(`5+4=9?`);
 if (z3 == true){
	 x++;
 }
 let z4 = prompt;
 if (5 == (`10+5`)){
	 x++;
 }
 let z5 = confirm(`11+4=15?`);
if (z5 == true){
	x=x+1.5;
}
let z6 = prompt(`9+6`);
 if (z6 == `15`){
	 x++;
 }
 
 let z7 = prompt(`5+10`);
 if (z7 == `15`){
	 x++;
 }
 
 let z9 = prompt(`7+8`);
 if (z9 == `15`){
	 x=x+5;
 }
 let z10 = prompt(`який зара рік?`);
 if (z10 == `2022`){
	 x=x+2;
 }

 if (x < 6){
	 alert(`ви нездали,Bаші бали ${x} `);
 }else if (x > 6 && x <= 9){
	 alert(`задовільно, Bаші бали ${x}`);
 }else if (x > 9){
	 alert(`it is good, Bаші бали ${x}`);
	 
 }