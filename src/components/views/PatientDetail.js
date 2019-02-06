import React, {Component} from 'react';

class PatientDetail extends Component {
    render() {
        //console.log(this.props.match.id);
        // console.log(this.props.data);

        return (
            <div>
                <h1>Hello From Patient Detail {this.props.match}</h1>
            </div>
        );
    }
}

export default PatientDetail;