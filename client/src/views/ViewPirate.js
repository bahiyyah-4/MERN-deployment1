import React, { useState, useEffect } from "react";
import { Link } from '@reach/router';
import axios from 'axios';


const UpdateView = props => {
    const { id } = props;
    const [pirate, setPirate] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/' + id)
            .then(response => {
                if (response.data.name === "CastError") {
                    window.location = '/new';
                }
                else {
                    setPirate(response.data)
                    setLoaded(true);
                }
            })
            .catch(err => {
                console.log(err)
            });
    })

    return (
        <div>
            <Link to="/pirates">Pirate Crew List</Link>
            <h1>{pirate.name}</h1>
            <img src={pirate.image} alt="Black Beard" width="300px" height="200px" />
            <h1>{pirate.pirateCatchPhrases}</h1>
            <div>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.treasureChest}</p>
                <p>Peg Leg: {pirate.peg ? 'Yes' : 'No'}</p>
                <p>Eye Patch: {pirate.peg ? 'Yes' : 'No'}</p>
                <p>Peg Leg: {pirate.peg ? 'Yes' : 'No'}</p>
            </div>
        </div>
    )

}

export default UpdateView;