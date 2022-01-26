import { firestore } from "..";

const Count = async (doc) => {
    let collection1 = firestore.collection("Videos")
    let document = collection1.doc(doc)
    let collection2 = document.collection("Acts")
    let process =  await collection2.onSnapshot((query) => {
        var total;
        query.forEach((doc) => {
            let span
          if (doc.data().comments !== null) {
            let item = doc.data();
            // span = item.length;
          }
          total += span;
          console.log(total)
          return total;
        });

        
        return total;

      })
}
const Collect = async(doc) =>{
    let collector = await firestore.collection('Videos').doc(doc).collection('Acts')
    let comments = await collector.onSnapshot(async query=>{
            let throwback = await query.forEach(doc=>{
                let filter = doc.data()
                return filter.comments
            })
            return throwback
        })

    return comments
}

export { Count, Collect }