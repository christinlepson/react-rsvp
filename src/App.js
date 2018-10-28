import React, { Component } from 'react';

import GuestList from './GuestList';
import AddGuestForm from './AddGuestForm';
import CounterTable from './CounterTable';

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: '',
        guests: [
            {
                name: 'Anabelle',
                isConfirmed: false,
                isEditing: false
            },
            {
                name: 'Chucky',
                isConfirmed: true,
                isEditing: false
            }
        ]
    };

    toggleFilter = () => this.setState( prevState => ({
        isFiltered: !prevState.isFiltered
    }) );

    getTotalGuests = () => this.state.guests.length;

    getTotalConfirmedGuests = () => this.state.guests.reduce( (total, guest) => guest.isConfirmed ? total + 1 : total , 0);

    getTotalUnconfirmedGuests = () => this.getTotalGuests() - this.getTotalConfirmedGuests();

    toggleGuestPropertyAt = (property, indexToChange) =>
        this.setState( prevState => ({
            guests: prevState.guests.map( (guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        [property]: !guest[property]
                    }
                }
                return guest;
            } )
        }));

    toggleConfirmationAt = (index) => this.toggleGuestPropertyAt('isConfirmed', index);

    toggleEditingAt = (index) => this.toggleGuestPropertyAt('isEditing', index);

    setNameAt = (name, indexToChange) =>
        this.setState( prevState => ({
            guests: prevState.guests.map( (guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        name
                    }
                }
                return guest;
            } )
        }));

    updatePendingGuest = pendingGuest => {
        this.setState(
            {pendingGuest}
        );
    };

    addGuest = (e) => {
        e.preventDefault();
        this.setState( prevState => {
            return {
                guests: [{
                    name: prevState.pendingGuest,
                    isConfirmed: false,
                    isEditing: false
                }, ...prevState.guests],
                pendingGuest: ''
            }
        } );
    };

    removeGuestAt = indexToBeChanged => {
        console.log('remove guest called for index' + indexToBeChanged);
        this.setState( prevState => {
            return {
                guests: [...prevState.guests.slice(0, indexToBeChanged),
                ...prevState.guests.slice(indexToBeChanged + 1)]
            }
        } );
    };

    render() {

    const totalGuests = this.getTotalGuests();
    const totalConfirmed = this.getTotalConfirmedGuests();
    const totalUnconfirmed = this.getTotalUnconfirmedGuests();

    return (
        <div className="App">
        <header>
            <h1>RSVP</h1>
            <p>A React.js App</p>
            <AddGuestForm
             updatePendingGuest={this.updatePendingGuest}
             addGuest={this.addGuest}
             pendingGuest={this.state.pendingGuest}/>
        </header>
        <div className="main">
            <div>
            <h2>Invitees</h2>
            <label>
                <input type="checkbox" onChange={this.toggleFilter} checked={this.state.isFiltered} /> 
                Hide those who haven't responded
            </label>
            </div>
            <CounterTable
            totalGuests={totalGuests}
            totalConfirmed={totalConfirmed}
            totalUnconfirmed={totalUnconfirmed} />
            <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            removeGuestAt={this.removeGuestAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            pendingGuest={this.state.pendingGuest} />
        </div>
        </div>
    );
    }
}

export default App;
