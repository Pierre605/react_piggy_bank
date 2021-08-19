import React from 'react'
import ReactDOM from "react-dom"
import Table from './Table'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: 1, name: "Loto ticket", desc: "", price: 20 },
                { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
                { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
            ]
        }
    }

    render() {
        return <Table entries={this.state.entries} />
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))