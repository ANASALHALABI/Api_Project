let container = document.createElement('div');

document.body.appendChild(container);

container.style.textAlign= 'start';

const ApiURL = "https://jsonplaceholder.typicode.com/posts"

function creatCard(UId, IDFun, UTitle, UBody){

    //elemnts
    let card = document.createElement('div')
    let userId = document.createElement('p');
    let Id = document.createElement('p');
    let Title = document.createElement('p');
    let userBody = document.createElement('p');

    //Content
    let userIdContent = document.createTextNode('UserId: ' + UId);
    let idContent = document.createTextNode('Id: ' + IDFun);
    let TitleContent = document.createTextNode('Title: ' + UTitle);
    let bodyContent = document.createTextNode('body: ' + UBody);

    card.style.width= '250px';
    card.style.background= 'gray';
    card.style.padding= '10px';
    card.style.margin= '10px';
    card.style.display= 'inline-block';

    //Append
    userId.appendChild(userIdContent);
    Id.appendChild(idContent);
    Title.appendChild(TitleContent);
    userBody.appendChild(bodyContent);

    card.appendChild(userId);
    card.appendChild(Id);
    card.appendChild(Title);
    card.appendChild(userBody);
    container.appendChild(card);
}

async function getApi(){
    const response = await fetch(ApiURL);
    let data = await response.json();
    console.log(data);
    for (let i = 0; i < 100; i++){
        creatCard(data[i].userId, data[i].id, data[i].title + "", data[i].body + "");
        // creatCard(1, 2 , "asncalkmdkmc", "cdskubckndlv oico" );
    }
}

getApi();

