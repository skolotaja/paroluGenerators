
let tabulasRindas = document.querySelector('.rindas');

let ciparuSkaits;
let variantuSkaits =4;
let papildusVards;

const vardi1 = ['spalvains', 'karsta', 'spurains', 'mazs', 'samtains'];
const vardi2 = ['lacis', 'vista', 'ruksis', 'suns', 'sesks'];
const vardi3 = ['lien', 'klukst', 'lec', 'lido', 'skrien'];
//let parole=vardi1[0];

//let parole1 = vardi1[1] + vardi2[1] + vardi3[1];
//function veidotParoli()

for (let i = 0; i <=variantuSkaits; i++) {
    let parole = vardi1[i] + vardi2[i] + vardi3[i];

    console.log(parole);
    tabulasRindas.innerHTML += `
    <tr>
    <td>`+(i+1)+`</td>
    <td>`+parole+`</td>
    </tr>`;

  }//loop beigas
    //console.log(parole1);


//function veidotParoli(papildusVards,ciparuSkaits)

//let cipari = cipariParolei(ciparuSkaits);
//function generetParoles()
//{
//ciparuSkaits = document.querySelector('#ciparuSkaits').value;
//variantuSkaits = document.querySelector('#variantuSkaits').value;
//}


//console.log(i);
//let random = Math.floor(Math.random() * vardi1.length);
    //let random1 = rand(vardi1);
    //let random2 = rand(vardi2);
    //let random3 = rand(vardi3);
    //parole = vardi1[random1];

    //let paroleVards1 = vardi1[random1];
    //paroleVards1 = paroleVards1.replace('i', '1');
    //let paroleVards2 = vardi1[random2];
    //let paroleVards3 = vardi1[random3];





//}