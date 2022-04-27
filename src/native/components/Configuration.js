import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Box, FormControl, HStack, Button, Icon,
} from 'native-base';

import { KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UIButton from './UI/UIButton';

const Configuration = ({
  loading,
  resetApp,
  navigation,
  backendURL,
  setBackendURL,
}) => (
  <KeyboardAvoidingView
    h={{
      base: '400px',
      lg: 'auto',
    }}
    behavior="padding"
  >
    <Box alignItems="center" marginTop={60} p={5}>
      <FormControl>
        <FormControl.Label>FireFly3 backend URL</FormControl.Label>
        <Input
          variant="rounded"
          placeholder="FireFly3 backend URL"
          isDisabled
          value={backendURL}
        />
        <UIButton
          icon
          style={{
            marginTop: 10,
            height: 32,
            marginLeft: 5,
          }}
          text="Reset App"
          loading={loading}
          onPress={() => resetApp()}
        />
      </FormControl>
    </Box>
  </KeyboardAvoidingView>
);

Configuration.propTypes = {
  loading: PropTypes.bool.isRequired,
};

Configuration.defaultProps = {};

export default Configuration;