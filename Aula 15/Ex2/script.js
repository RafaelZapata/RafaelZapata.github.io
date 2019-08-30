$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (result) {
            for (let i of result) {
                $('#postId').append(`<option value="${i.id}">${i.name}</option>`);
            }
        }
    });

    function showPosts(number) {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            data: { userId: number },
            success: function (result) {
                $('#result').empty();
                for (let i of result) {
                    $('#result').append(`<p>ID: ${i.id}</p>
<p>${i.title}</p>
<p>${i.body}</p>
</div><br>`);
                }
            }
        })
    }

    $('#postId').change(function () {
        showPosts(this.value);
    });
});