import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment AddressItem on Address {
    # addresses
    _id
    street
    zipcode
    town
    createdAt

    # users
    userId
    user {
      ...UsersMinimumInfo
    }
  }
`);

registerFragment(/* GraphQL */`
  fragment AddressPage on Address {
    ...AddressItem
  }
`);

