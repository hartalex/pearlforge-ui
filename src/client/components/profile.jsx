import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ loggedIn, profile }) => {
  let retval = <div />;
  if (loggedIn) {
    retval = (
      <div>
        <img src={profile.picture} />
        {profile.givenName} {profile.familyName}
      </div>
    );
  }
  return retval;
};

const mapStateToProps = (state) => {
  return {
    profile: state.id.profile,
    loggedIn: state.id.loggedIn,
  };
};

export default connect(mapStateToProps)(Profile);
