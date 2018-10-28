import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest'

const GuestList = ({guests, toggleConfirmationAt, toggleEditingAt, removeGuestAt, setNameAt, isFiltered, pendingGuest}) => {
    return(
        <ul>
        <li className="pending"><span>{pendingGuest}</span></li>

        {guests
            .filter( guest => guest.isConfirmed || isFiltered === false )
            .map( (guest, index) => (
            <Guest
            key={index}
            guest={guest}
            handleConfirmation={() => toggleConfirmationAt(index)}
            handleToggleEditing={() => toggleEditingAt(index)}
            handleRemoveGuest={() => removeGuestAt(index)}
            setName={text => setNameAt(text, index)} />
        ))}

    </ul>
    );
};

GuestList.propTypes = {
    guests: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default GuestList;