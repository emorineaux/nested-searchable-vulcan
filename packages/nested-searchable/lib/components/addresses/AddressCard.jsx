import React from 'react';
import { Components } from 'meteor/vulcan:core';

const AddressCard = ({ document: address }) => (
    <div>
        <div>{address.street}</div>
        <div>{address.zipcode}</div>
        <div>{address.town}</div>
    </div>
);

export default AddressCard;
