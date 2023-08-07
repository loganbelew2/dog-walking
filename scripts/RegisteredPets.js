import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (petClick) => {
        const clickTarget = petClick.target
        const walkerId = clickTarget.dataset.foreignkey
        const allWalkers = getWalkers()
        for (const walker of allWalkers) {
            if (walker.id === parseInt(walkerId) ) {
                window.alert(`This pet is being walked by ${walker.name}`)
            }
        }
    }
)




export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-foreignKey = "${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

