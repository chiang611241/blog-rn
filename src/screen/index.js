import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data: blogPost, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>index</Text>
      <Button title='Add' onPress={addBlogPost} />
      <FlatList
        data={blogPost}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
