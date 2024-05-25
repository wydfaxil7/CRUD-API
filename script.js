//GET API
let data;
$.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    type: "GET",
    async: false,
    
    success: function (response) {
        data = response;
    },
    error: function (error) {
        console.error("Error:", error);
    },
});

const table = document.querySelector(".table-js");
let total = "";
data.forEach((ele) => {
    total += `
    <tr>
        <td>${ele.title}</td>
        <td>${ele.content}</td>
        <td><button type="button" class="btn btn-warning edit-js" id="${ele.id}"> Edit
        </button></td>
        <td><button type="button" class="btn btn-danger delete-js" id="${ele.id}"> Delete
        </button></td>
        </tr>
    `;
});
table.innerHTML = total;

//POST API
const add = document.querySelector(".add-js");
add.addEventListener("click", () => {
    const title = document.querySelector(".title-js").value;
    const content = document.querySelector(".recipe-js").value;

    const myData = {title, content};

$.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    type: "POST",
    contentType: "application/json",
    async: false,
    data: JSON.stringify(myData),
    
    success: function (response) {
        console.log("Success:", response);
    },

    error: function (error) {
        console.error("Error:", error);
    },
});
    location.reload();
});

//PUT API
$(".edit-js").on("click", function () {
    const ID = this.id;
    $("#recipeModal").modal("show");

    $(".sumbit-js").on("click", () => {
        title = $("#title").val();
        content = $("#recipe").val();
        
    const myData = {title,content};

    $("#recipeModal").modal("hide");
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories/" + ID,
        type: "PUT",
        async: false,
        contentType: "application/json",
        data: JSON.stringify(myData),

    success: function (response) {
        console.log("Updated Successfully:", response);
        },

    error: function (error) {
        console.error("Error:", error);
        },
    });
    location.reload();
});
});

//DELETE API
$(".delete-js").on("click", function () {
const ID = this.id;
    $.ajax({
        url: "https://usmanlive.com/wp-json/api/stories/" + ID,
        type: "DELETE",
        async: false,
    
    success: function (response) {
        console.log("Success:", response);
    },
    
    error: function (error) {
        console.error("Error:", error);
    },
});

location.reload();
});