/**
 * @description      :
 * @author           : TLeeuw
 * @group            :
 * @created          : 03/11/2021 - 09:30:54
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/11/2021
 * - Author          : TLeeuw
 * - Modification    :
 **/

import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  Pressable
} from 'react-native'
import { Card } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import { Video } from 'expo-av'
import { Likes } from '../../firebase/Functions/Likes'
import { Dislikes } from '../../firebase/Functions/Dislikes'
import { auth, firestore } from '../../firebase'
import { Collect, Post } from '../../firebase'

export default function PlayVideo ({ navigation, route }) {
  useEffect(() => {
    auth
      .signInWithEmailAndPassword('rando@gmail.com', 'KingofRandom')
      .catch(err => {
        console.log(err)
      })
  }, [])

  const data = route.params.data
  const [userName, setUserName] = useState(data.owner /*"Ntsika"*/)
  const [videoPlay, setVideoPlay] = useState(
    data.url /*"https://firebasestorage.googleapis.com/v0/b/x-urgency.appspot.com/o/Videos%2F53b6444b-ce3b-4c39-b22d-0828f092e43f.mp4?alt=media&token=8f52518d-65a8-4d1f-b18b-a6511a056caa"*/
  )
  const [views, setViews] = useState(data.views /*42*/)
  const [videoVisible, setVideoVisible] = useState(true)
  const [count, setCount] = useState(0)
  const refrence = useRef(
    data.url /*"https://firebasestorage.googleapis.com/v0/b/x-urgency.appspot.com/o/Videos%2F53b6444b-ce3b-4c39-b22d-0828f092e43f.mp4?alt=media&token=8f52518d-65a8-4d1f-b18b-a6511a056caa"*/
  )
  const [info, setInfo] = useState()
  const [Comments, setComments] = useState([]),
    [comment, setComment] = useState(''),
    [visibleStatusBar, setVisibleStatusBar] = useState(false),
    changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar)
    },

    changeStyleStatusBar = () => {
      const styleId = styleTypes.indexOf(styleStatusBar) + 1
      if (styleId === styleTypes.length) {
        return setStyleStatusBar(styleTypes[0])
      }

      return setStyleStatusBar(styleTypes[styleId])
    },

    addAct = async () => {
      let metadata = firestore
        .collection('Videos')
        .doc(data.firestore /*"53b6444b-ce3b-4c39-b22d-0828f092e43f"*/)
        .collection('Acts')
      let found = (await metadata.doc(auth.currentUser.uid).get()).exists
      found
        ? null
        : (metadata.doc(auth.currentUser.uid).set({
            liked: false,
            disliked: false,
            Comments: [null],
            ref: auth.currentUser.uid
          }),
          setViews(views + 1))
    },

    Navigate = () => {
      let match = data.match
      navigation.navigate('Doctor', { match })
    },
    
    Delete = remove => {
      firestore
        .collection('Videos')
        .doc(data.firestore /*"53b6444b-ce3b-4c39-b22d-0828f092e43f"*/)
        .collection('Acts')
        .doc(auth.currentUser.uid)
        .get()
        .then(doc => {
          return doc.data().Comments
        })

        .then(item => {
          let update = item.filter(item => item.comment !== remove)
          return update
        })

        .then(update => {
          firestore
            .collection('Videos')
            .doc(data.firestore)
            .collection('Acts')
            .doc(auth.currentUser.uid)
            .update({
              Comments: update
            })
        })

      setComments(Comments.filter(item => item.comment !== remove))
    }

  useEffect(() => {
    Collect(data.firestore, setComments, setCount)
  }, [])

  useEffect(() => {
    addAct()
  }, [])

  return (
    <View style={styles.contain}>
      {/**-------------Video----------------Video-----------------Video---------------- */}
      <View style={{ width: 340, marginTop: 50 }}>
        <Video
          ref={refrence}
          source={{ uri: videoPlay }}
          useNativeControls
          resizeMode='stretch'
          isLooping
          style={{ width: 340, height: 180 }}
        />
      </View>

    <View>
      {/**-------------Visible Info----------------Visible Info-----------------Visible Info----------------  */}
      {!visibleStatusBar ? (
        <View
          style={{
            width: 340,
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: 340,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <View>
              <Text style={{ fontWeight: 'bold', color: '#F47066' }}>
                {data.title /*"My video"*/}
              </Text>
              <Text style={{ fontSize: 10 }}>
                {views} views - {data.stamp /*"3 weeks ago"*/}
              </Text>
            </View>

            {/*------------DropDown-------------DropDown--------DropDown*/}
            <View style={{marginLeft: 25, marginTop: 20}}>
              <TouchableOpacity
                title='topNav'
                onPress={() => changeVisibilityStatusBar()}
              >
                <AntDesign
                  name='downcircle'
                  size={18}
                  color='black'
                  style={styles.drop}
                />
              </TouchableOpacity>
            </View>

          </View>

          {/*-------------Social Icons-------Social Icons----------Social Icons */}
          <View
            style={{
              width: 360,
              flexDirection: 'row',
              marginTop: 25,
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            {/*------------Likes-------------Likes--------Likes*/}
            <View style={{ left: -8 }}>
              {
                <Likes
                  data={
                    data.firestore /*"53b6444b-ce3b-4c39-b22d-0828f092e43f"*/
                  }
                />
              }
            </View>

            {/*------------DisLikes-------------DisLikes--------DisLikes*/}
            <View style={{ marginLeft: 10, marginTop: 3 }}>
              {
                <Dislikes
                  data={
                    data.firestore /*"53b6444b-ce3b-4c39-b22d-0828f092e43f"*/
                  }
                />
              }
            </View>

            {/*------------Share-------------Share--------Share*/}
            <View style={{ marginLeft: 15 }}>
              <TouchableOpacity
                onPress={() => ShareItem(data.url /*videoPlay*/)}
              >
                
                <View style={{marginLeft: 8}}>
                  <FontAwesome5 name='share' size={20} color='black' />
                </View>
                <Text style={{ paddingTop: 5 }}> Share </Text>

              </TouchableOpacity>
            </View>

            {/*------------Save-------------Save--------Save*/}
            <View style={{marginLeft: 2}}>
              <View style={{ marginLeft: 8 }}>
                <Entypo name='save' size={20} color='black' />
              </View>
              <Text style={{ paddingTop: 5 }}> Save </Text>
            </View>

          </View>

          {/*------------Avatar-------------Avatar--------Avatar*/}
          <View
            style={{
              width: 340,
              marginTop: 50,
              flexDirection: 'row',
              justifyContent: 'flex'
            }}>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              size='medium'
              onPress={Navigate}
            />
            <Text style={{ paddingTop: 15 }}> {data.owner}</Text>
          </View>

          {/*------------Comments-------------Comments--------Comments*/}
          <Card style={styles.txtCards}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.comment}
                name='comment'
                placeholder='Write a comment'
                onChangeText={text => setComment(text)}
              />
              <View
                style={{
                  width: 90,
                  height: 50,
                  borderRadius: 15,
                  marginTop: 2
                }}
              >
                <Button
                  color='#F47066'
                  onPress={() => Post(comment, data.firestore)}
                  title='Comment'
                />
              </View>
            </View>
          </Card>

          <View style={{ width: 340, alignItems: 'flex-start' }}>
            <Text
              style={{
                paddingTop: 35,
                paddingLeft: 10,
                fontWeight: 'medium',
                fontSize: 18
              }}
            >
              Comments: {count}
            </Text>
          </View>

          <ScrollView
            style={{ height: 250 }}
            showsVerticalScrollIndicator={false}
          >
            <Card style={{ height: 340, width: 340 }}>
              {/* {Comments.map((item, index) => (
                <Card
                  style={{
                    backgroundColor: '#e8d7cc',
                    height: 100,
                    marginTop: 10
                  }}
                  key={index}>
                  <SafeAreaView style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <Text>
                      <Text style={{ color: 'red' }}>{item.user}</Text>:{' '}
                      {item.comment}
                    </Text>
                    {item.user === auth.currentUser.displayName ? (
                      <Pressable onPress={() => Delete(item.comment)}>
                        <Text>remove</Text>
                      </Pressable>
                    ) : <></>}
                  </SafeAreaView>
                </Card>
              ))} */}

              <>
                <View style={styles.comments}>
                  <Text style={styles.txtUserComment}>{`Rando121:`}</Text>
                  <Text style={styles.txtComments}>
                    {`bnjjbh hbjhbb kjnknn jnkj nkjn jkn knj nml nknjnkkn jknkj njknkn iuhuhk khkuh yubj bjb`}
                  </Text>
                </View>

                <View style={styles.comments}>
                  <Text style={styles.txtUserComment}>{`Thabs474:`}</Text>
                  <Text style={styles.txtComments}>
                    {`bnjjbh hbjhbb kjnknn jnkj nkjn jkn knj nml nknjnkkn jknkj njknkn iuhuhk khkuh yubj bjb`}
                  </Text>
                </View>

                <View style={styles.comments}>
                  <Text style={styles.txtUserComment}>{`Kheyara5454:`}</Text>
                  <Text style={styles.txtComments}>
                    {`bnjjbh hbjhbb kjnknn jnkj nkjn jkn knj nml nknjnkkn jknkj njknkn iuhuhk khkuh yubj bjb`}
                  </Text>
                </View>

                <View style={styles.comments}>
                  <Text style={styles.txtUserComment}>{`Lindi866:`}</Text>
                  <Text style={styles.txtComments}>
                    {`bnjjbh hbjhbb kjnknn jnkj nkjn jkn knj nml nknjnkkn jknkj njknkn iuhuhk khkuh yubj bjb`}
                  </Text>
                </View>

                <View style={styles.comments}>
                  <Text style={styles.txtUserComment}>{`Rando121:`}</Text>
                  <Text style={styles.txtComments}>
                    {`bnjjbh hbjhbb kjnknn jnkj nkjn jkn knj nml nknjnkkn jknkj njknkn iuhuhk khkuh yubj bjb`}
                  </Text>
                </View>
              </>
            </Card>
          </ScrollView>
        </View>
      ) : (
        /**-------------Hidden Description----------------Hidden Description-----------------Hidden Description----------------  */
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 15
          }}>
          <View
            style={{
              width: 340,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <View>
              <Text
                style={{ fontWeight: 'bold', color: '#F47066', fontSize: 22 }}
              >
                {'Description: '}
              </Text>
              <Text style={{ maxWidth: 315, paddinLeft: 20 }}>
                {data.description}
              </Text>
            </View>

            <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
              <AntDesign name='closecircle' size={18} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      )}

      </View>

      <View style={{width:340, marginTop:25, alignItems:'flex-start'}}>
        <Text>
          tgvhtvvt htvvvhg vvgvgh hgvhgvghv hgvhgv ghvhgv hgvhgv hgvhgv hgvghv hgvhgv hgvhgv hgvhgvh
           gvhgvghv hgvhgv hgvhgv ghv ghvghvgh hgvhgv hvhgv hgvhgv hgvhv hgvhgv hgvhgv hgvgh ghvhgvhvhgv hgvhgv hgvhgv hgvghv hgvhgv ghvhgvghvhgv hgvhvh v
        </Text>
      </View>

      {/**-------BACK------BACK-------BACK */}
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{`BACK`}</Text>
        </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  descriptionContainer: {
    width: 340
  },

  txtCards: {
    width: 340,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#F47066'
  },

  comment: {
    width: 295,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10
  },

  comments: {
    width: 295,
    left: 3,
    marginVertical: 15,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#f47066',
    paddingLeft: 5
  },

  txtComments: {
    color: '#fff',
    padding: 10
  },

  txtUserComment: {
    padding: 10,
    fontSize: 18,
    color: '#fff'
  },

  btnComment: {
    backgroundColor: '#F47066'
  }
})
