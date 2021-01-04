import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    leftContainer:{
        flexDirection: "row",
        width: 65
    },
    avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15
    },
    midContainer: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    flex:1
    },
    userName:{
        fontWeight: "bold",
        fontSize: 16
    },
    lastMessage: {
        fontWeight: "600",
        fontSize: 14,
        color: "grey",
        width: "95%",
        flexWrap: "wrap"
    },
    time: {
        fontWeight: "600",
        fontSize: 12,
        color: "grey"
    }
})

export default styles