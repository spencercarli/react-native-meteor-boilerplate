import React from 'react';
import { Image, StyleSheet } from 'react-native';

const size = 100;
const styles = StyleSheet.create({
  avatar: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
});

const Avatar = () => {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: 'https://randomuser.me/api/portraits/women/96.jpg' }}
    />
  );
};

export default Avatar;
