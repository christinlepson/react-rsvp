import React from 'react';
import PropTypes from 'prop-types';

const CounterTable= ({totalConfirmed, totalUnconfirmed, totalGuests}) => {
    return(
        <table className="counter">
            <tbody>
                <tr>
                    <td>Attending:</td>
                    <td>{totalConfirmed}</td>
                </tr>
                <tr>
                    <td>Unconfirmed:</td>
                    <td>{totalUnconfirmed}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>{totalGuests}</td>
                </tr>
            </tbody>
        </table>
    );
};

CounterTable.propTypes = {
    totalGuests: PropTypes.number.isRequired,
    totalUnconfirmed: PropTypes.number.isRequired,
    totalConfirmed: PropTypes.number.isRequired
}

export default CounterTable;