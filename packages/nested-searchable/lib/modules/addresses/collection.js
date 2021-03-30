/*

Addresses collection

*/

import schema from './schema.js';
import { createCollection } from 'meteor/vulcan:core';

/**
 * @summary The global namespace for Addresses.
 * @namespace Addresses
 */
export const Addresses = createCollection({
  collectionName: 'Addresses',

  typeName: 'Address',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['owners'],
    canDelete: ['owners'],
  },
});

export default Addresses;
