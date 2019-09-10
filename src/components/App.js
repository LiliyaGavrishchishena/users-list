import React, { Component } from 'react';
// components
import SearchBar from './SearchBar/SearchBar';
import UsersList from './Users/UsersList';

const INITIAL_STATE = {
  userList: [],
  error: false,
  sortedByAuthorUp: true,
  sortedByDateUp: true,
  filter: '',
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      if (response.ok) {
        const data = await response.json();
        this.setState({ userList: data.results });
      } else {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error: true });
      }
    } catch (e) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ error: true });
    }
  };

  handleChangeSortedByUser = () => {
    const { sortedByUserUp, userList } = this.state;
    const users = sortedByUserUp
      ? [].concat(userList).sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        })
      : [].concat(userList).sort((a, b) => {
          if (a.name.first > b.name.first) {
            return -1;
          }
          if (a.name.first < b.name.first) {
            return 1;
          }
          return 0;
        });
    this.setState({
      userList: users,
      sortedByUserUp: !sortedByUserUp,
    });
  };

  handleChangeSortedByDate = () => {
    const { sortedByDateUp, userList } = this.state;
    const users = sortedByDateUp
      ? [].concat(userList).sort((a, b) => {
          if (a.dob.date < b.dob.date) {
            return -1;
          }
          if (a.dob.date > b.dob.date) {
            return 1;
          }
          return 0;
        })
      : [].concat(userList).sort((a, b) => {
          if (a.dob.date > b.dob.date) {
            return -1;
          }
          if (a.dob.date < b.dob.date) {
            return 1;
          }
          return 0;
        });
    this.setState({
      userList: users,
      sortedByDateUp: !sortedByDateUp,
    });
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const { userList, filter } = this.state;

    const filteredUsers = userList.filter(user =>
      user.name.first.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <SearchBar
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        {filteredUsers.length > 0 ? (
          <UsersList
            users={filteredUsers}
            sortedUser={this.handleChangeSortedByUser}
            sortedDate={this.handleChangeSortedByDate}
          />
        ) : (
          <h3>Попробуйте изменить условия поиска</h3>
        )}
      </>
    );
  }
}
