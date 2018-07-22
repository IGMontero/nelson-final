import * as React from "react";
import API from "../../utils/API";
import RoomForm from "../../components/RoomForm";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const {type} = this.props.match.params;
    data.accountType = type === "need" ? "has" : "need";

    const {ageFrom, ageTo} = data;

    if ( (!ageFrom || !ageTo) || (ageFrom > ageTo))
      return alert("You must specify a valid age range.");

    // Call to API
    API.getUsers(data)
    .then(res => {
      if (res.data) {
        this.setState({usersData: res.data});
      }
    })
    .catch(err => console.log(err));
  }

  capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderUsers() {
    const {usersData} = this.state;
    return usersData.map((user) => {
      const {accountType} = user;
      let formattedAccountType = accountType === "has" ? accountType : accountType + "s";
      formattedAccountType = this.capitalizeString(formattedAccountType);
      return (
        <div key={user._id} className="card" style={{marginBottom: "50px"}}>
          <img className="card-img-top" style={{height: "250px"}} src={user.profileImage}/>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Gender: {user.gender}</p>
            <p className="card-text">Age: {user.age}</p>
            <p className="card-text">Preferences: {user.preferences.join(", ")}.</p>
            <p className="card-text">{formattedAccountType} a room.</p>
          </div>
        </div>
      );
    })
  }

  render() {
    const {usersData} = this.state;
    const {type} = this.props.match.params;
    const subtitle =  type && type === "have" ? "I HAVE A ROOM" : "I NEED A ROOM";

    return(
      <div className="container">
      <h1>SEARCH</h1>
        <div className="row">
          <div className="col-md-6">
            <h2 style={{textAlign: "center"}}>
              {subtitle}
            </h2>
            <RoomForm onSubmit={this.handleSubmit}/>
          </div>
          <div className="col-md-6 text-center">
            <h2 style={{textAlign: "center"}}>
              Search results:
            </h2>
            {usersData &&
              this.renderUsers()}
          </div>
        </div>
      </div>
    )
  }
}
