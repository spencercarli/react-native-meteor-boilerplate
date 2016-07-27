import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export const InputWrapper = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {props.children}
    </View>
  );
};

InputWrapper.propTypes = {
  children: React.PropTypes.array,
};

const GenericTextInput = (props) => {
  return (
    <View>
      {props.borderTop ? <View style={styles.divider} /> : null}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

GenericTextInput.propTypes = {
  borderTop: React.PropTypes.bool,
};

export default GenericTextInput;
