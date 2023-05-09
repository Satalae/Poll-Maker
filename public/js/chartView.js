const homepageRedirect = () => {
    document.location.replace('/homepage');
};

document.querySelector('.back-button').addEventListener('click', homepageRedirect);
