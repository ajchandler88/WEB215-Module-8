var saleItems = 
[
    {
        "name": "American Cheese",
        "regular_price": 2.99,
        "sale_price": 2.49,
        "description": "Fat and Lazy Cheese",
        "department": "Dairy"
    },
    {
        "name": "Whole Milk",
        "regular_price": 3.99,
        "sale_price": 3.24,
        "description": "Milk From a Whole Cow",
        "department": "Dairy"
    },
    {
        "name": "Skim Milk",
        "regular_price": 3.99,
        "sale_price": 3.24,
        "description": "Milk From a Skinny Cow",
        "department": "Dairy"
    },
    {
        "name": "Provolone Cheese",
        "regular_price": 2.99,
        "sale_price": 2.49,
        "description": "Cheese From Prov, Italy",
        "department": "Dairy"
    },
    {
        "name": "Rye Bread",
        "regular_price": 4.99,
        "sale_price": 4.24,
        "description": "Bread Made From Rye",
        "department": "Bread"
    },
    {
        "name": "Wheat Bread",
        "regular_price": 4.99,
        "sale_price": 4.29,
        "description": "Bread Made From Wheat",
        "department": "Bread"
    },
    {
        "name": "White Bread",
        "regular_price": 4.99,
        "sale_price": 4.24,
        "description": "Bread Made From White",
        "department": "Bread"
    },
    {
        "name": "Corn Bread",
        "regular_price": 3.99,
        "sale_price": 3.19,
        "description": "Bread Made From Corn Meal",
        "department": "Bread"
    },
    {
        "name": "Steak",
        "regular_price": 5.36,
        "sale_price": 4.48,
        "description": "Fresh Cow Butt",
        "department": "Meat"
    },
    {
        "name": "Chicken Breast",
        "regular_price": 4.87,
        "sale_price": 4.21,
        "description": "Chicken Ta-Tas",
        "department": "Meat"
    },
    {
        "name": "Chicken Legs",
        "regular_price": 3.74,
        "sale_price": 3.15,
        "description": "Chicken Gams",
        "department": "Meat"
    },
    {
        "name": "Rack of Lamb",
        "regular_price": 7.54,
        "sale_price": 6.89,
        "description": "Lamb Ta-Tas",
        "department": "Meat"
    },
    {
        "name": "Cocoa Koola, 2L",
        "regular_price": 2.67,
        "sale_price": 2.26,
        "description": "Chocolate Koala Drink",
        "department": "Drinks"
    },
    {
        "name": "Orange Drink, 2L",
        "regular_price": 2.54,
        "sale_price": 2.12,
        "description": "Drink the Color of Orange",
        "department": "Drinks"
    },
    {
        "name": "Cyanide",
        "regular_price": 12.59,
        "sale_price": 11.74,
        "description": "Who cares about the price?",
        "department": "Drinks"
    },
    {
        "name": "Lemon Juice",
        "regular_price": 3.45,
        "sale_price": 1.24,
        "description": "Life Gave Em To Ya",
        "department": "Drinks"
    },
    {
        "name": "Dinner",
        "regular_price": 5.84,
        "sale_price": 5.23,
        "description": "Dinner, it's what's for dinner",
        "department": "Frozen"
    },
    {
        "name": "Elsa",
        "regular_price": 98.76,
        "sale_price": 85.32,
        "description": "Let It Go",
        "department": "Frozen"
    },
    {
        "name": "Anna",
        "regular_price": 67.12,
        "sale_price": 32.14,
        "description": "The Other White Meat",
        "department": "Frozen"
    },
    {
        "name": "Your Heart",
        "regular_price": 13.45,
        "sale_price": 11.56,
        "description": "You Know Who I'm Talking To",
        "department": "Frozen"
    }
]

var departments = [
    "Produce", 
    "Bread", 
    "Dairy", 
    "Meat", 
    "Seafood", 
    "Drinks", 
    "Deli", 
    "Frozen"];
var sale = [
    "Dairy",
    "Bread",
    "Meat",
    "Drinks",
    "Frozen"
]

const addSections = () => {
    for(let department of departments){
        if(sale.includes(department)){
            createSection(department);
                for(item of saleItems){
                    if(department == item.department){
                        document.querySelector("#" + department).innerHTML += "<li class='list-unstyled fs-4'>" + item.name + ", was " + item.regular_price + ",<span class='text-success bg-dark'> now " + item.sale_price + "</span><span class='fs-5 text-secondary'><br>Description: " + item.description + "</span></li>"
                    }
                }
        }
    }
    
}


const createSection = (department) =>{
    document.querySelector("#depHeading").innerHTML += "<section id='" + department + "'><h2 class='text-dark bg-none p-1 d-flex mt-4'><a href='#' class='text-decoration-none link-warning'>" + department + " Weekly Ad </a></h2><hr></section>";
}

document.addEventListener("DOMContentLoaded", addSections)