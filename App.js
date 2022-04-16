import React from "react";
import { getApps, initializeApp } from "firebase/app";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrustructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { Navigation } from "./src/infrustructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyAeYelgnaXnjv80uVrOgTgho6NxYMeqOys",
  authDomain: "mealstogo-39299.firebaseapp.com",
  projectId: "mealstogo-39299",
  storageBucket: "mealstogo-39299.appspot.com",
  messagingSenderId: "970247134550",
  appId: "1:970247134550:web:d9e883832de5670ecc4af7",
};

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
