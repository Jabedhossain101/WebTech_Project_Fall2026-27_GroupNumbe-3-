const USERS_KEY = 'hms_admin_users';
const SESSION_KEY = 'hms_logged_admin';

function getUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentAdmin() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function requireAdminAuth() {
  const admin = getCurrentAdmin();
  if (!admin) {
    window.location.href = 'login.html';
    return null;
  }
  const welcomeEl = document.getElementById('adminWelcome');
  if (welcomeEl) {
    welcomeEl.textContent =
      'Logged in as: ' + admin.name + ' (' + admin.email + ')';
  }
  return admin;
}

function logoutAdmin() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutAdmin);
  }

  // Registration Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document
        .getElementById('regEmail')
        .value.trim()
        .toLowerCase();
      const password = document.getElementById('regPassword').value;
      const msg = document.getElementById('authMsg');

      const users = getUsers();
      const exists = users.some(function (u) {
        return u.email === email;
      });

      if (exists) {
        msg.textContent = 'This email is already registered.';
        return;
      }

      users.push({ name: name, email: email, password: password });
      saveUsers(users);
      msg.style.color = '#166534';
      msg.textContent = 'Registration successful! Redirecting to login...';

      setTimeout(function () {
        window.location.href = 'login.html';
      }, 900);
    });
  }

  // Login Form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document
        .getElementById('loginEmail')
        .value.trim()
        .toLowerCase();
      const password = document.getElementById('loginPassword').value;
      const msg = document.getElementById('authMsg');

      const users = getUsers();
      const matched = users.find(function (u) {
        return u.email === email && u.password === password;
      });

      if (!matched) {
        msg.textContent = 'Invalid email or password.';
        return;
      }

      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ name: matched.name, email: matched.email }),
      );
      window.location.href = 'dashboard.html';
    });
  }
});
