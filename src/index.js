import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from './Redux/store';


axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <ChakraProvider>
        <Provider store = {store}>
            <App />
        </Provider>
    </ChakraProvider>
</BrowserRouter>
);
