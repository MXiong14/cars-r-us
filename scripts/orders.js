import { getCustomOrders, getPaint, getWheels, getInterior, getTechnology } from "./database.js"

const paint = getPaint()
const wheels = getWheels()
const interior = getInterior()
const technology = getTechnology()

const buildOrderListItem = (order) => {
    let totalCost = 0
    
    const foundPaint = paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
        totalCost += foundPaint.price
        
    const foundWheels = wheels.find(
        (wheels) => {
            return wheels.id === order.wheelsId
        }
    )
        totalCost += foundWheels.price
            
    const foundInterior = interior.find(
        (interior) => {
             return interior.id === order.interiorId
        }
    )
        totalCost += foundInterior.price
                
    const foundTechnology = technology.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
            totalCost += foundTechnology.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        }
    )
    return `<li>
        Order #${order.id} cost ${costString} placed on ${order.timestamp}
            </li>`
        }
        
        
export const Orders = () => { 
    const orders = getCustomOrders();
    let html = "<ul>"

    
    const listItems = orders.map(buildOrderListItem)
    
    html += listItems.join("")
    html += "</ul>"

    console.log(listItems.join(""))
    return html
}