function calculate(setNumber1, number1, operator, number2) {
  switch (operator) {
    case "+":
      setNumber1(parseFloat(number1) + parseFloat(number2));
      break;
    case "-":
      setNumber1(parseFloat(number2) - parseFloat(number1));
      break;
    case "*":
      setNumber1(parseFloat(number1) * parseFloat(number2));
      break;
    default:
      setNumber1(parseFloat(number2) / parseFloat(number1));
      break;
  }
  return setNumber1;
}
export default calculate;
