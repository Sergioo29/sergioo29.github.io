/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sergio Silva",
    photo: "images/prof.jpg",
    favoriteFoods: [
        'Rice',
        'Beans',
        'Mac and Cheese'],
    hobbies: [
        'Sleep',
        'Gaming'],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Sao Paulo, SP',
        length: '23 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);
document.getElementById('photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(ff=> {
    let li = document.createElement('dt');
    let le = document.createElement('dd');
    li.textContent = ff.lace;
    le.textContent = ff.lenght;

    document.querySelector('#places-lived').appendChild(li);
    document.querySelector('#places-lived').appendChild(le);

});

console.log(myProfile.placesLived)
