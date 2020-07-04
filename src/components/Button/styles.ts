import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background: #ff9000;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #312e28;
`;
