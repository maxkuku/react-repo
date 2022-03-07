import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersWithThunk } from "../store/users/action";
import { getError, getLoading, getUsers } from "../store/users/selector";
import { ListGroup, Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'



export const MiddlewareExample = (props) => {


    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading)
    const error = useSelector(getError)
    const data = useSelector(getUsers)

    useEffect(() => {
        dispatch(getUsersWithThunk())
    }, [])

    return (
        <div>
            <h1>MiddlewareExample (pages/middleware.js)</h1>

            <div>
                {
                    isLoading && <Loader/>
                }


                {
                    error && <Error reload={() => {
                        dispatch(getUsersWithThunk())
                    }} />
                }


                {
                    !isLoading && !error && <ListGroup className='flex-wrap-wrap'>
                        {
                            data?.data?.map((user) => (
                                <Card style={{ width: '18rem' }} key={user.id}>
                            <Card.Img variant="top" src={user.avatar} />
                            <Card.Body>
                              <Card.Title>{user.first_name} </Card.Title>
                              <Card.Text>
                              {user.first_name} {user.last_name} {user.email}
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
                        
                        dispatch(getUsersWithThunk(index + 1))
                    }}>{index + 1}</Button>))}

                </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    )
}