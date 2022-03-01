import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Video } from 'expo-av';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

import { Likes } from '../firebase/Functions/Likes'
import { Dislikes } from '../firebase/Functions/Dislikes'

export const Clone = ({ route }) => {

    const { data } = route.params
    const refrence = useRef(data.url)
    const [videoPlay, setVideoPlay] = useState(data.url)
    const [views, setViews] = useState(data.views)
    const [visibleStatusBar, setVisibleStatusBar] = useState(false)

    const changeVisibilityStatusBar = () => {
        setVisibleStatusBar(!visibleStatusBar);
    }

    const addAct = async () => {
        let metadata = firestore.collection('Videos').doc(data.firestore).collection('Acts')
        let found = (await metadata.doc(auth.currentUser.uid).get()).exists
        found ? (
            null

        ) : (

            metadata.doc(auth.currentUser.uid).set({
                liked: false,
                disliked: false,
                Comments: [null],
                ref: auth.currentUser.uid
            }),

            setViews(views + 1)
        )
    }

    useEffect(() => {
        addAct()
    }, [])

    return (
        <View style={styles.contain}>
            <View style={styles.vidContainer}>
                <Video ref={refrence} source={{ uri: videoPlay }} useNativeControls resizeMode="stretch" isLooping style={styles.vid} />
            </View>
            {!visibleStatusBar ? (
                <View style={styles.sect1}>
                    <View style={styles.arrow}>
                        <Text>
                            <Text style={{ fontWeight: 'bold', color: '#F47066', }}>{data.title}</Text>
                            <Text style={{ fontSize: 10 }}> {views} views - {data.stamp} </Text>
                        </Text>
                        <Text>
                            <Text title="topNav" onPress={() => changeVisibilityStatusBar()}><AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} /> </Text>
                        </Text>
                    </View>

                    <View style={styles.buttons}>
                        <Likes data={data.firestore} />

                        <View style={{ marginTop: 3 }}>
                            {<Dislikes data={data.firestore} />}
                        </View>

                        <Text onPress={() => ShareItem(data.url)}>
                            <FontAwesome5
                                name="share"
                                size={20}
                                color="black"
                            />
                            <Text style={{ paddingTop: "5" }}>{" Share "}</Text>
                        </Text>

                        <Text>
                            <Entypo name="save" size={20} color="black" />
                            <Text style={{ paddingTop: "5" }}>{" Save "}</Text>
                        </Text>
                    </View>

                    <View style={styles.avatar}>
                        <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} size="medium" />
                        <Text style={{ paddingTop: "15" }} > {data.owner}</Text>
                    </View>

                </View>
            ) : (
                /**-------------Hidden Description----------------Hidden Description-----------------Hidden Description----------------  */

                <Card style={{ width: "335", height: "300", borderRadius: "20", backgroundColor: '#fff', marginTop: "15" }}>

                    <View style={{ width: "335", flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text>
                            <Text style={{ fontWeight: 'bold', color: '#F47066', fontSize: 16, }}>{"  Description: "}</Text>
                            <Text style={{ maxWidth: "315", paddinLeft: "20" }}>  {data.description} </Text>
                        </Text>

                        <Text onPress={() => changeVisibilityStatusBar()}>
                            <AntDesign name="closecircle" size={18} color="black" />  </Text>
                    </View>

                    <View style={{ marginTop: "50", flexDirection: 'row' }}>
                        <Avatar rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg', }} size="medium" />
                        <Text>{userName}</Text>
                    </View>
                </Card>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    vidContainer: {
        width: 335,
        marginTop: 50
    },
    vid: {
        width: 335,
        height: 180
    },
    sect1: {
        width: 335,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrow: {
        flexDirection: 'row',
        width: 335,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttons: {
        width: 335,
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 335,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex'
    }
});