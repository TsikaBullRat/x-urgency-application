import React, {useState, useEffect}from 'react';
import { Text, View, StyleSheet, } from 'react-native';
//import SwitchSelector from "react-native-switch-selector";
//import { Avatar, Badge } from 'react-native-elements';
import { Socials } from '../../Components';
import { firestore } from '../../firebase';

const DoctorProfile = ({match, route}) => {

    const info = route.params
    const options = [
        { label: "About ", value: "About" },
        { label: "Qualification", value: "Qualification" },
        { label: "Specialization", value: "Specialization" },
        { label: "Contact", value: "Contact" }
    ];
    const [About, setAbout] = useState(true);
    const [Qalification, setQualification] = useState(false);
    const [Specialization, setSpecialization] = useState(false);
    const [Contact, setContact] = useState(false);
    const [data, setData] = useState(null);

    const check = (value) => {

        if (value == 'About') {
            setAbout(true)
            setQualification(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Qualification') {
            setQualification(true)
            setAbout(false)
            setSpecialization(false)
            setContact(false)
        }

        if (value == 'Specialization') {
            setSpecialization(true)
            setAbout(false)
            setQualification(false)
            setContact(false)
        }

        if (value == 'Contact') {
            setContact(true)
            setAbout(false)
            setQualification(false)
            setSpecialization(false)

        }

    }
    const getDoctorInfo = () =>{
        firestore.collection("Doctors").doc(match).get()
            .then(doc=>{
                setData(doc.data())
            })
    }

    useEffect(()=>{
        getDoctorInfo()
    }, [])

    return (
        <>
            <View>
                <View style={styles.container}>
                    <View style={{ marginTop: 50, marginLeft: 10 }}>
                        <Avatar style={styles.avatar}
                            rounded
                            source={{
                                uri: 'https://randomuser.me/api/portraits/men/44.jpg',
                            }}
                            size="large"
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                        />
                    </View>
                    <Text style={styles.textTitle}>Dr Sighn</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 60, marginBottom: 20 }}>
                    <Socials text="Following" number="15" />
                    <Socials text="Followers" number="3000K" />
                    <Socials text="Likes" number="3.1M" />
                </View>

                <View>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        style={styles.tab}
                        onPress={value => check(value)}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        hasPadding
                    />
                </View>
            </View>
            {About ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    {data?data.about:null}
                </Text>
            </View> : <View></View>}
            {Qalification ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Becoming a doctor isn’t just a career move. Medicine is something that you devote your life to studying and practising
                    After all, you will be making decisions that directly impact patients’ lives.
                    It’s therefore essential that you understand the intricacies of the human body and have undergone the highest level of training.
                    As such, a career in medicine is academically rigorous.
                </Text>
            </View> : <View></View>}
            {Specialization ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Neurologists
                    These are specialists in the nervous system, which includes the brain, spinal cord, and nerves.
                    They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.
                </Text>
            </View> : <View></View>}
            {Contact ? <View style={styles.words}>
                <Text style={styles.textTitle2}>
                    Mr Sighn@gmail.com
                    0730772725
                </Text>
            </View> : <View></View>}

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        height: 850,
    },
    textTitle: {
        color: 'red',
        fontSize: 25,
        marginTop: 5,
    },
    textTitle2: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5,
    },
    box: {
        flexDirection: 'row',
    },
    tab: {
        paddingLeft: 5,
        width: 380,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margingTop: 80,
        borderBottomWidth: 3,
        borderColor: 'turquoise',
        shadowColor: 'grey',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        elevation: 1,
    },
    words: {
        width: 250,
        textAlign: 'center',
        alignSelf: 'center'
    },
});
export default DoctorProfile;