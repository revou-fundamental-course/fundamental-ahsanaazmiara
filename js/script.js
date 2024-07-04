function validateForm() {
  let name = document.querySelector('#nama').value;
  let dob = document.querySelector('#tanggal').value; // dob stands for date of birth

  // Get current time
  let currentDate = new Date();
  let time = currentDate.toLocaleTimeString(); // Format time for user's locale

  // Get gender (assuming only two options are selected)
  let gender = "";
  if (document.getElementById('male').checked) {
    gender = "Laki-Laki";
  } else if (document.getElementById('female').checked) {
    gender = "Perempuan";
  }

  // Get message
  let message = document.querySelector('textarea[name="messages"]').value;

  // Validate if all fields are filled
  if (name != '' && dob != '' && message != '') {
    // Build the output string
    let output = `<b>Current Time:</b> ${time}<br>`;
    output += `<b>Nama:</b> ${name}<br>`;
    output += `<b>Tanggal Lahir:</b> ${dob}<br>`;
    output += `<b>Jenis Kelamin:</b> ${gender}<br>`;
    output += `<b>Pesan:</b> ${message}`;

    // Display the output in the result div
    document.querySelector('#result').innerHTML = output;
  } else {
    alert('Inputan ada yang kosong');
  }
}

// Function to get the user's name
function getUserName() {
  // Replace prompt() with your preferred method for obtaining the user's name
  let userName = prompt("Please enter your name:");
  return userName;
}

// Get the user's name and update the span element
let userName = getUserName();
document.getElementById("userName").textContent = userName;