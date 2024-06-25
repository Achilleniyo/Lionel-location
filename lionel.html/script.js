document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var location = document.getElementById("location").value;
    var date = document.getElementById("date").value;

    // Effectuer une requête AJAX pour récupérer les résultats de la recherche
    // et les afficher dans la div "results"
    // Exemple :
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Resultats pour " + location + " le " + date;
  });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Envoyer les données à un serveur ou effectuer d'autres actions
    // Ici, nous affichons simplement les valeurs dans la console
    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Message :", message);

    // Réinitialiser le formulaire
    document.getElementById("contact-form").reset();
  });
var cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: 25000,
  },
  {
    brand: "Honda",
    model: "Civic",
    year: 2020,
    price: 22000,
  },
  {
    brand: "Ford",
    model: "Mustang",
    year: 2019,
    price: 35000,
  },
];

var carList = document.getElementById("car-list");

cars.forEach(function (car) {
  var carElement = document.createElement("div");
  carElement.classList.add("car");

  var carTitle = document.createElement("h3");
  carTitle.textContent = car.brand + " " + car.model;
  carElement.appendChild(carTitle);

  var carInfo = document.createElement("p");
  carInfo.textContent =
    "Year: " + car.year + " | Price: $" + car.price.toLocaleString();
  carElement.appendChild(carInfo);

  carList.appendChild(carElement);
});
