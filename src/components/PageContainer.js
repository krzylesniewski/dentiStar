import React, {Component} from 'react';
import './style/PageContainer.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import axios from 'axios'

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', {...this.state})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="formWrapper">
        <h1>Utwórz nowego pacjenta</h1>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

          <FormControl component="fieldset" margin="normal" id="formRow1">
            <TextField
              id="firstName"
              label="Imie"
              margin="normal"
              onChange={this.handleChange("firstName")}
            />
            <TextField
              id="lastName"
              label="Nazwisko"
              margin="normal"
              onChange={this.handleChange("lastName")}
            />
          </FormControl>

          <FormControl component="fieldset" margin="normal" id="formRow2">
            <TextField
              id="phoneNumber"
              label="Telefon"
              margin="normal"
              onChange={this.handleChange("phoneNumber")}
            />
            <TextField
              id="email"
              label="E-mail"
              margin="normal"
              onChange={this.handleChange("email")}
            />
            <RadioGroup
              id="gender"
              name="gender"
              onChange={this.handleChange("gender")}
            >
              <FormControlLabel
                value="female"
                control={<Radio/>}
                label="Female"

              />
              <FormControlLabel
                value="male"
                control={<Radio/>}
                label="Male"

              />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            className="primary"
            type="submit"
          >
            Primary
          </Button>
        </form>
      </div>
    );
  }
}

export default PageContainer;