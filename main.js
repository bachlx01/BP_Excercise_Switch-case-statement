
// output.addEventListener('click', dayOfMonth())
function dayOfMonth () {
    let month = parseInt(document.getElementById('input').value);
    let output = document.getElementById('display');
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            output.innerText = 'Tháng ' + month + ' có 31 ngày';
            break;
        case 4:
        case 6:
        case 9:
        case 11: output.innerText = 'Tháng ' + month + ' có 30 ngày';
            break;
        case 2: output.innerText = 'Tháng ' + month + ' có 28 hoặc ngày';
            break;

    }

}