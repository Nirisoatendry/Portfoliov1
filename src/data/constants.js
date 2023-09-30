
import reactImage from "../images/react.png";
import AngularImage from "../images/angular.png";
import HtmlImage from "../images/html.png";
import CssImage from "../images/css.png";
import JavascriptImage from "../images/javascript.png";
import BootstrapImage from "../images/Bootstrap.png";
import MuiImage from "../images/material.svg";
import JsImage from "../images/js.png";
import ExpressImage from "../images/Express.png";
import MySqlImage from "../images/mysl.png";
import PostImage from "../images/post.png";
import BankImage from "../images/Bankinit.png";
import Front from "../images/Front.png";
import Back from "../images/Back.png";
import Commentaire from "../images/Commentaire.png";
import Detection from "../images/happy.png";
import WpImage from "../images/wp.png";
export const Bio = {
    name : "RAKOTONDRAINIBE Nirisoa Tendry",
    roles : [
        "Front-end Developer",
        "Back-end Developer"
    ],
    description : 
    "Je suis une personne motivée et polyvalente, toujours prête à relever de nouveaux défis.",
    github : "https://github.com/Nirisoatendry",
    resume : 
    "https://drive.google.com/file/d/1DMTGjKXIRR_X_ZHOthjbqrqYnWWLO_pz/view?usp=drive_link",
    codesignal : "https://app.codesignal.com/profile/rakotondra_t",
    linkedin: "www.linkedin.com/in/nirisoa-tendry-rakotondraini-b73634227",
    facebook : "https://web.facebook.com/tendry.nirisoa/"
};

export const skills = [
    {
        title : "Frontend",
        skills : [
            {
                name : "React JS",
                image : reactImage,
            },
            {
                name : "Angular JS",
                image : AngularImage,
            },
            {
                name : "HTML",
                image : HtmlImage,
            },
            {
                name : "CSS",
                image : CssImage,
            },
            {
                name : "Javascript ",
                image : JavascriptImage,
            
            },
            {
                name : "Bootstrap",
                image : BootstrapImage
            },
            {
                name : "Material MUI",
                image : MuiImage
            },
            {
                name : "Wordpress",
                image : WpImage,
            }
        ]
    },
    {
        title : "Backend",
        skills : [
            {
                name : "Node Js",
                image : JsImage,
            },
            {
                name : "Express Js",
                image :  ExpressImage,
            },
            {
                name : "MySQL",
                image :  MySqlImage,
            },
            {
                name : "Postgresql",
                image :  PostImage,
            }
        ]
    }
  
]

export const experiences = [
    {
        id: 0,
        img:"",
        role: "Frontend developper",
        company : 'Hackaton Orange Digital Center',
        date:'30 Juin  2023',
        desc:"J'ai travaillé sur le frontend de l'application web Busnay (startup de l ' Orange )en utilisant ReactJS et TailWind Css",
        skills:[
            "ReactJS",
            "TailWind CSS"
        ]
    }
]

export const projects = [
    {
        id: 0, 
        title: "BankInit",
        date: "2022",
        description : "J'ai appris l' Angular en pratiquant ce dernier avec ce petit projet de Gestion des Prets dans une Banque",
        image : BankImage,
        tags: [
            "Angular Js",
        ],
        category: "web app",
        github: ""
    },
    {
        id: 1, 
        title: "Exercice de base de Backend",
        date: " Aout 2023",
        description : "Consommation  et manipulation  des données d'un API,utilisation de  la pagination pour obtenir la liste complète de toutes les ressources en une seule fois.Il y a aussi un trier un tableau d'objets",
        image : Back,
        tags: [
            "Express Js"
        ],
        category: "web app",
        github: "https://github.com/Nirisoatendry/nodejs_exercise",
    },
    {
        id: 2, 
        title: "Exercice de base de Frontend",
        date: " Aout 2023",
        description : "Dans ce défi,Je me suis  accéder à un flux JSON des articles scientifiques les plus populaires du New York Times et j'ai utlisé React Js  pour créer une interface permettant de les afficher en afficheant  une liste d'articles,Mettre en œuvre une fonction de recherche pour filtrer dynamiquement les articles et  les termes de recherche doivent correspondre aux attributs suivants de l'article : titre, signature et section",
        image : Front,
        tags: [
            "React Js"
        ],
        category: "web app",
        github: "https://github.com/Nirisoatendry/code_challenge",
    },
    {
        id: 3, 
        title: "Analyse des commentaires",
        date: "2023",
        description : "Ce projet consiste à analyser des commentaires (les données ont été télécharger dans Kaggle) et donne un résultat comme neutral par exemple .J'ai généré le modèle en utilisant le Naive Bayes",
        image : Commentaire,
        tags: [
            "React Js",
            "Python",
            "Flask"
             
        ],
        category: "machine learning",
        github: "",
    }
    ,
    {
        id: 4, 
        title: "Detection de Face",
        date: "2023",
        description : "Ce projet consiste à detecter des faces (les données FER2013 ont été télécharger dans Kaggle) et donne un résultat comme happy par exemple .J'ai généré le modèle en utilisant keras.models ",
        image : Detection,
        tags: [
            "React Js",
            "Express Js",
            "Python",
            "Flask"
             
        ],
        category: "machine learning",
        github: "",
    }
]

export const education = [
    {
        id: 0,
        img : "",
        school:"Candidate libre",
        date: "2017",
        degree: "Bachelier série C"
    },
    {
        id: 1,
        img : "",
        school:"Departement de Mathématiques et Informatique",
        date: "2018-2020",
        degree: "License 2"
    },
    {
        id: 2,
        img : "",
        school:"MISA",
        date: "2021-2022",
        degree: "License3"
    },
    {
        id: 3,
        img : "",
        school:"MISA",
        date: "2022-presente",
        degree: "Master I"
    }
]