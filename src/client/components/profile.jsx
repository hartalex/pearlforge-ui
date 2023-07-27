import React from 'react';
import PropTypes from 'prop-types';
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

Profile.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  profile: PropTypes.objectOf(PropTypes.string),
};

Profile.defaultProps = {
  profile: {}
};

export default connect(mapStateToProps)(Profile);
