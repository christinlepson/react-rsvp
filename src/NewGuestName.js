import React from 'react';
import PropTypes from 'prop-types';

const NewGuestName = (props) => {
    return(
        <input
        onChange={props.handleUpdatePendingGuest}
        type="text"
        placeholder="Invite Someone"
        value={props.pendingGuest}/>
    )
};

NewGuestName.propTypes ={
    handleUpdatePendingGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default NewGuestName;