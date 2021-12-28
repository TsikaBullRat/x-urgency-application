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

      });
  let amount = 0

  return amount;
};

export { Count };
