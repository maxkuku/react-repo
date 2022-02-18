import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
//import { getUsersWithThunk } from "../../store/cats/action";
//import { getError, getLoading, getUsers } from "../../store/cats/selector";
import { ListGroup, Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'


import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createApiReducer } from "../../helpers/createApiReducer"




export const CatsFromApi = createApiReducer('NEW_CATS', `https://cat-fact.herokuapp.com/facts`);






// console.log(CatsFromApi.reducer)









// перенесено из store/index
const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    cats: CatsFromApi.reducer,
})



const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    persistedReducer, // persistReducer
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store)
///////////////////////////







// перенесено из store/cats/selector
export const getUsersFromStore = (state) => state.users;
export const getUsers = (state) => getUsersFromStore(state).data;
export const getLoading = (state) => getUsersFromStore(state).isLoading;
export const getError = (state) => getUsersFromStore(state).isError;
/////////////////////////////////////





export const Cats = (props) => {


    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading)
    const error = useSelector(getError)
    const data = useSelector(getUsers)


    console.log(data)

    useEffect(() => {
        //dispatch(getUsersWithThunk())
        dispatch(getUsers())
    }, [])

    return (
        <div>
            <h1>Cats (routes/cats.js)</h1>

            <div>
                {
                    isLoading && <Loader/>
                }


                {
                    error && <Error reload={() => {
                        //dispatch(getUsersWithThunk())
                        dispatch(getUsers())
                    }} />
                }


                {
                    !isLoading && !error && <ListGroup className='flex-wrap-wrap'>
                        {
                            data?.data?.map((cat) => (
                            <Card style={{ width: '18rem' }} key={cat._id}>
                            <Card.Body>
                              <Card.Title>{cat.updatedAt} </Card.Title>
                              <Card.Text>
                              {cat.text}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                            ))
                        }
                    </ListGroup>
                }
                <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">


                    {
                    Array.from({length: data?.total_pages}).map((_, index) => (<Button key={index} onClick={() => {
                        
                        //dispatch(getUsersWithThunk(index + 1))
                        dispatch(getUsers(index + 1))
                    }}>{index + 1}</Button>))}

                </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    )
}