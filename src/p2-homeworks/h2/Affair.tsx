import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать - ?????
    affair: {_id: number, name: string, priority: string}, // need to fix any1
    deleteAffairCallback: (_id: number)=>void // need to fix any2
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        return props.deleteAffairCallback(id) ////????? return id
    }// need to fix

    return (
        <div>
            <li key={props.affair._id}>
                <span>{   props.affair.name   }</span>
                <button onClick={() => deleteCallback(props.affair._id)}>X</button>
                <span>{   props.affair.priority   }</span>
            </li>
        </div>
    )
}

export default Affair
