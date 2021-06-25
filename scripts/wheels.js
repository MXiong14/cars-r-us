import { getWheels, setWheels } from "./database.js"

const wheelsx = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"

    const listItems = wheelsx.map(
        wheels => {
            return `<li>
            <input type= "radio" name="wheels" value="${wheels.id}" /> ${wheels.type}
            </li>`
        }
         
    )

    html += listItems.join("")
    html += "</ul>"

    console.log(listItems.join(""))
    return html
}