const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page refresh
  
  // Collect data
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const confirmpassword = document.getElementById('confirmPassword').value;

  console.log("Signing up with:", email, password);

  // Close the modal programmatically after success
  const modalElement = document.getElementById('signupModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  modalInstance.hide();
  
  alert("Account created successfully!");
});