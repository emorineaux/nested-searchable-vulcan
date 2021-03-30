import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment UsersList on User {
    _id
    username
    email
    address {
      street
      zipcode
      town
    }
  }
`);
