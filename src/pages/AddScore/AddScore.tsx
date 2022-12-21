import { Button, Card, Modal } from "antd"
import React from "react"
import { View } from "react-native"
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
                style={{
                    width: "90%",
                    height: "200px"
                }}
            >
                <Card
                    footer={() => (
                        <View>
                            <Button
                                size="small"
                                onClick={onCancel}
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
                    <h4>Hello World</h4>
                </Card>
            </Modal>
        </View>
    )
}

export default AddScore