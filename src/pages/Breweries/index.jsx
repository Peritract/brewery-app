import React, { useState, useEffect } from "react";
import axios from "axios";
import { BreweryCard } from '../../components';

const Breweries = () => {

    const [breweryList, setBreweryList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadBreweries () {
            setLoading(true);
            const { data } = await axios.get("https://api.openbrewerydb.org/breweries");
            setBreweryList(data);
            setLoading(false);
        }

        loadBreweries();

    }, [])

    return <>
            <h1>Breweries!</h1>
            <div className="brewery-container">
                { loading? <em>Loading...</em> : breweryList.map(b => <BreweryCard key={b.id} data={b}/>)}
            </div>
           </>
}

export default Breweries;