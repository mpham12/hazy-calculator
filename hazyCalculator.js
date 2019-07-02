function isSkippedValue(value) {
  let skipped = [undefined, ""]
  return skipped.includes(value)
}

function isNumericValue(value) {
  
  return !isNaN(value) && value!== ''
}

function isNothingValue(value) {
  const nothing = [undefined, null]
  return nothing.includes(value)
}


function isAcceptableValue(value) {
  const operators = ['+', '-', '*', '/']
  const type = typeof Number(value)
  
  return type === 'number' || operators.includes(value)
}

function performCalculationStep(firstOperand, operator, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '*':
      return firstOperand * secondOperand
    case '/':
      return firstOperand / secondOperand
    default:
      throw new Error('Invalid input!')
  }
}

module.exports.calculate = function (calculationSteps) {
  var total
  var operator
  

  calculationSteps.forEach(nextCalculationStep => {

    if (!isAcceptableValue(nextCalculationStep)) {
      throw new Error('Invalid input!')
    }

    if (isNothingValue(total) && isNumericValue(nextCalculationStep)) {
      console.log('isNothingValue(total):',(isNothingValue(total)))
      total = Number(nextCalculationStep)

    } else if (isNothingValue(operator) && !isSkippedValue(nextCalculationStep)) {
      operator = nextCalculationStep

    } else if (isNumericValue(nextCalculationStep)) {
      total = performCalculationStep(total, operator, Number(nextCalculationStep))
      operator = null

    } else if (!isSkippedValue(nextCalculationStep)) {
     
      throw new Error('Invalid input!')
    }
  })

  return total
}
