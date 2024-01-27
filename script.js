const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke1");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "mUiXKYaFrVmlu65PydZsMQ==s3JGn51tltatEbZT",
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function joke() {
  let joke11 = document.createElement("span");
  const response = await fetch(apiURL, options); //2ND parameter should be an object so { }

  const parsedResponse = await response.json();

  // joke11.innerText=""
  jokeEl.innerText = "";

  joke11.innerText = parsedResponse[0].joke;
  jokeEl.append(joke11);
}

btnEl.addEventListener("click", joke);
