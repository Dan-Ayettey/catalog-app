
import * as React from 'react';
import {AppFooter,AppContent,AppBar} from "./src/views/productPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from "./src/views/cartPage";

const Stack=createStackNavigator();

//Render
export default function App() {




    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Catalog">
              <Stack.Screen name="Catalog" component={AppContent} />
              <Stack.Screen  name="Cart" component={Cart} />
              <Stack.Screen  name="Check out" component={AppBar} />
          </Stack.Navigator>

      </NavigationContainer>

  );
}

