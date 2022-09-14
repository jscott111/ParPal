import React from "react";
import { Divider, ListItem, Text } from "@ui-kitten/components";
import { List } from "@ui-kitten/components";

const scoringData: IRound[] = [
    {
        course: "Brookside Golf Course",
        date: "2022-09-05",
        score: 57,
        holes: 9
    },
    {
        course: "Eagle Creek Golf Course",
        date: "2022-06-12",
        score: 54,
        holes: 9
    },
    {
        course: "Lakeside Golf & Country Club",
        date: "2022-06-12",
        score: 99,
        holes: 18
    },
    {
        course: "Twin Rivers Golf Course",
        date: "2022-06-12",
        score: 60,
        holes: 9
    },
    {
        course: "Mountain Woods Golf Course",
        date: "2022-06-12",
        score: 63,
        holes: 9
    }
]

const renderItem = ({item, index}: {item: IRound, index: number}) => (
    <ListItem
        style={{width: "100%"}}
        title={`${item.course}`}
        description={`${item.date}`}
        accessoryRight={<Text>{item.score}</Text>}
        touchSoundDisabled={true}
    />
);

const ScoresList = () => {
    return(
        <List
            style={{width: "100%"}}
            data={scoringData}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
        />
    )
}

export default ScoresList