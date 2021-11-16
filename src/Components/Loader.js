import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';

export const ProgressBar = (status) =>{

    const [progress, Load] = useState(status*100)

    useEffect(()=>{
        Load(status*100)
    }, [])
    return(
        <View style={styles.outer}>
            <View style={styles.outer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    width: '100%',
    height: 15,
    backgroundColor: 'green'
})