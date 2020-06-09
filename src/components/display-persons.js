/**
 * author: richard sproson
 * description: waits for data passed from props and displays in a table - connecting personsData and personsDetailsData
 * by ID. custom styling imported.
 */

/* Modules */
import React from 'react';

/* Styles */
import './display-persons.scss';

function PersonsData(props) {
    const persons = props.personsData;
    const details = props.personsDetailsData;
    let detail = {}; // declaring var before loop for performance

    return (
        <React.Fragment>
            <h2>Persons Data</h2>
            {persons.length && details.length ?
                <div className={"scroll-container"}>
                    <table className={"table-centered"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
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
                                    <td>{detail[0].Phone}</td>
                                    <td>{detail[0].Address.Street + ', '
                                    + detail[0].Address.City + ', '
                                    + detail[0].Address.State + ', '
                                    + detail[0].Address.ZipCode + ', '
                                    + detail[0].Address.Country}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                :
                <div>Loading data...</div>
            }
        </React.Fragment>
    )
}

export default PersonsData;