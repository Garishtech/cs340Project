function updatePhone(id) {
    $.ajax({
        url: '/phone/' + id,
        type: 'PUT',
        data: $('#update-phone').serialize(),
        success: function(result) {
            window.location.replace("./");
        }
    })
};
