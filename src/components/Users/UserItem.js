/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import * as moment from 'moment';
// styles
import styles from './UserItem.module.css';

const UserItem = ({ user, index, sortedUser, sortedDate }) => (
  <>
    <td className={styles.td}>{index}</td>
    <td className={styles.td} onClick={sortedUser}>
      {user.name.first}
    </td>
    <td className={styles.td} onClick={sortedDate}>
      {moment(user.dob.date).format('DD.MM.YYYY')}
    </td>
  </>
);

export default UserItem;
