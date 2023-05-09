const viewChartHandler = async(event) => {
    event.preventDefault();
    const response = await fetch('/homepage/:id', {
        method: 'GET',
        headers: { 'Content-Type': 'applications/json' },
    });
    if(response.ok){
        document.location.replace('/homepage/:id');
    }else{
        alert('Failed to fetch given poll.');
    }
};

document.querySelector('#viewresults').addEventListener('click', viewChartHandler);