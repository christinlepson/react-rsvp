import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest= ({guest, handleConfirmation, handleToggleEditing, setName}) => {
    return(
        <li className="responded">
            <GuestName
            isEditing={guest.isEditing}
            name={guest.name}
            handleNameEdit={e => setName(e.target.value)} />
            <label>
                <input
                type="checkbox"
                checked={guest.isConfirmed}
                onChange={handleConfirmation} />
                Confirmed
            </label>
            <button onClick={handleToggleEditing}>{guest.isEditing ? 'save' : 'edit'}</button>
            <button>remove</button>
        </li>
    );
};

Guest.propTypes = {
    guest: PropTypes.object.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired
}

export default Guest;