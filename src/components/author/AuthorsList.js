/**
 * Created by Vladimir on 03/07/16.
 */
import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorsList = ({authors}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>First name“</th>
        <th>Last name</th>

      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorListRow key={author.id} author={author}/>
      )}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorsList;
