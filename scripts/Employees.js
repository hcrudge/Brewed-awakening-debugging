import { getEmployees, getOrders} from "./database.js"

const employees = getEmployees()

export const Employees = () => {

document.addEventListener(
    "click",
    (event) => {
    if (event.target.id.startsWith("employee")) {
       
        // console.log("hello, click!", event)

  
        // // array destructuring 
        const [, employeeId] = event.target.id.split("--") 

        // // employeeId: changed to a number
        const employeeIdNumber = parseInt(employeeId)

        // // 2. find how many products that employee has sold
        const orders = getOrders()
        let counter = 0
        for (const order of orders) {
            if ( order.employeeId === employeeIdNumber) {
            counter++
            }
        }
        // console.log("order total:", counter)

        // // 3. display that number to the user
        window.alert(`${event.target.innerText} sold ${counter} product(s).`)

         }
    }
    )







    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

