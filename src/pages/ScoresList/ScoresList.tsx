import React from "react"
import { StyleProp, Text, ViewStyle } from "react-native";
import { 
    addButtonStyle,
    courseNameStyle, 
    listStyle, 
    roundDateStyle, 
    scoreTextBoxStyle 
} from "root/styles/stylesheet";
import AddScore from "pages/AddScore/AddScore";
import { Button, Flex, List } from "@ant-design/react-native";

const scoringData: IRound[] = [
    {
        id: 1,
        course: "Brookside Golf Course",
        date: "2022-09-05",
        score: 57,
        holes: 9
    },
    {
        id: 2,
        course: "Eagle Creek Golf Course",
        date: "2022-06-12",
        score: 54,
        holes: 9
    },
    {
        id: 3,
        course: "Lakeside Golf & Country Club",
        date: "2022-06-12",
        score: 99,
        holes: 18
    },
    {
        id: 4,
        course: "Twin Rivers Golf Course",
        date: "2022-06-12",
        score: 60,
        holes: 9
    },
    {
        id: 5,
        course: "Mountain Woods Golf Course",
        date: "2022-06-12",
        score: 63,
        holes: 9
    },
    {
        id: 6,
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 42,
        holes: 9
    },
    {
        id: 7,
        course: "Mountain Woods Golf Course",
        date: "2022-06-12",
        score: 61,
        holes: 9
    },
    {
        id: 8,
        course: "Hillsborough Golf Club",
        date: "2022-06-12",
        score: 67,
        holes: 9
    },
    {
        id: 9,
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 48,
        holes: 9
    },
    {
        id: 10,
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 46,
        holes: 9
    },
    {
        id: 11,
        course: "Bighorn Golf Club",
        date: "2022-06-12",
        score: 116,
        holes: 18
    },
    {
        id: 12,
        course: "Hillsborough Golf Club",
        date: "2022-06-12",
        score: 116,
        holes: 18
    },
    {
        id: 13,
        course: "Stonehurst Golf Club",
        date: "2022-06-12",
        score: 129,
        holes: 18
    },
    {
        id: 14,
        course: "Stonehurst Golf Club",
        date: "2022-06-12",
        score: 96,
        holes: 18
    }
]

const renderItems = (rounds: IRound[]) => {
    return rounds.map((item) => (
        <List.Item
            key={item.id}
        >
            <Flex 
                justify="between"
                style={{
                    justifyContent: "center"
                }}
            >
                <Flex.Item>
                    <Text>{item.course}</Text>
                    <List.Item.Brief>
                        {item.date}
                    </List.Item.Brief>
                </Flex.Item>
                <Flex.Item>
                    <Text style={scoreTextBoxStyle}>
                        {item.score}
                    </Text>
                </Flex.Item>
            </Flex>
        </List.Item>
    ))
}

const ScoresList = () => {
    const [addScoreModalVisible, setAddScoreModalVisible] = React.useState(false)

    const onCancel = () => {
        setAddScoreModalVisible(false)
    }
    
    const onAdd = () => {
    
    }

    return(
        <>
            <Flex
                style={{
                    justifyContent: "center"
                }}
            >
                <Button
                    style={addButtonStyle as StyleProp<ViewStyle>}
                >
                    Add Score
                </Button>
            </Flex>
            <List>
                {renderItems(scoringData)}
            </List>
        </>
    )
}

export default ScoresList