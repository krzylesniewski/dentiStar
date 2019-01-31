import React, {Component} from 'react';
import '../style/Patient.css';

class Patient extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        // console.log(this.props.data);
        const renderUser = this.props.data.map((data) =>
            <li key={data.id}>
                <span>{data.firstName}</span>
                <span>{data.lastName}</span>
                <span>{data.phoneNumber}</span>
                <span>{data.email}</span>
            </li>
        );
        return (
            <div>
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