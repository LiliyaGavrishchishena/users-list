import React from 'react';
// components
import UserItem from './UserItem';
// styles
import styles from './UsersList.module.css';

const UsersList = ({ users, sortedUser, sortedDate }) => (
  <table className={styles.list}>
    <caption className={styles.head}>Users List</caption>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>#</th>
        <th className={styles.th}>User Name</th>
        <th className={styles.th}>Date of birth</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user, idx) => (
        <tr key={user.email}>
          <UserItem
            user={user}
            index={idx + 1}
            sortedUser={sortedUser}
            sortedDate={sortedDate}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

export default UsersList;
