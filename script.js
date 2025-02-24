// Alert Me Section
document.getElementById('alertForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById('name').value;
  alert(`Hi ${name}!`);
});

// Change Color Section
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function () {
  const body = document.body;
  if (body.style.backgroundColor === 'blue') {
    body.style.backgroundColor = 'green';
  } else {
    body.style.backgroundColor = 'blue';
  }
});

// Text Tester Section
document.getElementById('textTesterForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  const textInput = document.getElementById('textInput').value;
  const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validation.test(textInput)) {
    alert('Text contains special characters!');
  } else {
    alert('Text is valid!');
  }
});

// Add Text Section
document.getElementById('addTextBtn').addEventListener('click', function () {
  const heading = document.querySelector('h1');
  if (!heading) {
    const newHeading = document.createElement('h1');
    newHeading.textContent = 'Add Text';
    document.body.prepend(newHeading);
  } else {
    heading.textContent += ' Add Text';
  }
});