import React from 'react';
import { Image } from 'react-native';
import gravatar from 'gravatar-api';
import images from '../../config/images';
import styles from './styles';

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
