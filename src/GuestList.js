import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest'

const GuestList = ({guests, toggleConfirmationAt, toggleEditingAt, setNameAt}) => {
    return(
        <ul>
        <li className="pending"><span>Safia</span></li>

        {guests.map( (guest, index) => (
            <Guest
            key={index}
            guest={guest}
            handleConfirmation={() => toggleConfirmationAt(index)}
            handleToggleEditing={() => toggleEditingAt(index)}
            setName={text => setNameAt(text, index)} />
        ))}

    </ul>
    );
};

GuestList.propTypes = {
    guests: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleConfirmedAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired
}

export default GuestList;