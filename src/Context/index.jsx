import { createContext, useState, useEffect } from 'react'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

        //local storage
        const [localStorageInitialized, setLocalStorageInitialized] = useState(false);
        const [user, setUser] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const changeUser = (event) => setUser(event.target.value) 
        const changeEmail = (event) => setEmail(event.target.value) 
        const changePassword = (event) => setPassword(event.target.value) 

        const submit = () =>{
       
        const datosFormulario = {
            user,
            email,
            password
        };


        // save data in local storage
        localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario))  
        localStorage.setItem('sing-out', JSON.stringify(false));   

        setUser('')
        setEmail('')
        setPassword('')

        window.location.href = '/'
        }

        const [userData, setUserData] = useState({
          username: "",
          password: ""
      });

  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // change account

  const [account, setAccount] = useState(true)
  const closeAccount = () => setAccount(false)
  const openAccount = () => setAccount(true)

  // disable links
  
  const [disableLink, setDisableLink] = useState(false)
  const gumUpLink = () => setDisableLink(true)
  const enableLink = () => setDisableLink(false)


  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //menu
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart · Order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

 
   useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
  }, [])

 

  
  
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  useEffect(() => {  
    const singOut = localStorage.getItem('sing-out')
    if (singOut === 'true' && window.location.pathname !== '/sing-out') {
        window.location.href = '/sing-out';
    }
}, []); 

useEffect(() => {
  if (!localStorageInitialized) {
    // Verificar si la clave 'sing-out' ya existe en localStorage
    if (localStorage.getItem('sing-out') === null) {
      localStorage.setItem('sing-out', JSON.stringify(true))
    }
    setLocalStorageInitialized(true);
  }
}, [localStorageInitialized]);

useEffect(() => {
  const dataFromLocalStorage = localStorage.getItem('datosFormulario');
  const parseData = JSON.parse(dataFromLocalStorage);
  setUserData(parseData || { username: "", password: "" });

}, []); 



  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      isMenuActive,
      setIsMenuActive,
      openAccount,
      closeAccount,
      account,
      setAccount,
      disableLink,
      gumUpLink,
      setDisableLink,
      enableLink,
      user,
      setUser,
      email,
      setEmail,
      password,
      setPassword,
      changeUser,
      changeEmail,
      changePassword,
      submit,
      userData,
      setUserData
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}