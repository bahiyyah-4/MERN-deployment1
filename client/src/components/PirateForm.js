import React, { useState } from 'react'
import { navigate } from '@reach/router';
export default props => {
    const { onSubmitHandler } = props;
    const [name, setName] = useState("");
    const [crewPosition, setCrewPositon] = useState("");
    const [pirateCatchPhrases, setPirateCatchPhrases] = useState("");
    const [image, setImage] = useState("");
    const [treasureChest, setTreasureChest] = useState("");
    const [hook, setHook] = useState(true);
    const [eye, setEye] = useState(true);
    const [peg, setPeg] = useState(true);

    return (
        <div>
            <h1>Add Pirate</h1>
            <button onClick={(e) => navigate("/pirates")}> Crew Board</button>
            <form onSubmit={e => { onSubmitHandler(e, { name, crewPosition, pirateCatchPhrases, image, treasureChest, hook, eye, peg }) }}>
                <p>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </p>

                <p>
                    <label>Img URL:</label><br />
                    <input
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </p>
                <p>
                    <label># of Treasure Chest:</label><br />
                    <input
                        type="treasureChest"
                        name="treasureChest"
                        value={treasureChest}
                        onChange={(e) => setTreasureChest(e.target.value)} />
                </p>
                <p>
                    <label>Pirate Catch Phrases:</label><br />
                    <input
                        type="text"
                        name="pirateCatchPhrases"
                        value={pirateCatchPhrases}
                        onChange={(e) => setPirateCatchPhrases(e.target.value)} />
                </p>
                <p>
                    <label>Crew Position:</label><br />
                    <select onChange={(e) => setCrewPositon(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </p>
                <p>
                    <label>Peg Leg</label><br />
                    <input
                        type="checkbox"
                        name="peg"
                        value={peg}
                        onChange={(e) => setPeg(e.target.value)} />
                </p>
                <p>
                    <label>Eye Patch</label><br />
                    <input
                        type="checkbox"
                        name="eye"
                        value={eye}
                        onChange={(e) => setEye(e.target.value)} />
                </p>
                <p>
                    <label>Hook Hand</label><br />
                    <input
                        type="checkbox"
                        name="hook"
                        value={hook}
                        onChange={(e) => setHook(e.target.value)} />
                </p>
                <button type="submit">Add Pirate</button>{" "}
            </form>
        </div>
    )
}