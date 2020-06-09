/**
 * author: richard sproson
 * description: App renders basic containers > hits endpoints > stores data > passes to props
 */

/* Modules */
import React, { useState, useEffect } from 'react';

/* Styles */
import './App.scss';

/* Components */
import DisplayPersons from './components/display-persons';

function App() {
    const [hasError, setErrors] = useState('');
    const [personsData, setPersonsData] = useState([]);
    const [personsDetailsData, setPersonDetailsData] = useState([]);

    const fetchData = async(url, action) => {
        const data = await fetch(url);
        data
            .json()
            .then(data => action(data.value))
            .catch(err => setErrors(err));
    };

    useEffect(() => {
        fetchData('https://services.odata.org/Experimental/OData/OData.svc/Persons', setPersonsData);
        fetchData('https://services.odata.org/Experimental/OData/OData.svc/PersonDetails', setPersonDetailsData);
    }, []);

    if (hasError.length) {
        return (
            <div>There was an error fetching data {hasError}</div>
        )
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Persons API</h1>
            </header>
            <section>
                <DisplayPersons
                    personsData={personsData}
                    personsDetailsData={personsDetailsData}
                />
            </section>
        </div>
    );
}

export default App;
