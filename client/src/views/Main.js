import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PirateList from '../components/PirateList';
import { navigate } from "@reach/router";
import LogoutButton from "../components/LogoutButton";

export default () => {
    const [pirate, setPirate] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates', {
            withCredentials: true
        })
            .then(res => {
                res.data.sort(function (a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(console.log);
    }, [])

    const removeFromDom = pirateId => {
        setPirate(pirate.filter(pirate => pirate._id !== pirateId))
        navigate('/');
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={(e) => navigate("/pirate/new")}> Add Pirate</button>
            {loaded && <PirateList pirate={pirate} removeFromDom={removeFromDom} />}
            <LogoutButton />
        </div>
    )
}