import {addDoc , collection} from "firebase/firestore";

export const useAddTransaction = async () => {

    const transactionCollectionRef = collect()
    await addDoc()

    return{addTransaction};
}