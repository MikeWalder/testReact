

//console.log(mainTitle)

let n = 0

function render() {
    const mainTitle = React.createElement('h1', {}, 
        'Bonjour à tous ',
        React.createElement('span', {}, n)
    )
    ReactDOM.render(mainTitle, document.querySelector('#app'))
}
render()

/* function render2() {
    document.querySelector('#app').innerHTML = '<h1>Bonjour à tous <span>' + n + '</span></h1>';
}
render2() */

window.setInterval(() => {
    n++
    render()
}, 500)

// En React il n'y aura que la variable n qui sera rafraîchie faisant gagner du temps d'exécution
// En JS natif tout l'élément h1 sera réactualisé => optimisation des changements