import { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProfileNav } from '../Profile/components/ProfileNav';
import { Favorites, Help, UserInfo } from "./routes";




export const Profile = (props) => {

    const navigation = useMemo(() => ([
        {
            to: `${props.parent}`,
            title: "Info"
        },
        {
            to: `${props.parent}/favorites`,
            title: "Favorites"
        },
        {
            to: `${props.parent}/help`,
            title: "Help"
        },
    ]),[props.parent])



    return (
        <div>

        <h1>Profile</h1>

            <ProfileNav navigation={navigation} />

            <Switch>
                <Route path={`${props.parent || 'profile'}/favorites`} component={Favorites}/>
                <Route path={`${props.parent || 'profile'}/help`} component={Help}/>
                <Route path={`${props.parent || 'profile'}/`} component={UserInfo}/>
            </Switch>

           
        </div>
    )
}