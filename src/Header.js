import React from 'react';
import PropTypes from 'prop-types';

import AddGuestForm from './AddGuestForm';

const Header = (props) => {
    return(
        <header>
            <h1>RSVP</h1>
            <p>A React.js App</p>
            <AddGuestForm
             updatePendingGuest={props.updatePendingGuest}
             addGuest={props.addGuest}
             pendingGuest={props.pendingGuest}/>
        </header>
    )
};

Header.propTypes ={
    updatePendingGuest: PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
};

export default Header;