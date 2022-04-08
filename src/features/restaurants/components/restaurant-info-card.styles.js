import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { Card, Title } from "react-native-paper";

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantTitle = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;
export const Open = styled(View)`
  flex: 1
  justify-content: flex-end;
  flex-direction: row;
`;
export const Section = styled(View)`
  align-items: center;
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
