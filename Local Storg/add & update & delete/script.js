let data = JSON.parse(window.localStorage.getItem('data')) || [];
let ifupdate = false;

function alldata(){
    if(ifupdate){
        update();
    }
    else{
        let inp_name = document.getElementById("inp-name").value;
        let inp_id = document.getElementById("inp-id").value;
        let inp_age = document.getElementById("inp-age").value;


        data.push({
            id:inp_id,
            name:inp_name,
            age:inp_age,
        });
    }

    window.localStorage.setItem("data" , JSON.stringify(data))
    displaydata();
}


function displaydata(){
    let table = document.getElementById('data_table').getElementsByTagName("tbody")[0];

    let row = document.createElement('tr');

    let tdname = document.createElement('td');
    let tdid = document.createElement('td');
    let tdage = document.createElement('td');
    let tdupd = document.createElement('td');
    let tddel = document.createElement('td');

    tdname.innerHTML = Element.inp_name;
    tdid.innerHTML = Element.inp_id;
    tdage.innerHTML = Element.inp_age;
    tdupd.innerHTML = ` <input type="button" value="Update" onclick="updatedata()">`;
    tddel.innerHTML = `<input type="button" value="delete" onclick="deletedata()">`;

    tdname.append(row);
    tdid.append(row);
    tdage.append(row);
    tdupd.append(row);
    tddel.append(row);

    row.append(table);
}
displaydata();