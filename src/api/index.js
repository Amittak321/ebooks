import axios from '../axios-fetch';

export const fetchData = async()=>{
    let res;
    try {
        res = await axios.get("ebooks.json");
        let fetchedBooks = [];
        for (let key in res.data) {
          fetchedBooks.push({
            ...res.data[key], 
            id: key,
          });
        }
        return fetchedBooks;
    } catch (error) {
        return error
    }
}

export const fetchCategories =async ()=>{
    let res ;
    try{
        res = await axios.get("ebooks.json");
        let fetchCategory = [];
        for (let key in res.data) {
          fetchCategory.push({
            ...res.data[key],
            id: key,
          });
        }
        return getCategory(fetchCategory);
    }catch(err){
        console.log("error");
    }
}

const getCategory = (fetchCategory) => {
    let category = [];
    for (let key in fetchCategory) {
      if (category.indexOf(fetchCategory[key].category === -1)) {
        category.push(fetchCategory[key].category);
      }
    }
    let uniqueCategory = category.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    return uniqueCategory;
  };