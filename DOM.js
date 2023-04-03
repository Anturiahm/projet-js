function getGamesList()
{
    let apex = {
            name: "Apex Legends",
            gender: "FPS",
            date: "2019",
            platforms: [
                {
                    name: "PC",
                    editor: "Microsoft",
                },
                {
                    name: "PS4",
                    editor: "Sony",
                },
                {
                    name: "PS5",
                    editor: "Sony",
                },
            ],
        };
        let overwatch = {
            name: "Overwatch",
            gender: "FPS Coop",
            date: "2015",
            platforms: [
                {
                    name: "PC",
                    editor: "Microsoft",
                },
                {
                    name: "PS4",
                    editor: "Sony",
                },
                {
                    name: "PS5",
                    editor: "Sony",
                },
            ],
        };
        let lol = {
            name: "League Of Legends",
            gender: "MOBA",
            date: "2009",
            platforms: [
                {
                    name: "PC",
                    editor: "Microsoft",
                },
            ],
        };

    return [
        apex,
        overwatch,
        lol
    ];

}

function generateHeader(headers)
{
    let elt_thead = document.createElement("thead");
    let elt_tr = document.createElement("tr");

    let i = 0;
    while (i < headers.length) {
        let elt_th = document.createElement("th");
        elt_th.innerHTML = headers[i];
        elt_tr.appendChild(elt_th);
        i = i+1;
    }

    elt_thead.appendChild(elt_tr);
    return elt_thead;
}

function formatPlatforms(platforms)
{
    let ul = document.createElement("ul");
    let i = 0;
    while (i < platforms.length) {
        let li = document.createElement("li");
        li.innerHTML = platforms[i].name;
        li.class= platforms[i].;
        ul.appendChild(li);
        i++;
    }
    return ul;
}

function formatGame(singleGame)
{
    let elt_tr = document.createElement("tr");
    
    let elt_td_name = document.createElement("td");
    elt_td_name.innerHTML = singleGame.name;
    elt_tr.appendChild(elt_td_name);
    let elt_td_gender = document.createElement("td");
    elt_td_gender.innerHTML = singleGame.gender;
    elt_tr.appendChild(elt_td_gender);
    let elt_td_date = document.createElement("td");
    elt_td_date.innerHTML = singleGame.date;
    elt_tr.appendChild(elt_td_date);
    let elt_td_platforms = document.createElement("td");
    elt_td_platforms.appendChild(formatPlatforms(singleGame.platforms));
    elt_tr.appendChild(elt_td_platforms);

    return elt_tr;
}

function generateHTMLTRList(JSTable)
{
    let elt_tbody = document.createElement("tbody");

    let i = 0;
    while (i < JSTable.length) {
        let elt_tr = formatGame(JSTable[i]);
        elt_tbody.appendChild(elt_tr);
        i = i+1;
    }

    return elt_tbody;
}

function generateHTMLTableFromJSArray(JSTable)
{
    let HTMLTable = document.createElement("table");
    let headers = [ "Titre", "Genre", "AnnÃ©e", "Plateforme"];
    let tableheader = generateHeader(headers);
    HTMLTable.appendChild(tableheader);
    let tablebody = generateHTMLTRList(JSTable);
    HTMLTable.appendChild(tablebody);
    return HTMLTable;

}

function attachHTMLGamesArrayToContainer( container, element)
{
    document.querySelector(container).appendChild(element);
}

function buildHTMLTable()
{
    let games = getGamesList();
    console.log("Jeux:");
    console.log(games);

    let games_html = generateHTMLTableFromJSArray(games);
    console.log("Jeux en HTML:");
    console.log(games_html);

    
    let parent = "#games";
    attachHTMLGamesArrayToContainer(parent, games_html)
    

}

buildHTMLTable();
