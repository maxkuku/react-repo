import { ListItem, ListItemText } from '@material-ui/core';
import propTypes from "prop-types";

export const Chat = ({ name }) => {
    return (
        <ListItem>
          <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

Chat.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
};