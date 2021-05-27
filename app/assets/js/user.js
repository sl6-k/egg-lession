/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
function login() {
  // eslint-disable-next-line no-undef
  fetch('/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'admin',
      pwd: 'admin',
    }),
  }).then(res => {
    location.reload();
  });
}

function loginOut() {
  // eslint-disable-next-line no-undef
  fetch('/loginOut', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(res => {
    location.reload();
  });
}
