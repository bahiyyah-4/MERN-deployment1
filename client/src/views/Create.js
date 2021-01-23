import React, { useState } from 'react';
import axios from 'axios';
import PirateForm from '../components/PirateForm';
import { navigate } from '@reach/router';


const CreateView = props => {
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, pirate) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate', pirate)
            .then(response => {
                navigate('/pirates');
            })
            .catch(error => {
                console.log(error);
                const errorResponse = error.response.data.errors;
                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (

        <div>
            {errors.map((error, idx) => {
                return (
                    <p key={idx}>{error}</p>
                )
            })}
            <PirateForm onSubmitHandler={onSubmitHandler} />
        </div>
    )
}

export default CreateView;