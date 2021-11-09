import { storage } from '../config'

const LoadSet = (Load) => {

    var content = []
    var i = 0
    window.link
    var getLink = entry => {
        window.link = entry
        return window.link
    }

    storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(itemRef => {

                itemRef.getDownloadURL()
                    .then(url => getLink(url))
                let name = itemRef.name
                content = [...content, { id: i++, url: window.link, title: name }]
                return content
            })
            // console.log(content)
            Load(content)
        })
        .catch(err => {
            return null
        })
}

export { LoadSet }

//https://firebasestorage.googleapis.com/v0/b/x-urge…=media