const indexJson = "./index.json";
const getData = fetch(indexJson)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    let currentArr = json[0];
    currentArr.map((x) => {
      let currentObj = x;
      console.log(currentObj["img"]);
      $(`.grid-contain`).append(`<div class="card" style="width: 18rem">
      <img src="${currentObj["img"]}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${currentObj["title"]}</h5>
        <h6 class="card-title">Price: ${currentObj["price"].toLocaleString(
          "en-US"
        )}$</h5>
        <p class="card-text">
          ${currentObj["info"]}
        </p>
        <a href="#" class="btn btn-primary">Rent</a>
      </div>
    </div>`);
    });
  });
