/* eslint-disable prettier/prettier */
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const
    {
        name = "Some Restaurant",
        photos = ["https://www.pakistanihealthyrecipes.com/24-hours-open-restaurants-in-karachi/"],
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.cover key={name} style={styles.cover} source={{uri:photos[0]}}/>
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card:{backgroundColor:"white"},
    cover:{padding:20, backgroundColor:"white"},
    title:{ padding:16 }
});
render(RestaurantInfoCard)