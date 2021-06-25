import { Interior } from "./Interior.js"
import { Paint } from "./Paint.js"
import { Technology } from "./technology.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js" 


 document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Paint Color</h2>
                ${Paint()}
            </section>
            <section class="choices__sizes options">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__styles options">
                <h2>Technology</h2>
                ${Technology()}
            </section>
            <section class="choices__styles options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Fresh Whips</h2>
            ${Orders()}
        </article>
    `
}