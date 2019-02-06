import React, {Component} from 'react';
import '../style/Patient.css';
import {Link} from "react-router-dom";

class Patient extends Component {
    render() {
        // console.log(this.props.data);
        const renderUser = this.props.data.map((data) =>
            <li key={data.id}>
                <Link to={`/patient/${data.id}`}>
                    <span>{data.firstName}</span>
                    <span>{data.lastName}</span>
                    <span>{data.phoneNumber}</span>
                    <span>{data.email}</span>
                </Link>
            </li>
        );
        return (
            <div className="patient">
                <ul>
                    <li>
                        <span>imie</span>
                        <span>Nazwisko</span>
                        <span>Numer Telefonu</span>
                        <span>E-Mail</span>
                    </li>
                    {renderUser}
                </ul>
            </div>
        )
    }
}

export default Patient;