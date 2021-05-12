import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItems = [
    {
        icon :  <MessageIcon />,
        text: 'Thread'
    }, 
    {
        icon :  <InboxIcon />,
        text: 'Messages Privés'
    },
    {
        icon :  <DraftsIcon />,
        text: 'Mentions & Réactions'
    },
    {
        icon :  <BookmarkBorderIcon />,
        text: 'Eléments Sauvegardés'
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