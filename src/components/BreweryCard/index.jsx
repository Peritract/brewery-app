import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../reducers/breweryReducer';
import { ButtonControl } from '../../components';

const BreweryCard = ({ data }) => {

    const saved = useSelector(state => state.breweries.saved.some((card => card.id === data.id)))
    const dispatch = useDispatch();

    const handleSave = () => {
        if (!saved) {
            dispatch(add(data));
        } else {
            dispatch(remove(data));
        }
    }

    return <div className="brewery-card">
            <h2>{data.name}</h2>
            <span><em>{data.city}, {data.state}</em></span>
            <hr />
            <ButtonControl  displayText={saved ? "saved" : "save"} clickHandler={handleSave} />
           </div>
}

export default BreweryCard;