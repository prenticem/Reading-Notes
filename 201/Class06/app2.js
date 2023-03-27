@@ -1,15 +1,13 @@
// Grabbing random number of customers from our min and max
function getRandom(max, min) {
    let random = Math.random() * (max - min) + min;
    
    return random;
}
// Declaring Hours Of Operation as a variable to be reused in constr. function
let hoursofoperation = ["6am","7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const button = document.getElementById("cityName").value




// Defining Constructor Function (Parameters are the info we store uniquely for each object we create from this function)
function cookieStandLocation(min, max, avg, location, hours){
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesperhour= [];
    stand.hoursofoperation = hours;
    // The customer randomizer
    stand.getCustomers = function() {
        return getRandom(this.max, this.min);
    }
    // The cookie math, that pushes the data we have into an array
    stand.getCookies = function getCookies() {
        for (let i = 0; i < this.hoursofoperation.length; i++ ) {
            let cookies = Math.ceil(this.avg * this.getCustomers())
@@ -135,7 +133,24 @@
lima.getCookies();
lima.render();
lima.total();

//lima.hourlytotal();
document.getElementById("buttonclick").addEventListener("click", formLocation);


function formLocation(event){
    event.preventDefault();

    let button = document.getElementById("cityName").value;
    let cookietb = document.getElementById("cookietb");
    const newLocation = cookieStandLocation(1, 20, 6.3, button, hoursofoperation);
    newLocation.getCustomers();
    newLocation.getCookies();
    newLocation.render();
    newLocation.total();


}


//lets add a global function here that sums the cookiesperhour arrays across all locations
@@ -154,7 +169,9 @@ function getHourlySumsForAllLocations(){

    let hourtr = document.createElement("tr");
    let hourth = document.createElement("th");
    document.getElementById("cookietb").append(hourtr)
    let hourft = document.createElement("tfoot")
    document.getElementById("cookietb").append(hourft)
    hourft.append(hourtr)
     hourth.innerHTML = "Total";
     hourtr.append(hourth)
    for (x = 0; x < hoursofoperation.length; x++){
@@ -165,6 +182,7 @@ function getHourlySumsForAllLocations(){
    }
}


 // after we get the hourlySums we want to display them along the bottom row of hour table
let hourlySums = getHourlySumsForAllLocations()
