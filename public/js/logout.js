// logout handler
const logoutFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
        document.location.replace('/');
        } else {
            alert('failed to logout');
    }
};

//document.querySelector('#logout').addEventListener('click', logoutFormHandler);
