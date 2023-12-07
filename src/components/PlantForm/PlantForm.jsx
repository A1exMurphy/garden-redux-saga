import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    let [newPlant, setNewPlant] = useState({id: 4, name: ''});

    const handleNameChange = (input, event) => {
        setNewPlant({ ...newPlant, 
            [input]: event.target.value
        })
    };


    const addNewPlant = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_PLANTS",
            payload: newPlant });

        setNewPlant({id:newPlant.id+1,
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
        });
    }

    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <form onSubmit={addPlant}>
                <input type='text' value={newPlant.name} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.kingdom} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.clade} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.order} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.family} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.subfamily} onChange={() => handleNameChange("name", event)} />
                <input type='text' value={newPlant.genus} onChange={() => handleNameChange("name", event)} />
                <input value='Add New Plant' />
            </form>
        </div>
    );
}


export default PlantForm;
