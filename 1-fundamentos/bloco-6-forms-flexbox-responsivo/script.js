let cleanBttn = document.getElementById('clean');
let cleanContainer = document.getElementsByClassName('empty')

function clean(event) {
    event.preventDefault();
}
cleanBttn.addEventListener('click', clearFields)

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }