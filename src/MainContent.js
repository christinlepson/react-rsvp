import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = (props) => {
    return(
        <div className="main">

            <ConfirmedFilter 
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}/>

            <Counter
            totalGuests={props.totalGuests}
            totalConfirmed={props.totalConfirmed}
            totalUnconfirmed={props.totalUnconfirmed} />

            <GuestList
            guests={props.guests}
            toggleConfirmation={props.toggleConfirmation}
            toggleEditing={props.toggleEditing}
            removeGuest={props.removeGuest}
            setName={props.setName}
            isFiltered={props.isFiltered}
            pendingGuest={props.pendingGuest} />

        </div>
    );
};

MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    totalGuests: PropTypes.number.isRequired,
    totalConfirmed: PropTypes.number.isRequired,
    totalUnconfirmed: PropTypes.number.isRequired,
    guests: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;