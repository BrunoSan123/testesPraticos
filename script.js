function addData(data){

    let table = document.getElementById('tabela')
    let qtdlinhas=table.rows.length
    let linha = table.insertRow(qtdlinhas)

    let cellAmount =linha.insertCell(0)
    let Data =linha.insertCell(1)

    function getDate()
{
	let  today 		= new Date();
	let  dd 		= String(today.getDate()).padStart(2, '0');
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); //janvier = 0
	let  yyyy 		= today.getFullYear();
    let hr          =today.getHours()
    let min       =today.getMinutes()

	return dd + '/' + mm + '/' + yyyy+ ' '+hr+':'+min;
}

    cellAmount.innerHTML=data
    Data.innerHTML=getDate()

    event.preventDefault()


}