const query = `
  query { 
    joke {
      joke
      permalink
    }
  }
`;
let counter = 0;
const button = document.createElement("button");
button.innerHTML = "Consult another Dad";
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

function generateJoke() {
counter++;
document.getElementById("consultations").innerHTML = counter + " Dads consulted so far."
fetch(`https://icanhazdadjoke.com/graphql?query=${query}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const { joke, permalink } = data.data.joke;
    window.joke.innerHTML = `
      <blockquote>${joke}</blockquote>
      <cite><a href="${permalink}">Link</a> on icanhasdadjoke.com</cite>
    `;
  });
}

window.onload = function() {
generateJoke()
};

button.addEventListener ("click", generateJoke);