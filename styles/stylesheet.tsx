import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { default as theme } from "root/styles/theme/theme.json"

export const scoreTextBoxStyle: StyleProp<TextStyle> = {
    color: theme.SUBTEXT_COLOR,
    borderWidth: 3,
    borderColor: theme.SCORE_BOX_OUTLINE,
    borderRadius: 6,
    height: 50,
    width: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 17
}

export const courseNameStyle: StyleProp<TextStyle> = {
    fontSize: 20, 
    marginTop: 10, 
    marginBottom: 8
}

export const roundDateStyle: StyleProp<TextStyle> = {
    fontSize: 15, 
    color: theme.SUBTEXT_COLOR, 
    marginTop: 8, 
    marginBottom: 8
}

export const listStyle: StyleProp<ViewStyle> = {
    width: "100%", 
    maxHeight: "90%"
}

export const addButtonStyle: StyleProp<ViewStyle> = {
    borderRadius: 20,
    width: "50%",
    marginTop: "20%",
    marginBottom: "5%",
    position: "relative"
}