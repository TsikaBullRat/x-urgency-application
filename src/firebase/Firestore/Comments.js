import { firestore } from ".."

const Count = async doc =>{

    let count = await firestore.collection('Videos').doc(doc).collection('Acts')
        .onSnapshot(query=>{
            var total = 0
            query.forEach(doc=>{
                let item = doc.data()
                let span = item.length
                total += span
                return total
            })
            return total
        })
    
    return count
}

export {Count}