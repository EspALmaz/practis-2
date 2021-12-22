$(document).ready(function() {
$("#forms").validate({
rules: {
username : {
required: true,
minlength: 5,
maxlength: 15
},
email: {
required: true,
email: true
},
password: {
  required: true,
minlength: 6,
maxlength: 12
},
}
});
});

$(document).ready(function() {
$("#forms2").validate({
rules: {
username : {
required: true,
minlength: 4,
maxlength: 15
},
email: {
required: true,
email: true
},
password: {
  required: true,
minlength: 4,
maxlength: 12
},
}
});
});

$('.ad').keyup(function() {
    if($(this).val()=='admin') {
        $('.admin').html('<h1><a href="adminpage.html"> admin</a></h1>');
    }
});


window.addEventListener('load', () => {
    appendAddBtn();
    createDataOnStorage();
    let dataArray = getArrayFromStorage();
    if (dataArray.length == 0) {
        addToLocalStorage("Harry", 97807475327);
        addToLocalStorage('Georg', 97807475384);
        dataArray = getArrayFromStorage();
    }
    dataArray.forEach((obj) => {
        appendTableData(obj.name, obj.age);
    });
});