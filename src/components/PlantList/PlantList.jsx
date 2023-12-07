import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {

    useEffect(() => {
        getPlants();
    }, []); 


    const dispatch = useDispatch();

    
    
    const getPlants = () => {
        dispatch({
            type: "GET_PLANTS"
        })
    }
    
    
    const plantReducer = useSelector((store) => store.plantReducer);

    return (
        <div>
            {plantReducer.map((plantItem) => {
                return <p>{plantItem.name}</p>}
            )}
            {/* <pre>{JSON.stringify(reduxState)}</pre> */}
        </div>
    );
}

export default PlantList;
