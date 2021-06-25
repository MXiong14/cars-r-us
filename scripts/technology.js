import { getTechnology, setTechnology } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = "<ul>"

    const listItems = technologies.map(
        technology => {
            return `<li>
            <input type= "radio" name="technology" value="${technology.id}" /> ${technology.type}
            </li>`
        }
         
    )

    html += listItems.join("")
    html += "</ul>"

    console.log(listItems.join(""))
    return html
}