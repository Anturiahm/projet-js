FONCTION getGamesList()
DÉBUT

    Retourner [
        ["Football Manager 2022", "Sport", 2022, "PC"],
        ["Resident Evil 4 Remastered", "TPS", 2023],
        ["Snake", "Puzzle", 1997, "3310"]
    ]

FIN

FONCTION generateHeader(headers)
DÉBUT
    Déclarer elt_thead <- "créer un élément thead"
    Déclarer elt_tr <- "créer un élément tr"

    Déclarer i <- 0
    TANT QUE i < headers.length  FAIRE
        Déclarer elt_th <- "créer un élément th"
        elt_th.innerHTML <- headers[i]
        Rattacher elt_th à elt_tr
        i <- i+1
    FINTANTQUE

    Rattacher elt_tr à elt_thead
    Retourner elt_thead
FIN

FONCTION formatGame(SingleGame)
DÉBUT
    Déclarer elt_tr <- "créer un élément tr"

    Déclarer i <- 0
    TANT QUE i < SingleGame.length  FAIRE
        Déclarer elt_td <- "créer un élément td"
        elt_td.innerHTML <- SingleGame[i]
        Rattacher elt_td à elt_tr

        i <- i+1
    FINTANTQUE

    Retourner elt_tr
FIN

FONCTION generateHTMLTRList(JSTable)
DÉBUT
    Déclarer elt_tbody <- "créer un élément tbody"

    Déclarer i <- 0
    TANT QUE i < JSTable.length  FAIRE
        Déclarer elt_tr <- formatGame(JSTable[i])
        Rattacher elt_tr à elt_tbody
        i <- i+1
    FINTANTQUE

    Retourner elt_body
FIN

FONCTION generateHTMLTableFromJSArray(JSTable)
DÉBUT
    Déclarer HTMLTable <- "créer un élément table"
    Déclarer headers <- [ "Titre", "Genre", "Année", "Plateforme"]
    Déclarer tableheader <- generateHeader(headers)
    Rattacher tableheader à HTMLTable
    Déclarer tablebody <- generateHTMLTRList(JSTable)
    Rattacher tablebody à HTMLTable
    Retourne HTMLTable

FIN

PROGRAMME buildHTMLTable
DÉBUT
    Déclarer games <- getGamesList()
    console.log(games);

    Déclarer games_html <- generateHTMLTableFromJSArray(games)
    console.log(games_html);

    /*
    Déclarer parent <- "tabjeux"
    attachHTMLGamesArrayToContainer(parent, games_html)
    */

FIN



