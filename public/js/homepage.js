const viewChartHandler = async (event) => {
    event.preventDefault();

    // get the poll id from the data-id attribute on the #viewresults element
    const pollId = event.target.getAttribute('data-id');

    // fetch data from /api/homepage/:id
    const response = await fetch(`/api/homepage/${pollId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // if the fetch request is successful, redirect to /chart/polls/:id
        document.location.replace(`/chart/polls/${pollId}`);
    } else {
        alert('Failed to fetch given poll.');
    }
};

// Get all the view results buttons
const viewResultsButtons = document.querySelectorAll('.viewresults');

// Add event listener to each button
viewResultsButtons.forEach(button => button.addEventListener('click', viewChartHandler));
