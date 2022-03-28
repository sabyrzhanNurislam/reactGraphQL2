import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_USERS} from './graphql/Queries';

type Props = {};

const GetUsers = (props: Props) => {
  const {loading, error, data} = useQuery(GET_USERS);
  const [first, setfirst] = useState();
    console.log(data)
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <View>
      <Text>GetUsers</Text>
    </View>
  );
};

export default GetUsers;

const styles = StyleSheet.create({});
