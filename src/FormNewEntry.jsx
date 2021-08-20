import React from "react"

function FormNewEntry(props) {
    return (
        <>
        <h1>Add new expense</h1>
		<form id="form" onSubmit={props.handleNewEntry}>
			<div>
			<label className="form-label">Name</label>
			</div>
			<div>
				<input className="form-control" type="text" id="name"/>
			</div>
			<div>
				<label className="form-label">Description</label>
			</div>
			<div>
				<input className="form-control" type="text" id="descript"/>
			</div>
			<div>
				<label className="form-label">Price</label>
			</div>
			<div>
				<input className="form-control" type="text" id="price"/>
			</div>
			<div>
				<button type="submit">Add expense</button>
			</div>
		</form>
        </>
    )
}


export default FormNewEntry