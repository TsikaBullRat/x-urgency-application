import { storage, app } from '../config'
import firebase from 'firebase'
import {v4 as uuidv4} from 'uuid'

const LoadSet = (Load) => {

    var content = []
    var i = 0
    var getLink
    
    storage.ref().child('').listAll()
        .then(res=>{
            res.items.forEach(async itemRef=>{
                
                getLink = itemRef.getDownloadURL().then(url=>url)
                let link = await getLink
                let name = itemRef.name
                content=[...content, {id: i++, url: link, title: name}]
                Load(content)
            })
            
        })
        .catch(err=>{
            return null
        })
}

const Upload = async(uri) =>{
    
    console.log(uri)
    var upload = storage.ref().child(`${uuidv4()}.mp4`).put(uri.uri)
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

// const SelectImage = () =>{

// }

//Possible solution 1

/*
const Upload = async(file) =>{

    file?getFile(file):null
}

const getFile = (file) =>{

    var reader = new FileReader();

    reader.readAsDataURL(file)

    reader.onprogress = Progress
    reader.onload = Loaded
    reader.onerror = Handler

}

const Progress = (evt) =>{
    if(evt.lengthComputable){
        var Loaded = (evt.loaded / evt.total)
        if(Loaded < 1){

        }
    }
}

const Loaded = (evt) =>{

    var fileString = evt.target.result
    Finish(fileString)

    // // if(utils.regexp.isChinese(fileString)){

    // // }else{

    // // }
    // // xhr.send(fileString)
}

const Handle = (evt) =>{
    if(evt.target.error.name == "NotReadableError"){
        console.log(evt.target.error)
    }
}

const Finish = (file) =>{
    // var file = new File(['Image'], uri, {type:'image'})
    var upload = storage.ref().child(file)

    upload.put(file)
        .then(snapshot=>{
            console.log('Uploaded a blob or file')
        })
        .catch(err=>{
            console.log(err)
        })
}*/

export { LoadSet, Upload }
