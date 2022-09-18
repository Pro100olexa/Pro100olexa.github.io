let x = [];
name1 = `Petro`
name2 = `матиматика`
let suma = 0;

for(i=0;i<5;i++){
x[i] = Number(prompt(`яка у вас оцінкка?`));
suma = suma + x[i];
}
console.log(`Вітаю ${name1}! У вас 5 оцінок з придмету ${name2}.Остання оцінка - ${x[x.length-1]}`);