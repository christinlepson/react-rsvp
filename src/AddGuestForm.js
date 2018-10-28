import React from 'react';
import PropTypes from 'prop-types';
import NewGuestName from './NewGuestName';

const AddGuestForm = (props) => {
    return(
        <form onSubmit={props.addGuest}>
            <NewGuestName
            pendingGuest={props.pendingGuest}
            handleUpdatePendingGuest={ e => props.updatePendingGuest(e.target.value) } />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    )
};

AddGuestForm.propTypes ={
    updatePendingGuest: PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default AddGuestForm;