import React from 'react'

export default function PhoneNumberList({phoneNumbers}) {
    const phoneNumberElements = phoneNumbers.map(phoneNumber =>
        <li key = {phoneNumber.id}>{phoneNumber.number}</li>
    );
    return (
        <div>
            <h6 className="card-subtitle text-muted">Phone numbers:</h6>
            <ul>
                {phoneNumberElements}
            </ul>
        </div>
    )
}