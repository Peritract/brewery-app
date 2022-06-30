import React from "react";
import { useSelector } from "react-redux";
import { BreweryCard } from '../../components';

const Saved = () => {

    const breweryList = useSelector(state => state.breweries.saved);

    return <>
            <h1>Saved!</h1>
            <div className="brewery-container">
                { breweryList.length == 0 ? <em>No breweries saved...</em> : breweryList.map(b => <BreweryCard key={b.id} data={b}/>)}
            </div>
           </>
}

export default Saved;