import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from './graphql/Mutations';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, {error}] = useMutation(CREATE_USER);

  console.log(error);

  return (
    <View style={styles.createUser}>
      <TextInput placeholder="name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        onPress={() => {
          createUser({
            variables: {name: name, username: username, password: password},
          });
        }}
        title="Create new user"
      />
    </View>
  );
};

export default CreateUser;

const styles = StyleSheet.create({
  createUser: {},
});
