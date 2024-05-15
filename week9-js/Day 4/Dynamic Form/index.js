function addField() {
  const input = document.createElement("input");
  input.type = "text";

  const form = document.querySelector("#dynamicForm");
  form.appendChild(input);
}

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;

  let message = "";

  // Iterate through each input field
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
    }
    message += `${input.value}\n`;
  });

  if (!allFilled) {
    alert("Please fill all fields.");
  } else {
    alert(`Entered values:\n${message}`);
  }
}

document
  .querySelector("#dynamicForm button:first-of-type")
  .addEventListener("click", addField);
document
  .querySelector("#dynamicForm button:last-of-type")
  .addEventListener("click", submitForm);
