import React, { ScrollView } from "react-native"
import Home from "root/src/pages/Home/Home"
import { Dimensions } from "react-native";
import { APP_THEME } from "root/styles/theme/theme.json"
import { ConfigProvider } from "antd";
import { Provider, View } from "@ant-design/react-native";
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';

export default function App(){
    return(
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: APP_THEME
                }    
            }}
        >
            <Provider locale={enUS}>
                <ScrollView>
                    <Home></Home>
                </ScrollView>
            </Provider>
        </ConfigProvider>
    )
}