import React, { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <ScrollView>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
      </List.Accordion>

      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinkExpanded}
        onPress={() => setDrinkExpanded(!drinkExpanded)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
        <List.Item title="Coffee" />
      </List.Accordion>
    </ScrollView>
  );
};
