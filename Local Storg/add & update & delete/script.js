let table_data = JSON.parse(window.localStorage.getItem('data')) || [];
let ifupdate = false;

function alldata() {
    if (ifupdate) {
        update();
    } else {
        let name = document.getElementById("inp-name").value;
        let id = document.getElementById("inp-id").value;
        let age = document.getElementById("inp-age").value;

        table_data.push({
            id: id,
            name: name,
            age: age,
        });

        window.localStorage.setItem("data", JSON.stringify(table_data));
        displaydata();
    }
}

function displaydata() {
    let table = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    table_data.forEach((element, index) => {
        let row = document.createElement('tr');

        let tdname = document.createElement('td');
        let tdid = document.createElement('td');
        let tdage = document.createElement('td');
        let tdupd = document.createElement('td');
        let tddel = document.createElement('td');

        tdname.innerHTML = element.name;
        tdid.innerHTML = element.id;
        tdage.innerHTML = element.age;
        tdupd.innerHTML = `<input type="button" value="Update" onclick="updatedata(${index})">`;
        tddel.innerHTML = `<input type="button" value="Delete" onclick="deletedata(${index})">`;

        row.appendChild(tdname);
        row.appendChild(tdid);
        row.appendChild(tdage);
        row.appendChild(tdupd);
        row.appendChild(tddel);

        table.appendChild(row);
    });
}

function deletedata(index) {
    table_data.splice(index, 1);
    window.localStorage.setItem("data", JSON.stringify(table_data));
    displaydata();
}
function updatedata(index) {
    ifupdate = true;
     document.getElementById("change_name").value = "UPDATE"
    let name = document.getElementById("inp-name").value;
    let id = document.getElementById("inp-id").value;
    let age = document.getElementById("inp-age").value;
    let inp_index = document.createElement("input");
    inp_index.id = "inp_index"
    inp_index.type = "hidden";

    name.value = table_data[index].id;
    id.value = table_data[index].name;
    age.value = table_data[index].age;

}
function update() {
    let name = document.getElementById("inp-name").value;
    let id = document.getElementById("inp-id").value;
    let age = document.getElementById("inp-age").value;
    let inp_index = document.getElementById("inp_index").value;


    table_data[index] = {
        id:id.value,
        name:name.value,
        age:age.value,
    };

    window.localStorage.setItem("data" , JSON.stringify(table_data));
    displaydata();
}
displaydata();
