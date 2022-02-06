import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";
import { MOCK_POSTS } from "../../helpers/mock";
import {Comments} from '../Comments'
import { getPostCommentsLink } from "../../navigation";



export const Post = (props) => {
    const { postId } = useParams();
    const post = MOCK_POSTS.find((item) => item.id === postId);
    
    if(!post) {
        return <Redirect to="/posts" />;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <Link to={getPostCommentsLink(postId)}>Open comments ({post.comments.length})</Link>

            <Switch>
                <Route path={getPostCommentsLink(postId)} component={Comments}/>
            </Switch>
        </div>
    )
}