import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { profile } = useContext(AuthContext);
  let retval = <div />;
  if (typeof profile !== 'undefined') {
    const name = `${profile.givenName} ${profile.familyName}`;
    retval = (
      <div>
        <img src={profile.picture} alt="profile" />
        {name}
      </div>
    );
  }
  return retval;
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
