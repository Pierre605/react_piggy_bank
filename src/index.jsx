import React from 'react'
import ReactDOM from "react-dom"
import Table from './Table'
import FormNewEntry from './FormNewEntry'
import Total from './Total'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: 1, name: "Loto ticket", desc: "", price: 20 },
                { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
                { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
            ],
            total: 0
        }
    }

    handleDelete = (id) => {
        console.log(id)
        const RemainEntries = this.state.entries.filter(entry => entry.id !== id)
        this.setState({entries: RemainEntries})

    }

    handleNewEntry = (event) => {
        event.preventDefault()
        const NewEntry = {id: Date(), 
                          name: event.currentTarget.name.value,
                          desc: event.currentTarget.descript.value,
                          price: parseInt(event.currentTarget.price.value)
                        }

        var rows = this.state.entries
        rows.push(NewEntry)
        this.setState({entries: rows})
        
        event.currentTarget.name.value = ''
        event.currentTarget.descript.value = ''
        event.currentTarget.price.value = ''
    }

    updateTotal = () => {
        let prices = this.state.entries.price
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log(prices.reduce(reducer))

    }

    render() {
        return (
            <div>
                <Table entries={this.state.entries} handleDelete={this.handleDelete} />
                <Total entries={this.state.entries} total={this.updateTotal}/>
                <FormNewEntry handleNewEntry={this.handleNewEntry}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))