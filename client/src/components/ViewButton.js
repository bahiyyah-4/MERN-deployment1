import React from 'react';
import { navigate } from '@reach/router';


const EditButton = props => {
    const { pirateId } = props;
    const onClickHandler = e => {
        navigate('/pirate/' + pirateId);
    }

    return (
        <button onClick={onClickHandler}>View Pirate</button>
    )

}
export default EditButton;