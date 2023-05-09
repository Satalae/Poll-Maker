//login handler function
const loginFormHandler = async (event) => {
    event.preventDefault();

    //get values from login feild
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //if username and password are not empty, and response is ok, send to profile page
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to log in');
        }
    }
};



//create account handler
const createAccountHandler = async (event) => {
    event.preventDefault();
// const username  value trim
    const username = document.querySelector('#username-signup').value.trim(); 
//const password, value trim
    const password = document.querySelector('#password-signup').value.trim();

//if username and password are not empty, and response is ok, send to profile page
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.status === 200) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to create account');
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


document
    .querySelector('.createaccount-form')
    .addEventListener('submit', createAccountHandler);
     

//else send alert saying account not created
