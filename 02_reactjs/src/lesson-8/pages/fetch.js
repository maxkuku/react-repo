import React, {useCallback,useState,useEffect} from "react";
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'
import { ListGroup, Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";


// https://reqres.in/api/users?page=1

/**
 * @param page
 * @param per_page
 * @param total
 * @param total_pages
 * @param data
 */


const initialState = {
    page: 1,
    per_page: 1,
    total: 0,
    total_pages: 0,
    data: [],
}


export const FetchExample = (props) => {




    const [users,setUsers] = useState(initialState);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);


    const resetUsers = () => {
        setUsers({
            ...users,
            data: [],
        });
    }

    const resetDataUsers = () => {
        setUsers(initialState);
    }


    const fetchLoadMoreUsers = async (page = 1) => {
        setError(undefined);
        setLoading(true);
        
        try {
            
            const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)

            if(!response.ok) {
                throw new Error('users not loading')
            }

            const result = await response.json();

            setUsers({
                ...result,
                data: [
                    ...users.data,
                    ...result.data
                ]
            });

           

        } catch (e) {

            setError(e)
        }
        setLoading(false);
    }


    const fetchUsers = async (page = 1) => {
        setError(undefined);
        setLoading(true);
        
        try {
            
            const response = await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)

            if(!response.ok) {
                throw new Error('users not loading')
            }

            const result = await response.json();

            setUsers(result);

           

        } catch (e) {

            setError(e)
        }
        setLoading(false);
    }


    useEffect(() => {

        fetchUsers()
    }, [])



    /**
     * user:
     * id,
     * email,
     * first_name,
     * last_name,
     * avatar
     */


    return (
        <div>
            <h1>Fetch Example Index (pages/fetch.js)</h1>

            <div>
                {
                    isLoading && <Loader/>
                }


                {
                    error && <Error reload={() => {
                        resetUsers();
                        fetchUsers();
                    }} />
                }


                {
                    !isLoading && !error && <ListGroup className='flex-wrap-wrap'>
                        {
                            users?.data?.map((user) => (
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
                    Array.from({length: users.total_pages}).map((_, index) => (<Button key={index} onClick={() => {
                        resetDataUsers();
                        fetchUsers(index + 1)
                    }}>{index + 1}</Button>))}

                    {/* {
                        <Button onClick={() => {
                            if(users.page + 1 <= users.total_pages) {
                            fetchLoadMoreUsers(users.page + 1)
                            }
                        }}>Далее</Button>
                    } */}
                </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    )
}