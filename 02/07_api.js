const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;

const apidiv = document.getElementById("apicall");

const getcoktil = async () => {
  let response = await fetch(URL);
  let mydata = await response.json();
  const datamy = mydata.drinks;

  const body = document.getElementById("apicall");
  const cardHtml = datamy
    .map(
      (data) => `
      
     <div class="card col-xl-6 " style="width: 18rem;">
    <img class="card-img-top" src="${data.strDrinkThumb}" alt="">
    <div class="card-body ">${data.idDrink}
    <h5 class="card-title">${data.strDrink}</h5>
    <p class="card-text ">${data.strInstructions.slice(0, 50)}...</p>
    <a href="#" class="  position-bottom btn btn-primary  ">Go somewhere</a>
    </div>
    </div>
    
    `
    )
    .join("");
  body.innerHTML = cardHtml;
};
getcoktil();
