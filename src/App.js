import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent'

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: '',
        guests: [
            {
                name: 'Anabelle',
                isConfirmed: false,
                isEditing: false,
                id: 1
            },
            {
                name: 'Chucky',
                isConfirmed: true,
                isEditing: false,
                id: 2
            }
        ]
    };

    lastGuestID = 2;

    generateGuestID = () => {
        this.lastGuestID += 1;
        return this.lastGuestID;
    }

    toggleFilter = () => this.setState( prevState => ({
        isFiltered: !prevState.isFiltered
    }) );

    getTotalGuests = () => this.state.guests.length;

    getTotalConfirmedGuests = () => this.state.guests.reduce( (total, guest) => guest.isConfirmed ? total + 1 : total , 0);

    getTotalUnconfirmedGuests = () => this.getTotalGuests() - this.getTotalConfirmedGuests();

    toggleGuestProperty = (property, guestID) =>
        this.setState( prevState => ({
            guests: prevState.guests.map( (guest) => {
                if (guest.id === guestID) {
                    return {
                        ...guest,
                        [property]: !guest[property]
                    }
                }
                return guest;
            } )
        }));

    toggleConfirmation = (guestID) => this.toggleGuestProperty('isConfirmed', guestID);

    toggleEditing = (guestID) => this.toggleGuestProperty('isEditing', guestID);

    setName = (name, guestID) =>
        this.setState( prevState => ({
            guests: prevState.guests.map( (guest) => {
                if (guest.id === guestID) {
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
                    isEditing: false,
                    id: this.generateGuestID()
                }, ...prevState.guests],
                pendingGuest: ''
            }
        } );
    };

    removeGuest = guestID => {
        this.setState( prevState => {
            return {
                guests: prevState.guests.filter( guest => guest.id !== guestID )
            }
        } );
    };

    render() {

    const totalGuests = this.getTotalGuests();
    const totalConfirmed = this.getTotalConfirmedGuests();
    const totalUnconfirmed = this.getTotalUnconfirmedGuests();

    return (
        <div className="App">

            <Header 
            updatePendingGuest={this.updatePendingGuest}
            addGuest={this.addGuest}
            pendingGuest={this.state.pendingGuest}/>

            <MainContent 
            toggleFilter={this.toggleFilter}
            isFiltered={this.state.isFiltered}
            totalGuests={totalGuests}
            totalConfirmed={totalConfirmed}
            totalUnconfirmed={totalUnconfirmed}
            guests={this.state.guests}
            toggleConfirmation={this.toggleConfirmation}
            toggleEditing={this.toggleEditing}
            removeGuest={this.removeGuest}
            setName={this.setName}
            pendingGuest={this.state.pendingGuest}/>

        </div>
    );
    }
}

export default App;
