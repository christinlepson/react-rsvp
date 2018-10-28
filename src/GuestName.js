import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ({isEditing, name, handleNameEdit}) => {
    if (isEditing) {
        return (
            <input
                type="text"
                value={name}
                onChange={handleNameEdit}
            />
        );
    } else {
        return (
            <span>{name}</span>
        );
    }
};

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    handleNameEdit: PropTypes.func.isRequired
};

export default GuestName;