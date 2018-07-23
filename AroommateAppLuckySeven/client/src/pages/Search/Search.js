import * as React from "react";
import API from "../../utils/API";
import RoomForm from "../../components/RoomForm";
import "./Search.css";

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
        <div key={user._id} className="card user-card col-md-4">
          <img className="user-card-image card-img-top" src={user.profileImage}/>
          <div className="card-body">
            <h5 className="card-title h3">{user.name}</h5>
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
          <div className="col-md-12">
            <h2 className="search-heading" style={{textAlign: "center"}}>
              {subtitle}
            </h2>
            <RoomForm onSubmit={this.handleSubmit}/>
          </div>
          <div className="col-md-12 text-center results-container">
            {usersData &&
              <h2 className="heading-results">
                RESULTS:
              </h2>
            }
            <div className="container">
              <div className="row">
                {usersData &&
                  this.renderUsers()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
