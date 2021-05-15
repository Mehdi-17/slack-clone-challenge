import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItems = [
    {
        icon :  <MessageIcon />,
        text: 'Fils de discussion'
    }, 
    {
        icon :  <InboxIcon />,
        text: 'Tous les messages directs'
    },
    {
        icon :  <DraftsIcon />,
        text: 'Mentions & Réactions'
    },
    {
        icon :  <BookmarkBorderIcon />,
        text: 'Eléments enregistrés'
    },
    {
        icon : <PeopleIcon />,
        text : 'Contacts & Groupes'
    },
    {
        icon :  <AppsIcon />,
        text: 'Voir Plus'
    }
]