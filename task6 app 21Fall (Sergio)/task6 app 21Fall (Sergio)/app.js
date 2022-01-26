/**********************
*    Elemental Mix    *
**********************/
// Sergio da Silva

const elements =
{
    1: 'fire',          // Set up the starting basic elements with numbers for easy access
    2: 'water',
    3: 'wind',
    4: 'earth'
};

let firstElement;
let secondElement;
let mix;  // The user can create a new element mixing two basic elements


//Return the name of the mix
//--------------------------------------------------------------------------------------------//
function elementMixture(firstElement, secondElement)
{
    console.log("Run the mix");
    console.log("The parameters are:")
    console.log(firstElement);
    console.log(secondElement);

    if (firstElement == 1 && secondElement == 1 ) 
    {
        return "Hot Fire";
    };
    if (firstElement == 2 && secondElement == 2 ) 
    {
        return "Wet Water";
    };
    if (firstElement == 3 && secondElement == 3 ) 
    {
        return "Cold Air";
    };
    if (firstElement == 4 && secondElement == 4 ) 
    {
        return "Hard Earth";
    };



    if (firstElement == 1 && secondElement == 2 || firstElement == 2 && secondElement == 1) 
    {
        return "Steam";
    };
    if (firstElement == 1 && secondElement == 3 || firstElement == 3 && secondElement == 1) 
    {
        return "Lightning";
    };
    
    if (firstElement == 1 && secondElement == 4 || firstElement == 4 && secondElement == 1) 
    {
        return "Magma";
    };
    if (firstElement == 2 && secondElement == 3 || firstElement == 3 && secondElement == 2) 
    {
        return "Storm";
    };
    if (firstElement == 2 && secondElement == 4 || firstElement == 4 && secondElement == 2) 
    {
        return "Nature";
    };
    if (firstElement == 3 && secondElement == 4 || firstElement == 4 && secondElement == 3) 
    {
        return "Sand";
    };
    
};

document.querySelector('#h1').textContent = "Select Two Elements Below for the Mixture\n";


// Click Handling -------------------<*-----------------------------------
let fireSymbol = document.querySelector('#fireimage'); 
fireSymbol.addEventListener('click', choiceFire);

let waterSymbol = document.querySelector('#waterimage'); 
waterSymbol.addEventListener('click', choiceWater);

let airSymbol = document.querySelector('#windimage'); 
airSymbol.addEventListener('click', choiceWind);

let earthSymbol = document.querySelector('#earthimage'); 
earthSymbol.addEventListener('click', choiceEarth);


// Basic Element Icons
//********************************************************************** */
document.querySelector('#fireimage').setAttribute('src', 'fire.jpg');
document.querySelector('#fireimage').setAttribute('style', 'width: 170px');
document.querySelector('#fireimage').setAttribute('alt', 'Fire');

document.querySelector('#waterimage').setAttribute('src', 'water.jpg');
document.querySelector('#waterimage').setAttribute('style', 'width: 180px');
document.querySelector('#waterimage').setAttribute('alt', 'Water');

document.querySelector('#windimage').setAttribute('src', 'air.png');
document.querySelector('#windimage').setAttribute('style', 'width: 200px');
document.querySelector('#windimage').setAttribute('alt', 'Wind');

document.querySelector('#earthimage').setAttribute('src', 'earth.png');
document.querySelector('#earthimage').setAttribute('style', 'width: 180px');
document.querySelector('#earthimage').setAttribute('alt', 'Earth');
//************************************************************************ */


document.querySelector('#p1').textContent = "Elements Selected: ";


// Basic Element Choices Logic
//********************************************************************* */
function choiceFire ()
{
        console.log("It saw the click on Fire")
        if (firstElement == undefined){
            console.log("The first one isnt Fire")
            document.querySelector('#p1').textContent += "Fire +";
            firstElement = 1;
        }
        else if (secondElement == undefined){
            console.log("The first one is, but the second isnt")
            secondElement = 1;
            document.querySelector('#p1').textContent += " Fire";
            
        }
        console.log(firstElement);
        console.log(secondElement);
        mix = elementMixture(firstElement, secondElement);
        console.log("The mix result is:")
        console.log(mix);
        showResult();
};

function choiceWater ()
{
    console.log("It saw the click on Water")
     if (firstElement == undefined){
        console.log("The first one isnt Water")
         document.querySelector('#p1').textContent += "Water +";
         firstElement = 2;
        }
        else if (secondElement == undefined){
            console.log("The first is Water, but the second isnt")
            secondElement = 2;
            document.querySelector('#p1').textContent += " Water";
        };
        console.log(firstElement);
        console.log(secondElement);
        mix = elementMixture(firstElement, secondElement);
        console.log("The mix result is:")
        console.log(mix)
        showResult();
};

function choiceWind ()
{
    console.log("It saw the click on Air")
     if (firstElement == undefined){
        console.log("The first one isnt Air")
         document.querySelector('#p1').textContent += "Air +";
         firstElement = 3;
        }
        else if (secondElement == undefined){
            console.log("The first is Air, but the second isnt")
            secondElement = 3;
            document.querySelector('#p1').textContent += " Air";
        };
        console.log(firstElement);
        console.log(secondElement);
        mix = elementMixture(firstElement, secondElement);
        console.log("The mix result is:")
        console.log(mix)
        showResult();
};

function choiceEarth ()
{
    console.log("It saw the click on Earth")
     if (firstElement == undefined){
        console.log("The first one isnt Earth")
         document.querySelector('#p1').textContent += "Earth +";
         firstElement = 4;
        }
        else if (secondElement == undefined){
            console.log("The first is Earth, but the second isnt")
            secondElement = 4;
            document.querySelector('#p1').textContent += " Earth";
        };
        console.log(firstElement);
        console.log(secondElement);
        mix = elementMixture(firstElement, secondElement);
        console.log("The mix result is:")
        console.log(mix)
        showResult();
};
//********************************************************************* */



// Shows the icon for the mix`s result
//*************************************************************************** */
function showResult(){
    console.log("It tried to show the result icon")
    
    if (mix != undefined){
    document.querySelector('#h2').textContent = "Your Elemental Mix Results In:\n";
    document.querySelector("#p2").textContent = mix;  
    }

    //Basics Again
    if (mix == "Hot Fire"){
    document.querySelector('#fire2image').setAttribute('src', 'fire.jpg');
    document.querySelector('#fire2image').setAttribute('style', 'width: 170px');
    document.querySelector('#fire2image').setAttribute('alt', 'Fire');
    }

    if (mix == "Wet Water"){
    document.querySelector('#water2image').setAttribute('src', 'water.jpg');
    document.querySelector('#water2image').setAttribute('style', 'width: 180px');
    document.querySelector('#water2image').setAttribute('alt', 'Water');
    }

    if (mix == "Cold Air"){
    document.querySelector('#wind2image').setAttribute('src', 'air.png');
    document.querySelector('#wind2image').setAttribute('style', 'width: 200px');
    document.querySelector('#wind2image').setAttribute('alt', 'Wind');
    }

    if (mix == "Hard Earth"){
    document.querySelector('#earth2image').setAttribute('src', 'earth.png');
    document.querySelector('#earth2image').setAttribute('style', 'width: 180px');
    document.querySelector('#earth2image').setAttribute('alt', 'Earth');
    }
    //-----------------------------

    if (mix == "Steam"){
    document.querySelector('#steamimage').setAttribute('src', 'steam.png');
    document.querySelector('#steamimage').setAttribute('style', 'width: 170px');
    document.querySelector('#steamimage').setAttribute('alt', 'Steam');
    };


if (mix == "Lightning"){
document.querySelector('#lightningimage').setAttribute('src', 'lightning.jpg');
document.querySelector('#lightningimage').setAttribute('style', 'width: 180px');
document.querySelector('#lightningimage').setAttribute('alt', 'Lightning');
}

if (mix == "Magma"){
document.querySelector('#magmaimage').setAttribute('src', 'magma.png');
document.querySelector('#magmaimage').setAttribute('style', 'width: 200px');
document.querySelector('#magmaimage').setAttribute('alt', 'Magma');
}

if (mix == "Storm"){
document.querySelector('#stormimage').setAttribute('src', 'storm.jpg');
document.querySelector('#stormimage').setAttribute('style', 'width: 180px');
document.querySelector('#stormimage').setAttribute('alt', 'Storm');
}

if (mix == "Nature"){
document.querySelector('#natureimage').setAttribute('src', 'nature.png');
document.querySelector('#natureimage').setAttribute('style', 'width: 200px');
document.querySelector('#natureimage').setAttribute('alt', 'Nature');
}

if (mix == "Sand"){
document.querySelector('#sandimage').setAttribute('src', 'sand.jpg');
document.querySelector('#sandimage').setAttribute('style', 'width: 180px');
document.querySelector('#sandimage').setAttribute('alt', 'Sand');
}
}