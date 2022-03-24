import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import { firestore, auth } from '../config';

function Dislikes({ data, pressed, setPressed }) {

  const [count, setCount] = useState(0)

  const Check = async () => {
    setCount(0)
    await firestore.collection('Videos').doc(data).collection('Acts').where("disliked", "==", true)
      .onSnapshot(query => {
        query.forEach(doc => {
          let patch = 0
          setCount(patch + 1)
        })
      })
  }

  const Like = async () => {
    let thisLike = await firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).get()
      .then(doc => (doc.data().liked))
    let thisDislike = await firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).get()
      .then(doc => (doc.data().disliked))
    thisDislike ? (
      firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
        disliked: false
      }),
      setPressed(!pressed)
    ) : (
      thisLike ? (
        firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
          liked: false,
          disliked: true
        }),
        setPressed(!pressed)
      ) : (
        firestore.collection('Videos').doc(data).collection('Acts').doc(auth.currentUser.uid).update({
          disliked: true
        }),
        setPressed(!pressed)
      )
    )
  };

  useEffect(() => { Check() }, [pressed])

  return (
    <TouchableOpacity onPress={Like}>
      <Entypo name="thumbs-down" size={20} color="black" />
      <Text style={{ paddingTop: 6 }}> {count}</Text>
    </TouchableOpacity>
  );
}

export { Dislikes }