/*  Consegna
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto:
    
        Name            Role                    Picture
    Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
    Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
    Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
    Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
    Scott Estrada	Developer	            scott-estrada-developer.jpg
    Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

"use strict";

//creo gli oggetti con i dati a disposizione
const memberList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    },
]

// stampo in console in successione tutti i dati in ordine

for (let i = 0; i < memberList.length; i++) {

    console.group('card');
    console.log(memberList[i].name);
    console.log(memberList[i].role);
    console.log(memberList[i].picture);
    console.groupEnd();
    let position = document.getElementById('gallery')
    let gallery = document.createElement('div');
    gallery.classList.add('col');
    gallery.innerHTML = ` 
        <div class="card mb-5" style="width: 18rem;">
            <img src="Img/${memberList[i].picture}" class="card-img-top" alt="${memberList[i].picture}">
            <div class="card-body">
                <h5 class="card-title text-center">${memberList[i].name}</h5>
                <p class="card-text text-center">${memberList[i].role}</p>
            </div>
        </div> `
    position.append(gallery);
};


