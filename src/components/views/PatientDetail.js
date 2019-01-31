import React, {Component} from 'react';

class PatientDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default PatientDetail;