// pages/contact.tsx
import * as React from 'react';
import Navbar from "@/components/navbar"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupIcon from '@mui/icons-material/Group';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
  
const contactLinks = [
    {Text: 'GroupMe', URL: "https://groupme.com/join_group/93967061/RJmkKNJD", Avatar: GroupIcon},
    {Text: 'Discord', URL: "https://discord.gg/xx5zghFqkP", Avatar: ChatBubbleOutlineIcon},
    {Text: 'Instagram', URL: "https://www.instagram.com/umdtso/", Avatar: InstagramIcon},
    {Text: 'TerpLink', URL: "https://terplink.umd.edu/organization/turkish-student-organization", Avatar: InsertLinkIcon}

];

const ContactUs = () => {
    return ( 
        <div>
            <Navbar />
            <List>
            {contactLinks.map((link, index) =>(
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            {React.createElement(link.Avatar)}
                        </Avatar>
                    </ListItemAvatar>
                    <a href={link.URL} target="_blank">{link.Text}</a>
                </ListItem>
            ))}
            </List>
        </div>
    );
};
export default ContactUs;
