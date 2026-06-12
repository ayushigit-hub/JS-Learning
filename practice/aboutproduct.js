const product = {
    productName: "Keyboard",
    productPrice: 1989,
    productCategory: "Electronics",
    productStock: 50,
    productBrand: "RedDragon",
    productRating: "5 Stars",
    isAvailable: true,
    productFeatures: ["Swappable", "Vibrant-Lights", "Anti-Ghosting", "FPSGaming"],
    style: {
        Colour: "Pink-LED-BrownSwitch",
        Style_Name: "Pink-LED"
    }
}


// Accessing 
console.log(product.productFeatures)
console.log(product["style"])

// Modifying
product.productStock = 45
console.log(product)

// New Properties
product.isSafe = true
console.log(product)

// Array mai value 
product.productFeatures.push("Good")
console.log(product)

// nested object mai se value access
console.log(product.style.Style_Name)