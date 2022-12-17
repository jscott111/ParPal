import React from "react"
import { View } from "react-native"
import { Button, Card, Modal, Text } from "@ui-kitten/components"
import { modalBackgroundStyle } from "root/styles/stylesheet"

const AddScore: React.FC<{
    visibility: boolean
    onCancel: () => void
}> = ({
    visibility,
    onCancel
}) => {

    return (
        <View>
            <Modal
                visible={visibility}
                backdropStyle={modalBackgroundStyle}
                style={{
                    width: "90%",
                    height: "90%"
                }}
            >
                <Card
                    footer={() => (
                        <View>
                            <Button
                                size="small"
                                onPress={onCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                size="small"
                            >
                                Add
                            </Button>
                        </View>
                    )}
                >
                    <Text>Hello World</Text>
                </Card>
            </Modal>
        </View>
    )
}

export default AddScore