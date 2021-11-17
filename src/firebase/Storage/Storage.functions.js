import { storage, app } from '../config'
import firebase from 'firebase'
import {v4 as uuidv4} from 'uuid'
// import { atob } from 'buffer'
// import { atob } from 'atob'

var atob = require('atob')

const LoadSet = (Load) => {

    var fs = require('fs')
    var http = require('http')
    var content = []
    var i = 0
    var getLink
    
    storage.ref().child('').listAll()
        .then(res=>{
            res.items.forEach(async itemRef=>{
                getLink = itemRef.getDownloadURL().then(url=>url)
                let link = await getLink
                console.log(link)
                let name = itemRef.name
                content=[...content, {id: i++, url: link, title: name}]
                Load(content)
            })
            
        })
        .catch(err => {
            return null
        })
}

const Upload = async(uri) =>{

    var byteString = atob(uri.split(',')[1])
    var MIMEstring = uri.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for(var i = 0; i<byteString.length; i++){
        ia[i] = byteString.charCodeAt(i)
    }

    var bb = new Blob([ab], {type : MIMEstring})
    var upload = storage.ref().child(`${uuidv4()}.mp4`).put(bb)

    upload.on('state_changed', 
    snapshot=>{
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        console.log("Upload is at " + progress + "%")

        switch(snapshot.state){
            case firebase.storage.TaskState.PAUSED:
                console.log("Task paused")
                break
            case firebase.storage.TaskState.RUNNING:
                console.log("Task running")
                break
        }

    },
    err=>{
        console.log(err)
    })
}

export { LoadSet, Upload }
