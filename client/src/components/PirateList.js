import React from 'react';
import DeleteButton from './DeleteButton';
import ViewButton from './ViewButton';

export default props => {
    return (
        <div>
            {props.pirate.map((pirate, idx) => {
                return (
                    <div style={{ border: "2px solid brown", margin: "5px" }} key={idx}>
                        <h1>{pirate.name}</h1>
                        <img src={pirate.image} alt="Black Beard" width="200" height="200" />
                        <ViewButton pirateId={pirate._id} />
                        <DeleteButton pirateId={pirate._id} />
                    </div>
                )
            })}
        </div>
    )
}