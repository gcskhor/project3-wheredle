import initGame from './index.js';

const axios = require('axios');

export function createLoginPage() {
  const loginPage = document.querySelector('#login-page');
  loginPage.style.display = 'block';

  const emailDiv = document.querySelector('#login-email-input');
  const passwordDiv = document.querySelector('#login-password-input');
  const loginSubmit = document.querySelector('#login-submit');

  loginSubmit.addEventListener('click', () => {
    axios.post('/login', {
      email: emailDiv.value,
      password: passwordDiv.value,
    })
      .then((response) => {
        if (response.data.message !== 'logging in') {
          const loginAlert = document.createElement('div');
          loginAlert.innerHTML = `
          <div class="alert alert-warning">
            <strong>${response.data.message}</strong>
          </div>`;
          loginPage.appendChild(loginAlert);
        }
        else {
          loginPage.style.display = 'none';
          document.querySelector('#game').style.display = 'block';
          console.log('logging in!!!');
          initGame();
        }
      });
  });
}

const forceLoginPage = () => {
  createLoginPage();
  document.querySelector('#game').style.display = 'none';
};

export function checkUserLogin() {
  console.log('checking user login');
  console.log(document.cookie);
  const cookies = document.cookie.split('; ');
  const userId = cookies
    .find((cookie) => cookie.startsWith('userId'))
    ?.split('=')[1];
  const loginHash = cookies
    .find((cookie) => cookie.startsWith('login'))
    ?.split('=')[1];
  if (userId && loginHash) {
    axios.post('/checkauth', { userId, loginHash })
      .then((response) => {
        if (!response.data.message) {
          forceLoginPage();
        }
        return userId;
      });
  }
  else {
    forceLoginPage();
  }
}
