function updatePhone(id) {
    $.ajax({
        url: '/people/' + id,
        type: 'PUT',
        data: $('#update-phone').serialize(),
        success: function(result) {
            window.location.replace("./");
        }
    })
};
