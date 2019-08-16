function deleteMan(id) {
    $.ajax({
        url: '/manufacturer/' + id,
        type: 'DELETE',
        success: function(result) {
            window.location.reload(true);
        }
    })
};
