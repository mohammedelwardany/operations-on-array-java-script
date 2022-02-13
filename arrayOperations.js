//sum
const array = [2, 3, 5, 7];
var sum = 0;
var multiplication = 1;
var division = 1;

document.write("the sum of:")
for (let i = 0; i < array.length; i++) {
    document.write(array[i] + ",")
    sum += array[i];
}
document.write(" is " + sum + "<br>")

//multiplication


document.write("the multiplication of:")
for (let i = 0; i < array.length; i++) {
    document.write(array[i] + ",")
    multiplication *= array[i];
}
document.write(" is " + multiplication + "<br>")

//division


document.write("the multiplication of:")
for (let i = 0; i < array.length; i++) {
    document.write(array[i] + ",")
    division /= array[i];
}
document.write(" is " + division + "<br>");