/* Modules */
import React from 'react';

function PersonsData(props) {
    const persons = props.personsData;
    const details = props.personsDetailsData;
    let detail = {}; // declaring var before loop for performance

    return (
        <React.Fragment>
            <h2>Persons Data</h2>
            {persons.length && details.length ?
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {persons.map((person, i) => {
                        detail = details.filter(x => x.PersonID === person.ID);
                        return (
                            <tr key={i}>
                                <td>{person.Name}</td>
                                <td>{detail[0].Age}</td>
                                <td>{detail[0].Gender}</td>
                                <td>{detail[0].Phone}</td>
                                <td>{detail[0].Address.Street + ' '
                                + detail[0].Address.City + ' '
                                + detail[0].Address.State + ' '
                                + detail[0].Address.ZipCode + ' '
                                + detail[0].Address.Country}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                :
                <div>Loading data...</div>
            }
        </React.Fragment>
    )
}

export default PersonsData;