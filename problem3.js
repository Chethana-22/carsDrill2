// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
//Execute a function to Sort all the car model names into alphabetical order and 
//log the results in the console as it was returned.

export function sortCars(inventory){
    inventory.sort((a,b) => {
        let carModelA = a.car_model.toLowerCase();
        let carModelB = b.car_model.toLowerCase();
        if(carModelA > carModelA){
            return 1;
        }
        if(carModelA < carModelB){
            return -1;
        }
        return 0;
    } )

    return inventory;
}