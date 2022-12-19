export default function calculate(num1, num2, operator) {
   switch (operator) {
     case "+":
       return num1 + num2;
     case "-":
       return num1 - num2;
     case "*":
       return num1 * num2;
     case "/":
       return num1 / num2;
     default:
       throw new Error("Ungültiger Operator");
   }
 }

