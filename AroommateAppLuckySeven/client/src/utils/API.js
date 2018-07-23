import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getUsers: function(searchQuery) {
    const {gender, ageFrom, ageTo, preferences, accountType} = searchQuery;

    const queryParams = {};

    queryParams.accountType = accountType;

    if (gender) {
      queryParams.gender = gender;
    }

    if (ageFrom && ageTo && ageFrom < ageTo) {
      queryParams.ageFrom = ageFrom;
      queryParams.ageTo = ageTo;
    }

    if (preferences) {
      queryParams.preferences = preferences;
    }

    return axios.get("/api/users", {
      params: queryParams
    });
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  }
};
