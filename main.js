
function Character(name, power, health) {

    this.name = name
    this.power = power
    this.health = health
    this.elements = new UiElements(this.name)
}

function UiElements(name) {

    this.attackButton = document.querySelector(`#${name}-attack`)
    this.healthButton = document.querySelector(`#${name}-make-health`)
    this.opponentAlive = document.querySelector(`#${name}-alive`)
    this.progress = document.querySelector(`.${name}-health span`)
}

Character.prototype.attack = function(opponent) {

    if (opponent.health > 0) {

        opponent.health -= this.power
        opponent.elements.progress.style.width = `${opponent.health}%`

    } else {

        opponent.elements.attackButton.remove()
        opponent.elements.healthButton.remove()
        opponent.elements.opponentAlive.innerHTML = `${opponent.name} is Died`
    }
}

Character.prototype.status = function() {


}

Character.prototype.makeHealth = function() {

    if (this.health < 100) {

        this.health += 10
        this.elements.progress.style.width = `${this.health}%`
    }

    if (this.health > 100) {

        this.health = 100
    }
}

let majinBuu = new Character('majin-buu', 25, 100)
let freeza = new Character('freeza-sama', 5, 100)

majinBuu.elements.attackButton.addEventListener('click', function() {

    majinBuu.attack(freeza)
})

freeza.elements.attackButton.addEventListener('click', function() {

    freeza.attack(majinBuu)
})

majinBuu.elements.healthButton.addEventListener('click', function() {

    majinBuu.makeHealth()
})

freeza.elements.healthButton.addEventListener('click', function() {

    freeza.makeHealth()
})