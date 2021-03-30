/*

Seed the database with some dummy content.

*/

import Users from 'meteor/vulcan:users';
import { newMutation } from 'meteor/vulcan:core';
import { Promise } from 'meteor/promise';
import Addresses from '../modules/addresses/collection.js';

const seedData = [
  {
    street: '2 rue du Paradis',
    zipcode: '75017',
    town: 'Paris',
  }
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true
  };
  return newMutation({
    collection: Users,
    document: user,
    validate: false
  });
}

const createDummyUsers = async () => {

  // eslint-disable-next-line no-console
  console.log('// seeding users…');

  return Promise.all([
    createUser('Bruce', 'dummyuser1@telescopeapp.org'),
    createUser('Arnold', 'dummyuser2@telescopeapp.org'),
    createUser('Julia', 'dummyuser3@telescopeapp.org'),
  ]);
};

export const seedAddresses = () => {

  if (Users.find().count() === 0) {
    Promise.await(createDummyUsers());
  }

  if (Addresses.find().fetch().length === 0) {

    const allUsers = Users.find().fetch();

    // eslint-disable-next-line no-console
    console.log('// seeding address…');

    Promise.awaitAll(seedData.map(document => newMutation({
      collection: Addresses,
      document: document,
      currentUser: _.sample(allUsers), // get a random user
      validate: false
    })));

    // eslint-disable-next-line no-console
    console.log('-> finished seeding!');
  }
};
