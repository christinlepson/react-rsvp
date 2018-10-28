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
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt={props.toggleEditingAt}
            removeGuestAt={props.removeGuestAt}
            setNameAt={props.setNameAt}
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
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;