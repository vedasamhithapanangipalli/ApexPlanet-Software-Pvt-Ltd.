document.getElementById('fetchJokeBtn').addEventListener('click', fetchJoke);

function fetchJoke() {
    const jokeText = document.getElementById('jokeText');
    
    // Fetch data from a joke API
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            // Display the joke
            jokeText.innerHTML = `${data.setup} - <strong>${data.punchline}</strong>`;
        })
        .catch(error => {
            jokeText.innerHTML = "Oops! Something went wrong. Please try again later.";
            console.error('Error fetching joke:', error);
        });
}
