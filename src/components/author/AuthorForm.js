import React from 'react';
import TextInput from '../common/TextInput';


const AuthorForm = ({author, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="FirstName"
        label="First Name"
        value={author.firstName}
        onChange={onChange}
        error={errors.title}/>

      <TextInput
        name="LastName"
        label="Last Name"
        value={author.lastName}
        onChange={onChange}
        error={errors.category}/>



      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

AuthorForm.propTypes = {
  author: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AuthorForm;
