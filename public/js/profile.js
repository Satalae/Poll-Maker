//new poll handler
const newPollHandler = async (event) =>{
    event.preventDefault();
    //get values from new poll form
    const pollQuestion = document.querySelector('#pollname').value.trim();
    //const option1, value trim
    const option1 = document.querySelector('#option1').value.trim();
    //const option2, value trim
    const option2 = document.querySelector('#option2').value.trim();
    //if question, option1, and option2 are not empty, and response is ok, send alert saying
    // poll created and send to profile
    if (pollQuestion && option1 && option2) {
        const response = await fetch('/api/polls', {
            method: 'POST',
            body: JSON.stringify({ pollQuestion, option1, option2 }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('Poll Created');
            document.location.replace('/profile');
        } else {
            alert('Failed to create poll');
        }
    }
}





//edit poll handler
const editPollHandler = async (event) => {
    event.preventDefault();
    //get values from edit poll form
    const question = document.querySelector('#pollname').value.trim();
    //const option1, value trim
    const option1 = document.querySelector('#option1').value.trim();
    //const option2, value trim
    const option2 = document.querySelector('#option2').value.trim();

    //if question, option1, and option2 are not empty, and response is ok, send alert saying
    // poll updated and send to profile
    if (question && option1 && option2) {
        const response = await fetch('/api/polls', {
            method: 'PUT',
            body: JSON.stringify({ question, option1, option2 }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('Poll Updated');
            document.location.replace('/profile');
        } else {
            alert('Failed to update poll');
        }
    }
}


//delete poll handler
const deletePollHandler = async (event) => {
    if (event.target.hasAttribute('poll-id')) {
        const id = event.target.getAttribute('poll-id');
    
        const response = await fetch(`/api/poll/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to delete project');
        }
      }
    };