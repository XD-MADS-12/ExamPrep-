// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5k6GJxh-FCVYYkhAueURboaoPI3PpwaE",
    authDomain: "examprep-c9599.firebaseapp.com",
    projectId: "examprep-c9599",
    storageBucket: "examprep-c9599.firebasestorage.app",
    messagingSenderId: "1071649554830",
    appId: "1:1071649554830:web:1627cc46fd4f16d40aa4df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements from the HTML
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

// Sign up user
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    messageDiv.innerHTML = 'Sign Up Successful!';
  } catch (error) {
    messageDiv.innerHTML = 'Error: ' + error.message;
  }
});

// Log in user
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    messageDiv.innerHTML = 'Log In Successful!';
    window.location.href = "dashboard.html";
  } catch (error) {
    messageDiv.innerHTML = 'Error: ' + error.message;
  }
});