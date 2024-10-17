import man_U from '../public/manchester_united.png'
import man_City from '../public/man_city.png'
import arsenal from '../public/arsenal.png';
import chelsea from '../public/chelsea.png';
import liverpool from '../public/liverpool.png';
import aston_Villa from '../public/aston-villa.png';
export const subNavbarData = [
    {
        title: "Football",
        path: "/football",
    },
    {
        title: "Cricket",
        path: "/cricket",
    },
    {
        title: "Basketball",
        path: "/basketball",
    },
    {
        title: "Tennis",
        path: "/tennis",
    },
    {
        title: "Hockey",
        path: "/hockey",
    },
];

export const sideBarData = [
    {
        regions: [
            { title: "England", icon: "fi-gb-eng" }, 
            { title: "France", icon: "fi-fr" }, 
            { title: "Germany", icon: "fi-de" },
            { title: "Italy", icon: "fi-it" },
            { title: "Spain", icon: "fi-es" },
        ]
    },
    {
        teams: [
            { title: "Man United", img: man_U, league: "England" },
            { title: "Liverpool", img: liverpool, league: "England" },
            { title: "Man City", img: man_City, league: "England" },
            { title: "Arsenal", img: arsenal, league: "England" },
            { title: "Chelsea", img: chelsea, league: "England" },
            { title: "Aston Villa", img: aston_Villa, league: "England" },
        ]
    }
];
