import React from "react";
import { Button } from "react-native-paper";
import { Spacer } from "../../../compontents/spacer/spacer.component";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
