# Mobile-Shop

this is a computer e-commerce frontend using a given server. User must be able to see all products, access to details of each , and add it to the shopping car. You can add the product with determinate color and determinate model.

## 🚀 to start

to start to ejecuting this code you should:

- Open your terminal in a concret folder
- Ejecute the comand:

```
git clone https://github.com/jonCroatanUto/Computer_Shop.git
```

- Go inside the folder `computer_shop` and run:

```
npm install
```

- Create a `.env` file adding in it:

```
REACT_APP_SERVER_LOCATION=https://front-test-api.herokuapp.com/
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<pre>  
├───.github     <i>// Github actions config files </i>
├───public
├───types.tsx
├───index.css
└───src	
    ├───components
    |        ├───InputText
    |        ├───Item
    |        └───Navbar
    ├───pages
    |       ├───Home
    |       └───Details           
    |     
    | 
    ├─--apiCallls 
    |      
    |               
    └───context
 
   


</pre>

# 🧭 App navigation

## Home page 🗺

Where it's displayed all image by a responsive way using `React-bootstrap`

## ImageDataReducer

By setting the image data in this reducer my aplication is able to observe de modification that recive this data , as an update or deleing files. By this way , the Home page is syncronized with database and refresh the images displayed

## modalReducer

It allows open the modals from any place of the site and pass to the modal the necessary information.

## ModalHoc

It give the same format to all the content that i want to put inside a modal. That save me to write a lot of repetitive code.

# ✨ Wishlist

- Login and Register
- Do a proflie page
- As a user, see the owner of others images ,chat with them, give likes to images
- Stadistic follow of your activity as user

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.
