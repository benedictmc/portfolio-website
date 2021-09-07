import { Link, animateScroll as scroll } from "react-scroll";


let scrollToHome = () => {
    console.log("Scrolling triggered")
    // scroll.scrollToBottom();
    scroll.scrollToTop();
};

let scrollToAbout = () => {
    console.log("Scrolling triggered")
    // scroll.scrollToBottom();
    scroll.scrollTo(1050);
};
let scrollToSkills = () => {
    console.log("Scrolling triggered")
    // scroll.scrollToBottom();
    scroll.scrollTo(2500);
};
let scrollToProjects = () => {
    console.log("Scrolling triggered")
    // scroll.scrollToBottom();
    scroll.scrollTo(3500);
};
let scrollToContact = () => {
    console.log("Scrolling triggered")
    // scroll.scrollToBottom();
    scroll.scrollTo(4500);
};


export const MenuItems = [
    {
        title: 'Home', 
        url: '#',
        cName: 'nav-links',
        scroll : "scrollToHome"

    }, {
        title: 'About', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToAbout"
    },
    {
        title: 'Skills', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToSkills"
    },
    {
        title: 'Projects', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToProjects"
    }, {
        title: 'Contact', 
        url: '#',
        cName: 'nav-links',
        scroll : "scrollToContact"

    }, 
]

export const MenuItemsMobile = [
    {
        title: 'About', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToAbout"
    },
    {
        title: 'Skills', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToSkills"
    },
    {
        title: 'Projects', 
        url: '#',
        cName: 'nav-links', 
        scroll : "scrollToProjects"
    }, {
        title: 'Contact', 
        url: '#',
        cName: 'nav-links',
        scroll : "scrollToContact"

    }, 
]