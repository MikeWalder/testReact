//console.log(mainTitle)

/* function render() {
    const mainTitle = React.createElement('h1', {}, 
        'Bonjour à tous ',
        React.createElement('span', {}, n)
    )
    ReactDOM.render(mainTitle, document.querySelector('#app'))
}
render() */

/* function render2() {
    document.querySelector('#app').innerHTML = '<h1>Bonjour à tous <span>' + n + '</span></h1>';
}
render2() */

let n = 0;

function numberFormat(n) {
    return n.toString().padStart(3, '0')
}

function render() {
    const items = [
        'Item 1', 
        'Item 2', 
        'Item 3'
    ]
    const lis = items.map((item, k) => <li key={k}>{item}</li>) // Ajout de l'index (key) pour les tableaux
    const mainTitle = <React.Fragment>
        <h1 className="title" id={'title'+n}>
        Bonjour à tous &nbsp;
        <span>{numberFormat(n)}</span> {/* entre accolades : expression à évaluer */}
        </h1>
        <ul>{lis}</ul>
    </React.Fragment>
    ReactDOM.render(mainTitle, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)


// DIFFERENCE ENTRE REACT ET JS NATIVE :
// ------------------------------------------ //
// En React il n'y aura que la variable n qui sera rafraîchie faisant gagner du temps d'exécution
// En JS natif tout l'élément h1 sera réactualisé => optimisation des changements