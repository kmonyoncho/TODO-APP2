import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
function TodoC(props) {
    return (
        <List className="todo_list"> 
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.text} />
            </ListItem>            
        </List>
    )
}

export default TodoC;
