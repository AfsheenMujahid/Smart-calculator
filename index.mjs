function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }



class Calculator:
    def __init__(self):
        self.expression = ""

    def append_to_expression(self, value):
        self.expression += str(value)

    def clear_last_input(self):
        if self.expression:
            self.expression = self.expression[:-1]

    def clear_expression(self):
        self.expression = ""

    def evaluate_expression(self):
        try:
            result = eval(self.expression)
            self.expression = str(result)
        except Exception as e:
            self.expression = "Error"

    def get_current_expression(self):
        return self.expression


def main():
    calculator = Calculator()

    while True:
        print("Current Expression:", calculator.get_current_expression())
        user_input = input("Enter a number, operator, or command (b for back, c for clear, = for result): ")

        if user_input.isdigit():
            calculator.append_to_expression(user_input)
        elif user_input in ['+', '-', '*', '/']:
            calculator.append_to_expression(user_input)
        elif user_input == 'b':
            calculator.clear_last_input()
        elif user_input == 'c':
            calculator.clear_expression()
        elif user_input == '=':
            calculator.evaluate_expression()
        else:
            print("Invalid input. Please enter a number, operator, or command.")

if __name__ == "__main__":
    main()
