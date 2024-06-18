document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = button.getAttribute('data-value');
      if (value === 'C') {
        clearDisplay();
      } else if (value === '=') {
        calculate();
      } else if (value == 'del') {
        delFromDisplay();
      } else {
        appendToDisplay(value);
      }
    });
  });

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }
  
  function delFromDisplay() {
    display.value = display.value.slice(0,-1);
  }
  
  function calculate() {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      alert('Invalid calculation');
    }
  }
});

