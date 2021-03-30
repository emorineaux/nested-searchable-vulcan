/*

Addresses schema

*/

/**
 * @summary Addresses schema
 * @type {Object}
 */
const schema = {
  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  street: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['members'],
    searchable: true
  },
  zipcode: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['members'],
    searchable: true
  },
  town: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['members'],
    searchable: true
  },
};

export default schema;
