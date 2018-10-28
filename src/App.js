import React, { Component } from 'react';

import GuestList from './GuestList';

class App extends Component {

    state = {
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

    render() {
    return (
        <div className="App">
        <header>
            <h1>RSVP</h1>
            <p>A React.js App</p>
            <form>
                <input type="text" value="Safia" placeholder="Invite Someone" />
                <button type="submit" name="submit" value="submit">Submit</button>
            </form>
        </header>
        <div className="main">
            <div>
            <h2>Invitees</h2>
            <label>
                <input type="checkbox" /> Hide those who haven't responded
            </label>
            </div>
            <table className="counter">
            <tbody>
                <tr>
                <td>Attending:</td>
                <td>2</td>
                </tr>
                <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
                </tr>
                <tr>
                <td>Total:</td>
                <td>3</td>
                </tr>
            </tbody>
            </table>
            <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt} />
        </div>
        </div>
    );
    }
}

export default App;
