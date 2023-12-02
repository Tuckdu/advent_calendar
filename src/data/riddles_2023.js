import rebus_bonhomme from "../media/riddle_images/rebus/bonhomme.png"
import rebus_buche from "../media/riddle_images/rebus/buche.png"
import rebus_sucre_dorge from "../media/riddle_images/rebus/sucre_dorge.png"
import rebus_calendrier from "../media/riddle_images/rebus/calendrier.png"

import joke_claustrophobie from "../media/riddle_images/blagues/claustrophobie.webp"
import joke_dodu_svelte from "../media/riddle_images/blagues/dodu_svelte.webp"
import joke_flaque from "../media/riddle_images/blagues/flaque.png"
import joke_pas_sage from "../media/riddle_images/blagues/pas_sage.png"
import joke_sapin_boules from "../media/riddle_images/blagues/sapin_boules.webp"

const category_obj = {
    joke: 'Blague de Noël',
    rebus: 'Rébus de Noël',
    fouras: 'Enigme du père Fouras',
    layton: 'Casse-tête du Professeur Layton'
}

// ----------- Casse-tête du professeur Layton --------------- \\

const layton_candle = {
    text: `Dix bougies sont allumées dans votre salle à manger. 
    Un courant d'air vient éteindre deux d'entre elles. 
    Plus tard, vous vous rendez compte d'une bougie supplémentaire s'est eteinte. 
    Vous fermez la fenêtre afin de vous assurez qu'aucune autre bougie ne s'éteindra. \n\n
    En supposant que le vent ne vous perturbera plus, combien de bougie va-t-il vous rester ?`,
    response: [3, 'trois', 'trois bougies']
}

const layton_cell = {
    text: `Un microbe se retrouve dans une bouteille. 
    Au bout d'une minute, ce microbe se dédouble. 
    Une autre minute passe et les deux microbes se dédoublent à leur tour pour donenr quatre microbes. 
    Si ce processus se poursuit, la bouteille sera remplie au bout d'une heure. \n\n 
    Au bien de combien de minutes la bouteille sera-t-elle remplie si vous commencez avec deux microbes au lieu d'un ?`,
    response: [59, '59 minutes']
}

const layton_horse = {
    text: `Trois chevaux de course galopent à une vitesse différente. 
    Voici ce qu'ils sont capables de parcourir en une minute :\n
    Cheval A : 2 tours\n
    Cheval B : 3 tours\n
    Cheval C : 4 tours\n
    Les chevaux sont alignés sur la ligne de départ et commencent à galoper dans la même direction.\n\n
    Au bout de combien de temps les trois chevaux se trouveront-ils à nouveau en même temps sur la ligne de départ ?\n
    Votre réponse doit être exprimée en minutes.`,
    response: [1, 'un', 'une minute']
}

const layton_mouse = {
    text: `Les souris sont connues pour se multiplier à la vitesse de l'éclair. 
    Le type de souris qui nous intéresse ici est capable de mettre à bas une fois par mois. 
    Par portée de douze. Les souriceaux deviennent capables de se procréer au bout de deux mois. \n\n
    Vous avez acheté un des souriceaux le jour de sa naissance. 
    Au bout de dix mois, combien de souris aurez-vous ?`,
    response: [1, 'une', 'un', 'une souris']
}

const layton_candy = {
    text: `Trois garçons sont en train de discuter du nombre de bonbons qu'ils ont. \n\n
    A : C'est B qui en a le plus.\n
    B : Si C m'en donne un, j'en aurais deux fois plus que A.\n
    C : Il vaudrait mieux que B m'en donne deux comme ça on en aurait tous autant !\n\n
    Combien de bonbons y a-t-il en tout ?`,
    response: [9, 'neuf', 'neuf bonbons']
}

// ----------- Casse-tête du professeur Layton --------------- \\

const fouras_ble = {
    text: `Mûr à point, l’été il est fauché ;
    Fauché, on l’est de n’en point avoir.`,
    response: "le blé"
}

const fouras_nez = {
    text: `Il a une arête et deux ailes de chaque côté.
    Parfois comparé à une trompette, qui n’est pas forcément bouchée.`,
    response: "le nez"
}

const fouras_matin = {
    text: `Il est bon quand il est tôt.
    Quand il est tôt, il est petit.
    Mais aussi il peut être beau.
    Et quand il est tard, il est fini.`,
    response: "le matin"
}

const fouras_mirroir = {
    text: `S’il vous voit vieillir sans jamais rien vous dire,
    C’est parce qu’il est poli.
    Alors réfléchissez,
    Dites-moi de qui il s’agit.`,
    response: "le mirroir"
}

const fouras_chemin = {
    text: `On le demande,
    On le poursuit,
    On le perd,
    On le passe.`,
    response: "le chemin"
}

const fouras_signature = {
    text: `Chacun a la sienne que nul ne doit copier,
    Car l’imiter peut nous faire emprisonner.
    Fameuse et attestée, elle est collectionnée
    Et pourtant, une simple croix peut la remplacer.`,
    response: "la signature"
}

const fouras_today = {
    text: `À peine fini, il se perd dans le passé
    Et ne peut être ajourné.
    Demain, ce ne sera plus qu’hier,
    Hier, c’était simplement demain.`,
    response: "aujourd'hui"
}

const fouras_messe = {
    text: ` A minuit on la célèbre,
    Basse! elle ne fait rien pour qu'on l'entende.`,
    response: "la messe"
}

const fouras_coucou = {
    text: `Vieux zinc tout bricolé
    Ou oiseau de grande ponctualité,
    C’est aussi une façon de se héler.`,
    response: "le coucou"
}

const fouras_or = {
    text: `C’est un étalon qui ne galope pas,
    Un âge bienheureux et plein d’éclat,
    Et s’il se laisse facilement aplatir,
    On ne prend pas ses feuilles pour écrire.`,
    response: "l'or"
}


// ------------------------------------------------------------------------ \\

export let datas = [
    {
        day: 1,
        title: category_obj.rebus,
        img: rebus_calendrier,
        riddle: null,
        response: "calendrier de l'avent"
    },
    {
        day: 2,
        title: category_obj.layton,
        img: null,
        riddle: layton_horse.text,
        response: layton_horse.response
    },
    {
        day: 3,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_ble.text,
        response: fouras_ble.response
    },
    {
        day: 4,
        title: category_obj.joke,
        img: joke_claustrophobie,
        riddle: null,
        response: null
    },
    {
        day: 5,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_chemin.text,
        response: fouras_chemin.response
    },
    {
        day: 6,
        title: category_obj.layton,
        img: null,
        riddle: layton_mouse.text,
        response: layton_mouse.response
    },
    {
        day: 7,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_coucou.text,
        response: fouras_coucou.response
    },
    {
        day: 8,
        title: category_obj.rebus,
        img: rebus_buche,
        riddle: null,
        response: "buche de noël"
    },
    {
        day: 9,
        title: category_obj.joke,
        img: joke_sapin_boules,
        riddle: null,
        response: null
    },
    {
        day: 10,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_matin.text,
        response: fouras_matin.response
    },
    {
        day: 11,
        title: category_obj.layton,
        img: null,
        riddle: layton_candy.text,
        response: layton_candy.response
    },
    {
        day: 12,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_messe.text,
        response: fouras_messe.response
    },
    {
        day: 13,
        title: category_obj.joke,
        img: joke_dodu_svelte,
        riddle: null,
        response: null
    },
    {
        day: 14,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_nez.text,
        response: fouras_nez.response
    },
    {
        day: 15,
        title: category_obj.rebus,
        img: rebus_sucre_dorge,
        riddle: null,
        response: "sucre d'orge"
    },
    {
        day: 16,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_or.text,
        response: fouras_or.response
    },
    {
        day: 17,
        title: category_obj.joke,
        img: joke_flaque,
        riddle: null,
        response: null
    },
    {
        day: 18,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_signature.text,
        response: fouras_signature.response
    },
    {
        day: 19,
        title: category_obj.layton,
        img: null,
        riddle: layton_cell.text,
        response: layton_cell.response
    },
    {
        day: 20,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_today.text,
        response: fouras_today.response
    },
    {
        day: 21,
        title: category_obj.layton,
        img: null,
        riddle: layton_candle.text,
        response: layton_candle.response
    },
    {
        day: 22,
        title: category_obj.rebus,
        img: rebus_bonhomme,
        riddle: null,
        response: "bonhomme de pain d'épice"
    },
    {
        day: 23,
        title: category_obj.joke,
        img: joke_pas_sage,
        riddle: null,
        response: null
    },
    {
        day: 24,
        title: category_obj.fouras,
        img: null,
        riddle: fouras_mirroir.text,
        response: fouras_mirroir.response
    },
]