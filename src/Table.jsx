import React from 'react'

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {props.entries.map((elem) => {
                return (
                <tr key={elem.id}>
                    <td>{elem.name}</td>
                    <td>{elem.desc}</td>
                    <td>{elem.price}</td>
                    <td><button onClick={() => props.handleDelete(elem.id)}>X</button></td>
                </tr>
            )})}
            </tbody>

        </table>
    )
}

export default Table;