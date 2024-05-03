const apiKey = 'a8c244bb';

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const card = document.querySelector(".cards");
async function movie(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Search);
    const arr = data.Search;
    elementUpload(arr);
  } catch (err) {
    console.log(err);
  }
}
function elementUpload(arr) {
  card.innerHTML = "";
  arr.forEach((element) => {
    card.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${element.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.Title}</h5>
          <p class="card-text">${element.Year}</p>
          <p class="card-text">${element.imdbID}</p>
        </div>
        </div>
      `;
  });
}
btn.addEventListener("click", act);
function act() {
  const mov = `http://www.omdbapi.com/?apikey=${apiKey}&s=${inp.value}`;
  console.log(mov);
  movie(mov);
}
act();