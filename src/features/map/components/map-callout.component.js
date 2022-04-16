import React from "react";

import { CompactRestaurantInfo } from "../../../compontents/restaurant/compact-restaurant-info.componenet";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
