var dataBarang = [
	"Buku Tulis",
	"Pensil",
	"Spidol"
];

function showBarang(){
	var listBarang = document.getElementById("list-barang");
	// clear list barang
	listBarang.innerHTML = "";

	// cetak semua barang
	for(let i = 0; i < dataBarang.lenth; i++){
		var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
onclick='deleteBarang("+i+")'>Hapus</a>";

		listBarang.innerHTML += "<li>" + dataBarang[i] + "["+btnEdit + " |"+ btnHapus +"]</li>";
	}
}

function addBarang(){
	var input = document.querySELECTOR("input[name=barang]");
	dataBarang.push(input.value);
	showBarang();
}

function editBarang(id){
	var newBarang = prompt("Nama baru", dataBarangn[id]);
	dataBarang[id] = newBarang;
	showBarang();
}

function deleteBarang(id){
	dataBarang.splice(id, 1);
	showBarang();
}

showBarang();