/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Sergio Silva";
let currentYear = 2024;
let profileName = "images/prof.jpg";    



/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profileName);
imageElement.setAttribute('alt', `Profile image of your boi ${fullName}`);





/* Step 5 - Array */
let favoriteFoods = ["rice", "beans", "mac n cheese"];
foodElement.textContent = favoriteFoods;
let moreFood = "Taco Bell";
favoriteFoods.push(moreFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;










