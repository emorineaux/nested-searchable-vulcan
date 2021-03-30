import Users from 'meteor/vulcan:users';

Users.addField([
  {
    fieldName: 'address',
    fieldSchema: {
      type: Object,
      optional: true,
      canRead: ['guests'],
      relation: 'hasOne',
      searchable: true
    },
  },
]);
