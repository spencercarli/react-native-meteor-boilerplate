import React from 'react';
import { Image, StyleSheet } from 'react-native';
import gravatar from 'gravatar-api';
import images from '../../config/images';

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

const Avatar = (props) => {
  const gravatarOptions = {
    email: props.email,
    parameters: { size: 200 },
  };

  const uri = gravatar.imageUrl(gravatarOptions);
  return (
    <Image
      style={styles.avatar}
      source={{ uri }}
      defaultSource={images.avatarPlaceholder}
    />
  );
};

Avatar.propTypes = {
  email: React.PropTypes.string,
};

export default Avatar;
