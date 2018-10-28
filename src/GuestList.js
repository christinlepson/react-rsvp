import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest'

const GuestList = ({guests, toggleConfirmation, toggleEditing, removeGuest, setName, isFiltered, pendingGuest}) => {
    return(
        <ul>
        <li className="pending"><span>{pendingGuest}</span></li>

        {guests
            .filter( guest => guest.isConfirmed || isFiltered === false )
            .map( (guest) => (
            <Guest
            key={guest.id}
            guest={guest}
            handleConfirmation={() => toggleConfirmation(guest.id)}
            handleToggleEditing={() => toggleEditing(guest.id)}
            handleRemoveGuest={() => removeGuest(guest.id)}
            setName={text => setName(text, guest.id)} />
        ))}

    </ul>
    );
};

GuestList.propTypes = {
    guests: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default GuestList;