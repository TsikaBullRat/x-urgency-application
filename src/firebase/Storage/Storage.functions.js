import { storage, app, auth, firestore } from '../config'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'

var atob = require('atob')

const Collect = async (doc, SetCollection, Count) => {
    var count = 0
    var set = []
    await firestore.collection('Videos').doc(doc).collection('Acts')
        .onSnapshot(query=>{
            query.forEach(doc=>{
                let user
                let comment
                let time
                let load = []

                if(doc.data().comments !== undefined){
                    if(doc.data().comments[0] !== null)
                        count = count + doc.data().comments.length
                }

                if(doc.data().comments !== undefined){
                    if(doc.data().comments[0] !== null){
                        for(var i = 0; i < doc.data().comments.length; i++){
                            user = doc.data().user
                            comment = doc.data().comments[i].comment
                            time = doc.data().comments[i].time.toDate()
                            load = [...load, { user, comment, time }]
                        }
                    }
                }
                set = [...set, ...load]
                return { set , count}
            })
            SetCollection(set)
            Count(count)
        })
}

const Post = (comment, video) =>{
    let time = new Date()
    firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).get()
        .then(doc=>{
            if(doc.data().comments[0] !== null){
                firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
                    comments: [...doc.data().comments, {  comment, time}]
                })
            }
            else{
                firestore.collection('Videos').doc(video).collection('Acts').doc(auth.currentUser.uid).update({
                    comments: [{  comment, time }]
                })
            }
            console.log(doc.data())
        })
}
const LoadSet = (Load, query) => {

    var content = []
    var i = 0
    var getLink
    var data = firestore.collection('Videos')
    const getTimeFrame = (date) =>{
        let today = new Date()
        let frame
        let frag
        if(today.getFullYear() === date.getFullYear()){
            if(today.getMonth() === date.getMonth()){
                if(today.getDate() === date.getDate()){
                    if(today.getHours() === date.getHours()){
                        if(today.getMinutes() === date.getMinutes()){
                            if(today.getSeconds() === date.getSeconds()){
                                frame = "Now"
                            }else{
                                frame = "A few seconds ago"
                            }
                        }else{
                            frame = (today.getMinutes() - date.getMinutes()) +" minutes ago."
                        }
                    }else{
                        frame = (today.getHours() - date.getHours()) +" hours ago."
                    }
                }else{
                    frame = (today.getDate() - date.getDate()) +" days ago."
                }
            }else{
                frame = (today.getMonth() - date.getMonth()) +" months ago."
            }
        }else{
            if(((date.getMonth()+1)-(today.getMonth()+1) >= 1)){
                frag = ((date.getMonth()+1)-(today.getMonth()+1))
                frame = frag + " months ago."
            }else{
                frame = (today.getFullYear() - date.getFullYear()) + " years ago"
            }
        }
        return frame
    }

    query?(
        storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(async itemRef => {
                
                var views = 0
                views = await data.doc(itemRef.name.split('.')[0]).collection('Acts').where("viewed", "==", true).get()
                    .then(doc=>{
                        doc.forEach(item=>{
                            item?views+=1:null
                            return views
                        })
                        return views
                    })
                getLink = itemRef.getDownloadURL().then(url => url)
                let link = await getLink
                let find = await data.doc(itemRef.name.split('.')[0]).get().then(data => data.data())
                let name = find.title
                let match = find.match
                let owner = find.owner
                let firestore = itemRef.name.split('.')[0]
                let description = find.description
                let tag = find.tag
                let dateAdded = find.added.toDate()
                let stamp = getTimeFrame(dateAdded)
                content = [...content, { id: i++, url: link, title: name, description, stamp, owner, firestore, tag, match, views}]
                content = content.filter(item=>item.tag===query)
                Load(content)
            })
        })
        .catch(err => {
            return null
        })

    ):(
    storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(async itemRef => {
                var views = 0
                views = await data.doc(itemRef.name.split('.')[0]).collection('Acts').where("viewed", "==", true).get()
                    .then(doc=>{
                        doc.forEach(item=>{
                            item?views+=1:null
                            return views
                        })
                        return views
                    })
                getLink = itemRef.getDownloadURL().then(url => url)
                let link = await getLink
                let find = await data.doc(itemRef.name.split('.')[0]).get().then(data => data.data())
                let name = find.title
                let owner = find.owner
                let firestore = itemRef.name.split('.')[0]
                let description = find.description
                let match = find.match
                let tag = find.tag
                let dateAdded = find.added.toDate()
                let stamp = getTimeFrame(dateAdded)
                content = [...content, { id: i++, url: link, title: name, description, stamp, owner, firestore, tag, match, views}]
                Load(content)
            })
            
        })
        .catch(err => {
            return null
        })
    )
}

const UploadVideo = async (uri, title, description, cat, Log) => {

    var id = uuidv4()
    var byteString = atob(uri.split(',')[1])
    var MIMEstring = uri.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }

    var bb = new Blob([ab], { type: MIMEstring })
    var upload = storage.ref().child(`${id}.mp4`).put(bb)

    firestore.collection('Videos').doc(id).set({
        title: title,
        tag: cat,
        owner: await auth.currentUser.displayName,
        description: description,
        added: new Date()
    })
        .then(() => {
            firestore.collection('Videos').doc(id).collection('Acts').doc('init').set({ start: null })
        })

    upload.on('state_changed',
        snapshot => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            Log(progress)
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    // console.log("Task paused")
                    break
                case firebase.storage.TaskState.RUNNING:
                    // console.log("Task running")
                    break
            }

        },
        err => {
            console.log(err)
        })
}

export { LoadSet, UploadVideo, Collect, Post }
