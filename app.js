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
    const mainTitle = <React.Fragment> {/* permet de ne pas ajouter de noeud supplémentaire au DOM */}
        <h1 className="mainTitle" id={'title'+n}>
        Bonjour à tous &nbsp; <br/>
        <span>{numberFormat(n)}</span> {/* entre accolades : expression à évaluer */}
        </h1>
        <ul>{lis}</ul>
        <hr/>
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

// Approche des composants au moyen de fonctions
function WelcomeFunction({name, children}) { // déstructuration au lieu de props.name
    //console.log({name})
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
        <hr/>
    </div>
}

ReactDOM.render(<WelcomeFunction name="Mike">Un élément enfant d'un composant créé avec une fonction </WelcomeFunction>, document.querySelector('#componentFunction'))



class WelcomeClass extends React.Component { // les props s'écrivent avec des constructeurs
    
    /* constructor(props) {
        super(props)
        console.log(props)
    } */

    render() {
        //console.log(this.props)
        return <div>
            <h1>Bonjour ici un composant créé avec une classe</h1>
            <p>
                {this.props.children}
            </p>    
            <hr/>
        </div>
    }
}

ReactDOM.render(<WelcomeClass>Un élément enfant d'un composant créé avec une classe </WelcomeClass>, document.querySelector('#componentClass'))



class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null  // Initialisation du timer
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.updateState(), 1000) // Montage du composant 
    }

    componentWillUnmount() {
        window.clearInterval(this.timer) // démontage du composant
    }

    updateState() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <div>
            Nous sommes le {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}
        </div>
    }
}



function AssemblyComponents() {
    return <div>
        <WelcomeFunction name="Jamy" />
        <WelcomeClass>Un simple élément enfant</WelcomeClass>
        <Clock />
        <hr/>
    </div>
}

ReactDOM.render(<AssemblyComponents />, document.querySelector('#assembComponents'))