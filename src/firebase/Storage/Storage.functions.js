import { storage, app, auth, firestore } from '../config'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'

var atob = require('atob')

const LoadSet = (Load) => {

    var content = []
    var i = 0
    var getLink
    var data = firestore.collection('Videos')

    storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(async itemRef => {
                getLink = itemRef.getDownloadURL().then(url => url)
                let link = await getLink
                let find = await data.doc(itemRef.name.split('.')[0]).get().then(data => data.data())
                let name = find.title
                let description = find.description
                console.log(find)
                let date = find.added
                let stamp
                let filter
                content = [...content, { id: i++, url: link, title: name, description: description, stamp: stamp }]
                Load(content)
            })

        })
        .catch(err => {
            return null
        })
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
        owner: auth.currentUser.displayName,
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

export { LoadSet, UploadVideo }
