import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const query = gql`
    query FindUser($search: String!) {
        User(search: $search) {
            username
        }
    }
`;

// const userList = await Users.queryOne(userId, {
//     fragmentText: `
//     fragment UsersList on User {
//     _id
//     username
//     email
//     address {
//       street
//       zipcode
//       town
//     }
//   }
//   `
// });

const onSearch = (event) => {
    const data = useQuery(query, {search: event.target.value});
    console.log(data)
}

const CustomSearch = () => {
    return (
        <input type="search" onChange={onSearch} placeholder="Search..." />
    );
};

export default CustomSearch;
