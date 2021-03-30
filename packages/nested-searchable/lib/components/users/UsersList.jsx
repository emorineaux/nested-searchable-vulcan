/*

components/UsersList.jsx

Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { Components, withMulti, withCurrentUser, registerComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import AddressCard from '../addresses/AddressCard.jsx';
import CustomSearch from '../CustomSearch.jsx';

const UsersList = ({ results = [], currentUser, loading, loadMore, count, totalCount }) => (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
        <Helmet>
            <link
                name="bootstrap"
                rel="stylesheet"
                type="text/css"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            />
        </Helmet>

        <div
            style={{
                padding: '20px 0',
                marginBottom: '20px',
                borderBottom: '1px solid #ccc',
            }}
        >
            <Components.AccountsLoginForm />
        </div>

        {loading ? (
            <Components.Loading />
        ) : (
            <div className="movies">
                {Users.canCreate({ collection: Users, user: currentUser }) ? (
                    <div
                        style={{
                            marginBottom: '20px',
                            paddingBottom: '20px',
                            borderBottom: '1px solid #ccc',
                        }}
                    >
                        <h4>Create New User</h4>
                        <Components.SmartForm collection={Users} />
                    </div>
                ) : null}

                <CustomSearch/>
                {results.map(user => (
                    <Components.Card
                        fields={['username', 'email', 'address']}
                        key={user._id}
                        collection={Users}
                        document={user}
                        currentUser={currentUser}
                    />
                ))}

                {totalCount > results.length ? (
                    <a
                        href="#"
                        onClick={e => {
                            e.preventDefault();
                            loadMore();
                        }}
                    >
                        Load More ({count}/{totalCount})
                    </a>
                ) : (
                    <p>No more items.</p>
                )}
            </div>
        )}
    </div>
);
const options = {
    collection: Users,
    limit: 5,
};

registerComponent({ name: 'UsersList', component: UsersList, hocs: [withCurrentUser, [withMulti, options]] });
