import React, { useState } from 'react'
import English from '../Books/AfricanKingdoms.jpg';

import { View, Text, Image , StyleSheet} from 'react-native'
import App from '../App'


const GradeOne = ({ grade }) => {

    const [pic, setPic] = useState(
        English
    )
    const [menu, setMenu] = useState(false)
    const [work, setWork] = useState('')
    const [home, setHome] = useState(false)


    return (
        <View>
            {home ? (
                <App />
            )
                :
                (
                    !menu ?
                        (


                                <View style={"App-View"}>

                                    <View style={{ width: '100%', alignIems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ position: 'absolute', top:0, cursor: 'pointer', paddingLeft: 45 }}
                                            onClick={() => setHome(!home)}
                                        >BACK</Text>
                                        <Text style={'gradeTitle'}>
                                            Grade{grade}
                                        </Text>
                                        <Image source={pic} style={'gradeImage'} />

                                        <View style={'gradeMenu'}>
                                            <Text style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </Text>
                                            <Text style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </Text>

                                            <Text onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    top: 51,
                                                    paddingLeft: 3.5,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </Text>
                                            <Text onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    paddingLeft: 3,
                                                    top: 51,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                        ) : (
                            <View>
                                <View />

                                <View style={"App-View"}>
                                    <View style={{ width: '100%', alignIems: 'center', justifyContent: 'center' }}>
                                        <Text style={'gradeTitle'}>
                                            Grade{grade}
                                        </Text>
                                        <Image source={pic} style={'gradeImage'} />

                                        <View style={'gradeMenu'}>
                                            <Text style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </Text>
                                            <Text style={{
                                                position: 'absolute',
                                                top: 55,
                                                fontSize: 28,
                                                cursor: 'pointer'
                                            }}>=
                                            </Text>

                                            <Text onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    top: 51,
                                                    paddingLeft: 3.5,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </Text>
                                            <Text onClick={() => setMenu(!menu)}
                                                style={{
                                                    position: 'absolute',
                                                    paddingLeft: 3,
                                                    top: 51,
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}>_
                                            </Text>
                                        </View>

                                        <View style={{
                                            position: 'absolute',
                                            width: 160, height: 559,
                                            top: 48, left: 0,
                                            opacity: 0.9,
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            backgroundColor: '#f47066',

                                        }}>

                                            <Text style={{ color: '#fff' }}>
                                               Choose Category:
                                            </Text>

                                            <View style={{ paddingTop: 10 }}>
                                                <Text style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Homework')}>
                                                    Homework
                                                </Text>
                                                <Text style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Assignments')}>
                                                    Assignments
                                                </Text>
                                                <Text style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Tests')}>
                                                    Tests
                                                </Text>
                                                <Text style={{ color: '#fff', cursor: "pointer" }}
                                                    onClick={() => setWork('Exams')}>
                                                    Exams
                                                </Text>
                                            </View>

                                        </View>

                                    </View>

                                </View>
                            </View>
                        )
                )}
        </View>
    )
}

export default GradeOne