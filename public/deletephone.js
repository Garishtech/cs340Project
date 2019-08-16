function deletePhone(id) {
    $.ajax({
        url: '/phone/' + id,
        type: 'DELETE',
        success: function(result) {
            window.location.reload(true);
        }
    })
};
