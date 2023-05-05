//login handler function
const loginFormHandler = async (event) => {
    event.preventDefault();

    //get values from login feild
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    //if username and password are not empty, and response is ok, send to profile page
    if (username && password) {
        const response = await fetch(`${process.env.API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            document.location.replace('/profile');
        } else {
            alert('Failed to log in');
        }
    }
};
;





//create account handler

// const username  value trim
 
//const password, value trim

//if username and password are not empty, and response is ok, send alert saying account created and send to profile 

//else send alert saying account not created





