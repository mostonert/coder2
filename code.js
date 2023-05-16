# coder2
js/ snake
// Функция для добавления символа в поле ввода
function appendToInput(value) {
  document.getElementById('input').value += value;
}

// Функция для вычисления результата
function calculate() {
  const input = document.getElementById('input').value;
  const result = eval(input); // Используем eval() для вычисления значения строки
  document.getElementById('input').value = result;
}

// Функция для очистки поля ввода
function clearInput() {
  document.getElementById('input').value = '';
}
