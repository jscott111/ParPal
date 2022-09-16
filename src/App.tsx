import React from "react";
import Home from "components/Home/Home"
import { Dimensions } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva"
import { default as theme } from "root/styles/theme/theme.json"

export default function App(){
    return(
        <ApplicationProvider 
            {...eva} 
            theme={{...eva.dark, ...theme }}
        >
            <Layout style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Home></Home>
            </Layout>
        </ApplicationProvider>
    )
}