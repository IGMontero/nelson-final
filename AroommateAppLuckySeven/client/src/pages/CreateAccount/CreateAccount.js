import * as React from "react";
import API from "../../utils/API";
import CreateAccountForm from "../../components/CreateAccountForm";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const {type} = this.props.match.params;
    data.accountType = type === "have" ? "has" : "need";

    const {name, gender, age} = data;

    // Validate required fields.
    if (!name || !gender || !age)
      return alert("Required fields are missing!");

      // Dummy profile image.
    if (!data.profileImage) {
      data.profileImage = "https://png.icons8.com/metro/1600/gender-neutral-user.png";
    }

    // Call to API
    API.createUser(data)
    .then(res => {
      if (res.status === 200) {
        alert("Account created successfully!");
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    const {type} = this.props.match.params;
    const subtitle =  type && type === "have" ? "I HAVE A ROOM" : "I NEED A ROOM";

    return(
      <div className="container">
        <h1 className="mb-5">CREATE ACCOUNT</h1>
          <h2 style={{textAlign: "center"}}>
            {subtitle}
          </h2>
          <CreateAccountForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
