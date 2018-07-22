import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
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
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
};
