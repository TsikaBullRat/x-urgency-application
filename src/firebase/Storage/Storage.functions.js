import { storage } from '../config'

const LoadSet = async (Load) => {

    var content
    let list = await storage.ref().child('').listAll()
        .then(res => {
            res.items.forEach(itemRef => {
                let link = itemRef.toString()
                let name = itemRef.name
                content = [...content, { link: link, title: name }]
                return content
            })
            return content
        })
        .then(item => console.log(item))
        .catch(err => {
            return null
        })
    console.log(list)
    Load(list)
}

export { LoadSet }