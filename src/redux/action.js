import Swal from 'sweetalert2'
export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "loading", payload: { data: [], error: "", loading: true } });
    const subjects = ["love", "drama", "criminal", "business"];
    const promises = subjects.map((subject) =>
      fetch(`http://openlibrary.org/subjects/${subject}.json?published_in=1950-2024`)
        .then((res) => res.json())
        .then((data) => data.works)
    );
    const data = await Promise.all(promises);
    dispatch({ type: "success", payload: { data, error: "", loading: false } });
  } catch (error) {
    dispatch({ type: "error", payload: { data: [], error: error.message, loading: false } });
  }
};
export const SearchBox = (title) => async (dispatch, getState) => {
  try {
    const searchRes = await fetch(`https://openlibrary.org/search.json?title=${title}`);
    const searchData = await searchRes.json();
    return {
      docs: searchData.docs || [],};
  } catch (e) {
    return { docs: [] };
  }
};
export const bookId = (title) => async(dispatch,getState) => {
  try {
    const bookRes = await fetch(`https://openlibrary.org/${title}.json`)
    const bookData = await bookRes.json()
    return bookData
  } catch (e) {
    return e
  }
}
export const login = (details, notify, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST", payload: { info: [], checkLogin: false, details: [] } });
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    const user = data.find(item => item.email === details.email && item.password === details.password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      notify("خوش آمدید");
      setTimeout(() => navigate("/"), 3000);
      dispatch({ type: "LOGIN_SUCCESS", payload: { info: "خوش آمدید", checkLogin: true, details: [user] } });
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: { info: "ایمیل یا رمز عبور صحیح نیست", checkLogin: false, details: [] } });
      notify("ایمیل یا رمز عبور صحیح نیست");
    }
  } catch (e) {
    dispatch({ type: "LOGIN_FAILURE", payload: { info: e.toString(), checkLogin: false, details: [] } });
  }
};
export const autoLogin = (details) => async (dispatch) => {
  if (!details) {
    Swal.fire("وارد حساب کاربری خود شوید!");
    return;
  }
  try {
    dispatch({ type: "LOGIN_REQUEST", payload: { info: [], checkLogin: false, details: [] } });
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    const user = data.find(item => item.email === details.email && item.password === details.password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN_SUCCESS", payload: { info: "خوش آمدید", checkLogin: true, details: [user] } });
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: { info: "ایمیل یا رمز عبور صحیح نیست", checkLogin: false, details: [] } });
    }
  } catch (e) {
    dispatch({ type: "LOGIN_FAILURE", payload: { info: e.toString(), checkLogin: false, details: [] } });
  }
};
export const signUp = (details,id) => async(dispatch,getState) => {
  try {
    const res = await fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id,
              username: details.username,
              email: details.email,
              password: details.password,
              confirmPassword: details.confirmPassword,
              favorites: [],
              books: [],
            })
        })
    const data = await res.json();
  } catch (e) {
    console.log(e)
  }
}
export const addToCart = (id,price,title,cover) => (dispatch,getState) => {
  let response = getState().cartItems.data
  response.push({id:id,price:price,title:title,cover:cover,quantity:1})
  let help = {}
      response.map((item, index) => {
        help[item.id] = [item]
        return "a"
      })
      let result = Object.entries(help).map(([id,value])=>{
        return (id,value[0])
        })
      localStorage.setItem("cart",JSON.stringify(result))
  dispatch({type: "successCart",payload: {data:[...result]}})
}
export const savedItem = (id,cover,title) => async(dispatch,getState) => {
  let load = JSON.parse(localStorage.getItem("user"))
  load.favorites.push({id,cover,title})
  const res = await fetch(`http://localhost:5000/users/${load?.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(load)
  })
  const data = await res.json();
  localStorage.setItem("user",JSON.stringify(data))
}
export const pay = (book) => async(dispatch,getState) => {
  let load = JSON.parse(localStorage.getItem("user"))
  load.books.push(...book)
  const res = await fetch(`http://localhost:5000/users/${load?.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(load)
  })
  const data = await res.json();
  localStorage.setItem("user",JSON.stringify(data))
  dispatch({type: "successCart",payload: {data:[]}})
  localStorage.removeItem("cart"); 
}
export const authors = (argument) => async(dispatch,getState) => {
  try {
    const data = await fetch(`https://openlibrary.org/search/authors.json?q=${argument}`)
    const ress = await data.json()
    return ress
  } catch (e) {
    return e
  }
}
export const categoryItem = (subject) => async(dispatch,getState) => {
  const itemRes = await fetch(`http://openlibrary.org/subjects/${subject}.json?published_in=1900-2024`)
    const itemData = await itemRes.json()
    return itemData
} 
export const logOut = () => async(dispatch,getState) => {
  dispatch({type: "LOGIN_FAILURE",payload : { info : [] , checkLogin : false, details:[] } })
  localStorage.removeItem("user"); 
}
export const deleteItem = (index) => async(dispatch,getState) => {
  let response = getState().cartItems.data
  response.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(response))
  dispatch({type: "successCart",payload: {data:[...response]}})
}
export const authorDetails = (id) => async(dispatch,getState) => {
  try {
    const data = await fetch(`https://openlibrary.org/authors/${id}.json`)
    const res = await data.json()
    return res
  } catch (e) {
    return e
  }
}