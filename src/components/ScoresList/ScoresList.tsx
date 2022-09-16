import React from "react";
import { Card, Divider, ListItem, Text } from "@ui-kitten/components";
import { List } from "@ui-kitten/components";
import { default as theme } from "root/styles/theme/theme.json"

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
    },
    {
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 42,
        holes: 9
    },
    {
        course: "Mountain Woods Golf Course",
        date: "2022-06-12",
        score: 61,
        holes: 9
    },
    {
        course: "Hillsborough Golf Club",
        date: "2022-06-12",
        score: 67,
        holes: 9
    },
    {
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 48,
        holes: 9
    },
    {
        course: "Par 3-Country Meadows Golf Club",
        date: "2022-06-12",
        score: 46,
        holes: 9
    },
    {
        course: "Bighorn Golf Club",
        date: "2022-06-12",
        score: 116,
        holes: 18
    },
    {
        course: "Hillsborough Golf Club",
        date: "2022-06-12",
        score: 116,
        holes: 18
    },
    {
        course: "Stonehurst Golf Club",
        date: "2022-06-12",
        score: 129,
        holes: 18
    },
    {
        course: "Stonehurst Golf Club",
        date: "2022-06-12",
        score: 96,
        holes: 18
    }
]

const renderItem = ({item, index}: {item: IRound, index: number}) => (
    <ListItem
        style={{width: "100%"}}
        title={evaProps => <Text {...evaProps} style={{fontSize: 20, marginTop: 10, marginBottom: 8}}>{item.course}</Text>}
        description={evaProps => <Text {...evaProps} style={{fontSize: 15, color: theme.SUBTEXT_COLOR, marginTop: 8, marginBottom: 8}}>{item.date}</Text>}
        accessoryRight={() =>
            <Text 
                style={{
                    color: theme.SUBTEXT_COLOR,
                    borderWidth: 3,
                    borderColor: theme.SCORE_BOX_OUTLINE,
                    borderRadius: 6,
                    height: 50,
                    width: 50,
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontSize: 17
                }}
            >
                {item.score}
            </Text>
        }
        touchSoundDisabled={true}
    />
);

const ScoresList = () => {
    return(
        <List
            style={{width: "100%", maxHeight: "90%"}}
            data={scoringData}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
            
        />
    )
}

export default ScoresList