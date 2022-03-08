import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons'
import { firestore, auth } from '../config';

function Likes({ data }) {

  const [count, setCount] = useState(0)
  const [pressed, setPressed] = useState(false)
  const Check = async () => {
      await firestore.collection('Videos').doc(data).collection('Acts').where("liked", "==", true)
        .onSnapshot(query => {
          query.forEach(doc => {
            doc.exists ? setCount(count + 1) : null
          })
        })
  }

  const Like = async () => {
      let thisLike = await firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc => (doc.data().liked))
      let thisDislike = await firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc => (doc.data().disliked))
      thisLike ? (
        firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
          liked: false
        }),

        setPressed(!pressed)

      ) : (

        thisDislike ? (
          firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
            liked: true,
            disliked: false
          }),

          setPressed(!pressed)

        ) : (

          firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
            liked: true
          }),

          setPressed(!pressed)

        )
      )
      Check()
  };

  useEffect(() => { Check() }, [pressed])


  return (
        <TouchableOpacity onPress={Like}>
          <Entypo name="thumbs-up" size={20} color="black" />
          <Text style={{ paddingTop: 6 }}> {count}</Text>
        </TouchableOpacity>
  );
}

export { Likes }