import * as React from "react";
import "./CreateAccountForm.css";

export default class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
      profileImage: "",
      preferences: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(evt, key) {
    this.setState({[key]: evt.target.value});
  }

  handleCheckboxChange(evt, preference) {
    if (evt.target.checked)
      this.setState({
        preferences: [...this.state.preferences, preference]
      });
    else
      this.setState(prevState => {
        let newPreferences = prevState.preferences.slice();
        newPreferences.splice(newPreferences.indexOf(preference, 1));
        return {preferences: newPreferences}
      });
  }

  handleFormSubmit() {
    const {onSubmit} = this.props;

    if (onSubmit)
      onSubmit(this.state);
  }

  render() {
    return (
      <div className="account-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" onChange={(evt) => this.handleInputChange(evt, "name")} className="form-control" id="name" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" onChange={(evt) => this.handleInputChange(evt, "gender")} className="custom-select form-control">
            <option value="" defaultValue="">Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" onChange={(evt) => this.handleInputChange(evt, "age")} className="form-control" id="age" placeholder="Age"/>
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input type="text" onChange={(evt) => this.handleInputChange(evt, "profileImage")} className="form-control" id="profileImage" placeholder="Image URL"/>
        </div>
        <label>Preferences:</label>
          <div className="preferences row">
              <div className="col-md-6">
                <div className="form-check">
                  <input type="checkbox" onChange={(evt) => this.handleCheckboxChange(evt, "pool")} className="form-check-input" id="preference-pool"/>
                  <label className="form-check-label" htmlFor="preference-pool">Pool</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" onChange={(evt) => this.handleCheckboxChange(evt, "internet")} className="form-check-input" id="preference-internet"/>
                  <label className="form-check-label" htmlFor="preference-internet">Internet</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input type="checkbox" onChange={(evt) => this.handleCheckboxChange(evt, "gym")} className="form-check-input" id="preference-gym"/>
                  <label className="form-check-label" htmlFor="preference-gym">Gym</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" onChange={(evt) => this.handleCheckboxChange(evt, "parking")} className="form-check-input" id="preference-parking"/>
                  <label className="form-check-label" htmlFor="preference-parking">Parking</label>
                </div>
              </div>
          </div>
          <div className="text-center">
          <button onClick={this.handleFormSubmit} className="btn btn-md btn-success submit-button">Submit</button>
          </div>
      </div>
    )
  }
}
