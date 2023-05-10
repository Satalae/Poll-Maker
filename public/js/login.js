//login handler function
const loginFormHandler = async (event) => {
    event.preventDefault();

    //get values from login field
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    try{
        //if username and password are not empty, and response is ok, send to profile page
        if (username && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.replace('/homepage');
            } else {
                alert('Uh oh');
            }
        }
    } catch(err){
        console.log(err);
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

