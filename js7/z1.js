//let mass = [1,56,43,13,29]

//console.log(mass.indexOf(2));
let pass = 4356;
let x = 3;
for(i=0;i<3;i++){
    ;
    if(pass == Number(prompt(`Введіть ваш пароль у вас залишилося ${x} спроби`)) ){
alert(`Yes`)
break;
    }else{
x--;
    }
    alert(`NO`)
    if(x == 1)
    alert(`перші цифри 43`)
}
