function inputdata(event) {
    // untuk tidak reload
    event.preventDefault();
    let data1 = document.getElementById("note").value;
    let data2 = document.getElementById("label").value;

     //  data dalam objek
    let siswa = JSON.parse(localStorage.getItem("siswa")) || [];
    siswa.push({note: data1, label: data2 });
    // Input Data
    localStorage.setItem("siswa", JSON.stringify(siswa));
    // Tampilkan dan ambil data
    console.log(JSON.parse(localStorage.getItem("siswa")));
    tampilkan();
}

// tampil data localstorage
function tampilkan(){
    let data = JSON.parse(localStorage.getItem("siswa"));
    const ul = document.getElementById("data-tampil");
    ul.innerHTML = "";

    data.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.note} - ${item.label}` ;
        
        const button = document.createElement("button");
        button.textContent = "Hapus";
        button.onclick = function() {
            data.splice(index, 1);

        localStorage.setItem("siswa", JSON.stringify(data));
        tampilkan();
        };

        li.appendChild(button);
        ul.appendChild(li);
       });
    }
        
// panggil function
tampilkan();

// delete data
function hapusSemua() {
    localStorage.clear();
    tampilkan();
}
// Panggil funcition
inputdata();