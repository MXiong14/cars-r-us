const database = {
    paint: [
        {id: 1, color: "silver", price: 10 },
        {id: 2, color: "midnight blue", price: 7},
        {id: 3, color: "firebrick red", price: 5},
        {id: 4, color: "spring green", price: 9}
    ],
    interior: [
        {id: 1, type: "beige fabric", price: 1},
        {id: 2, type: "charcoal fabric", price: 2},
        {id: 3, type: "white leather", price: 3},
        {id: 4, type: "black leather", price: 4}
    ],
    technology: [
        {id: 1, type: "basic package", price: 1},
        {id: 2, type: "navigation package", price: 2},
        {id: 3, type: "visibility package", price: 3},
        {id: 4, type: "ultra package", price: 4}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 1},
        {id: 2, type: "17-inch Pair Radial Black:", price: 2},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 3},
        {id: 4, type: "18-inch Pair Spoke Black", price: 4}
    ],
    customOrders: [
        { id: 1,
          paintId: 2,
          interiorId: 2,
          technologyId: 2,
          wheelsId: 1,
          timestamp: 71284710294  
        }
    ],
    orderBuilder : [
        {
        paintId: "",
        interiorId: "",
        technologyId: "",
        wheelsId: ""
        }
    ]    
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getCustomOrders = () => {
   return database.customOrders.map(customOrders => ({...customOrders}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}