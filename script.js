const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  
  // 1. Collect data
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // 2. Validation: Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again.");
    return; // Stop the function here
  }

  // 3. Validation: Minimum length (Example)
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // 4. Success Path
  console.log("Proceeding with signup for:", email);

  // Close the Bootstrap Modal
  const modalElement = document.getElementById('signupModal');
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.hide();
  
  alert("Account created successfully!");
  signupForm.reset(); // Clear the form for next time
});