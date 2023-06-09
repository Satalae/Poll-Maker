// logout handler
const logoutFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout',{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log("logout successful!");
        document.location.replace('/');
        } else {
            alert('failed to logout');
    }
};

document.querySelector('.logout').addEventListener('click', logoutFormHandler);
