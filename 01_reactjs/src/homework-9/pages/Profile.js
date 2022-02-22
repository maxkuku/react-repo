import { React } from 'react';
import { List, ListItem } from "@material-ui/core"
import { auth } from "../firebase"


export const Profile = () => {
    auth.map((item, ind) => <List>
        {
            <ListItem>{item[ind]}</ListItem>
        }
    </List>)
}