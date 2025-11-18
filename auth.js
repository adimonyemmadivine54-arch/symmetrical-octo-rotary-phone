// Tab switching
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const message = document.getElementById('message');

loginTab.onclick = () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  message.textContent = "";
};

signupTab.onclick = () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  message.textContent = "";
};

// SIGN UP
signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const pass = document.getElementById('signupPassword').value;

  localStorage.setItem('user', JSON.stringify({email, pass}));
  message.textContent = "Account created! You can now log in.";
  signupForm.reset();
});

// LOGIN
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;

  const saved = JSON.parse(localStorage.getItem('user'));
  if (!saved) return message.textContent = "No account found! Please sign up.";

  if (saved.email === email && saved.pass === pass) {
    localStorage.setItem('loggedUser', email);
    window.location.href = 'home.html';
  } else {
    message.textContent = "Incorrect email or password.";
  }
});
