
import React from 'react';
import axios from 'axios';



const DeleteButton = props => {
    const { pirateId } = props;
    const onClickHandler = e => {
        axios.delete('http://localhost:8000//api/pirate/:id' + pirateId)
            .then(response => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button onClick={onClickHandler}>Walk the Plank</button>
    )

}
export default DeleteButton;