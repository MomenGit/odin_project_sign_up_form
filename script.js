const pwd = document.getElementById('pwd');
const confirmPwd = document.getElementById('confirm-pwd');
const pwdError = document.querySelector('.pwd-container .error');

confirmPwd.addEventListener('input', (event) => {
  if (pwd.value !== confirmPwd.value) {
    const validityMsg = '* Passwords do not match';
    pwdError.textContent = validityMsg;
    confirmPwd.setCustomValidity(validityMsg);
    pwd.setCustomValidity(validityMsg);
  } else {
    pwdError.textContent = '';
    confirmPwd.setCustomValidity('');
    pwd.setCustomValidity('');
  }
});
