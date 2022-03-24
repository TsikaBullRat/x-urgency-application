import React, { useRef, useState, useEffect } from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Share, Platform
} from 'react-native'
import { Video } from 'expo-av'
import { WebView } from 'react-native-webview'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'
import { Card } from 'react-native-paper'
import { Likes } from '../firebase/Functions/Likes'
import { Dislikes } from '../firebase/Functions/Dislikes'
import { Collect, Post } from '../firebase/Storage/Storage.functions'
import { firestore, auth } from '../firebase/config'

const Clone = ({ route, navigation }) => {
  const data = route.params.vid

  const [userName, setUserName] = useState(data.owner)
  const [videoPlay, setVideoPlay] = useState(data.url)
  const [views, setViews] = useState(data.views)
  const [videoVisible, setVideoVisible] = useState(true)
  const [count, setCount] = useState(0)
  const reference = useRef(data.url)
  const [info, setInfo] = useState()
  const [Comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [visibleStatusBar, setVisibleStatusBar] = useState(false)
  const [status, setStatus] = React.useState({})
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [pressed, setPressed] = useState(false)
  const [newComment, setNew] = useState(false)

  const LoadVideo = () => {
    const uri = data.url
  }

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar)
  }

  const addAct = async () => {
    let metadata = firestore
      .collection('Videos')
      .doc(data.firestore)
      .collection('Acts')
      .doc(auth.currentUser.uid)
    let found = await metadata.get().then(doc => doc.exist)
    found
      ? null
      : (metadata.set({
          liked: false,
          disliked: false,
          Comments: [null],
          ref: auth.currentUser.uid
        }),
        setViews(views + 1))
  }

  const Navigate = () => {
    let match = data.match
    navigation.navigate('Doctor', { match })
  }

  const Delete = remove => {
    firestore
      .collection('Videos')
      .doc(data.firestore)
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

  const Comment = () => {
    Post(comment, data.firestore)
    setNew(!newComment)
  }
  const ShareItem = async url => {
    try {
      const result = await Share.share({ url: url })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type') // shared with activity type of result.activityType
          console.log(result.activityType)
        } else {
          console.log('Shared') // shared
          console.log(result.action)
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Could not share') // dismissed
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    Collect(data.firestore, setComments, setCount)
  }, [newComment])

  // useEffect(()=>console.log(Comments), [])

  return (
    <View style={styles.contain}>

      {/**-------BACK------BACK-------BACK */}

      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{`BACK`}</Text>
        </TouchableOpacity>
      </View>

      {/**-------------Video----------------Video-----------------Video---------------- */}
      <View style={styles.videoContainer}>
        <View style={styles.video}>
          {Platform.OS == 'Android' ? (
            <WebView
              source={{
                uri: data.url
              }}
            />
          ) : (
            <View>
              <Video
                
                ref={data.index}
                source={{ uri: videoPlay }}
                useNativeControls
                resizeMode='stretch'
                isLooping
                style={styles.video}
              />
            </View>
          )}
        </View>
      </View>

      {/**-------------Visible Info----------------Visible Info-----------------Visible Info----------------  */}

      <View>
        {!visibleStatusBar ? (
          <View style={styles.statusOff}>
            <View style={styles.title}>
              <Text style={styles.vidTitle}>{data.title} </Text>
              <Text style={styles.viewCount}>
                {views} views - {data.stamp}
              </Text>

              {/*------------DropDown-------------DropDown--------DropDown*/}
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

            {/*-------------Social Icons-------Social Icons----------Social Icons */}
            <View style={styles.socialIcons}>

              {/*------------Likes-------------Likes--------Likes*/}
              <View style={styles.like}>
                <Likes
                  data={data.firestore}
                  pressed={pressed}
                  setPressed={setPressed}
                />
              </View>

              {/* <TouchableOpacity onPress={Like}>
                <Entypo name="thumbs-up" size={20} color="black" />
                <Text style={{ paddingTop: 6 }}> {likes}</Text>
              </TouchableOpacity> */}

              {/*------------DisLikes-------------DisLikes--------DisLikes*/}
              <View style={styles.dislike}>
                <Dislikes
                  data={data.firestore}
                  pressed={pressed}
                  setPressed={setPressed}
                />
              </View>

              {/* <TouchableOpacity onPress={Dislike}>
                <Entypo name="thumbs-down" size={20} color="black" />
                <Text style={{ paddingTop: 6 }}> {dislikes}</Text>
              </TouchableOpacity> */}
              {/*------------Share-------------Share--------Share*/}
              <View style={styles.share}>
                <TouchableOpacity onPress={() => ShareItem(data.url)}>
                  <View style={styles.shareIcon}>
                    <FontAwesome5 name='share' size={20} color='black' />
                  </View>
                  <Text style={styles.shareText}> Share </Text>
                </TouchableOpacity>
              </View>

              {/*------------Save-------------Save--------Save*/}
              <View style={styles.save}>
                <View style={styles.saveIcon}>
                  <Entypo name='save' size={20} color='black' />
                </View>
                <Text style={styles.saveText}> Save </Text>
              </View>
            </View>

            {/*------------Avatar-------------Avatar--------Avatar*/}
            <View style={styles.avatar}>
              <Avatar
                rounded
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg'
                }}
                size='medium'
                onPress={Navigate}
              />
              <Text style={styles.owner}> {data.owner}</Text>
            </View>

            {/*------------Comments-------------Comments--------Comments*/}
            <Card style={styles.txtCards}>
              <View style={styles.commentBox}>
                <TextInput
                  style={styles.comment}
                  name='comment'
                  placeholder='Write a comment'
                  onChangeText={text => setComment(text)}
                />
                <View style={styles.commentButton}>
                  <Button color='#F47066' onPress={Comment} title='Comment' />
                </View>
              </View>
            </Card>

            <View style={styles.commentCount}>
              <Text style={styles.commentCount}>Comments: {count}</Text>
            </View>

            <ScrollView
              style={styles.commentSect}
              showsVerticalScrollIndicator={false}
            >
              <Card style={styles.commentsInner}>
                {Comments.map((item, index) => (
                  <View style={styles.comments} key={index}>
                    <Text style={styles.txtUserComment}>{item.user}</Text>
                    <Text style={styles.txtComments}>{item.comment}</Text>
                  </View>
                ))}
              </Card>
            </ScrollView>
          </View>
        ) : (

          /**-------------Hidden Description----------------Hidden Description-----------------Hidden Description----------------  */

          <View style={styles.hiddenDescription}>
            <View style={styles.description}>
              <View>
                <Text style={styles.descriptionHead}>{'Description: '}</Text>
                <Text style={styles.descriptionText}>{data.description}</Text>
              </View>
              <View style={styles.close}>
                <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
                  <AntDesign name='closecircle' size={18} color='black' />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.descriptionBox}>
              <Text>{data.description}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  videoContainer: {
    width: '100%',
    backgroundColor: '#f7eeed'
  },

  video: {
    width: 360,
    height: 220
  },

  statusOff: {
    width: '100%',
    alignItems: 'center'
  },

  title: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  vidTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#F47066'
  },

  viewCount: {
    width: 340,
    left: 2
  },

  dropdown: {
    marginLeft: 25,
    marginTop: 20
  },

  socialIcons: {
    width: 360,
    flexDirection: 'row',
    marginTop: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f47066',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  like: {},

  dislike: {
    marginTop: 3
  },

  shareIcon: {
    marginLeft: 8
  },

  shareText: { paddingTop: 5 },

  save: {
    left: -15
  },

  saveIcon: {
    left: 8
  },

  saveText: { paddingTop: 5 },

  avatar: {
    width: 340,
    marginTop: 25,
    flexDirection: 'row'
  },

  owner: { paddingTop: 15 },

  txtCards: {
    width: 340,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#F47066'
  },

  commentBox: { flexDirection: 'row' },

  comment: {
    width: 295,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10
  },

  commentButton: {
    width: 90,
    height: 50,
    borderRadius: 15,
    marginTop: 2,
    left: -5
  },

  commentCount: {
    width: 340,
    alignItems: 'flex-start'
  },

  commentSect: { height: 220 },
  commentsInner: {
    height: 340,
    width: 340
  },

  comments: {
    width: 295,
    left: 3,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#f47066',
    paddingLeft: 5
  },

  txtUserComment: {
    padding: 10,
    fontSize: 18,
    color: '#fff'
  },

  txtComments: {
    color: '#fff',
    padding: 10
  },

  hiddenDescription: {
    backgroundColor: '#fff',
    marginTop: 15
  },

  description: {
    width: 340,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  descriptionHead: {
    fontWeight: 'bold',
    color: '#F47066',
    fontSize: 22
  },

  descriptionText: {
    maxWidth: 315,
    paddingLeft: 20
  },

  close: {
    // marginTop: 5
  },

  descriptionBox: {
    width: 340,
    marginTop: 25,
    alignItems: 'flex-start'
  }
})

export { Clone }
