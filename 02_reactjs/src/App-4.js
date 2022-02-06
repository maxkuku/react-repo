import {Switch,Route} from 'react-router-dom';
import {Layout} from './lesson-4/components'
import {Home, Posts, Profile} from './lesson-4/routes';
import { Comments } from './lesson-4/routes/Comments';
import {Post} from './lesson-4/routes/Post'
import {getHomeLink, getPostsLink, getPostByIdLink, getPostCommentsLink, getProfileLink} from './lesson-4/navigation'


export default function App() {
    return ( 
    <Layout>
        <Switch >
            <Route exact path = {getHomeLink()} component = {Home}/> 


            <Route path = {getProfileLink()}>
                <Profile parent={getProfileLink()}/>
            </Route> 




            <Route path = {getPostByIdLink()}>
                <Post>
                    <Route path = {getPostCommentsLink()} component = {Comments}/>
                </Post>
            </Route>   
               
            <Route path={getPostsLink()} component={Posts}/>    
        </Switch> 
    </Layout>
    )
}