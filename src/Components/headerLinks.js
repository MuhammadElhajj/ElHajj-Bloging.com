import { CgCalendarDue } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa"

const HeaderLinks = [
{
name : "Home" ,
path : CgCalendarDue ,

},
{
name : "About" ,
path : '#' ,

},
{
name : "Blogs" ,
path : '#',
icon :<FaAngleDown />,
Content : [
    {
        index :2,
        Name : "Blogins" ,
        p: "Nice Blogins",
        path : '#' ,
    },
    // {
    //     index :2,
    //     Name : "News" ,
    //     p: "News of Blogins",
    //     path : '/News' ,
    // },
    {
        index :2,
        Name : "ReStorEm" ,
        p: "Alot of artical about shopping",
        path : '#'
    },
]
},
{
name : "Team" ,
path : '#' ,


},
// {
// name : "Page" ,
// path : 'Page' ,

// },
{
name : "Contact" ,
path : '#' ,


},

];


export default HeaderLinks