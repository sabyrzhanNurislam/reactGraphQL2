import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import CreateUser from './CreateUser';
import GetUsers from './GetUsers';

const App = () => {
  const client = new ApolloClient({
    uri: 'http://192.168.0.103:5000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <CreateUser />
      {/* <GetUsers /> */}
    </ApolloProvider>
  );
};

export default App;
