/**
 * Created by Deanne on 2/11/2016.
 */

$(document).ready(function(){    //This waits for the DOM to be ready

    var userTable = $('#users tbody');  //or $('#users').find('tbody')

    var nameField = $('#name');
    var emailField = $('#email');

    var add_btn = $('#add');
    var clearAll_btn = $('#clearAll');

    userTable.on('click', 'button.remove', function(){
        var btn = $(this);  //"this" is the actual button we click on

        btn.parents("tr").remove();
    });

    add_btn.on('click', function(){

        var name = nameField.val();   //gets the value
        var email = emailField.val();

        if(email.match(/^.+?\@.+\..+?$/)) {  //verify email has (something@something.something)
            emailField.removeClass('invalid');

            addUser({
                name: name,
                email: email
            });

            nameField.val("");  //returns an empty field
            emailField.val("");
        }

        else {
            emailField.addClass('invalid');
        }

        //No longer using the below code when added the if statement
        //addUser({
        //    name: nameField.val(),  //gets the value
        //    email: emailField.val()
        //});

    });

    function addUser(user){

        var userRow = $(
            "<tr>" +
            "<td>" + user.name + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td><button class='remove btn btn-primary btn-xs'>remove</button></td>" +
            "</tr>");

        userTable.append(userRow);
    }

    clearAll_btn.on('click', function(){
        userTable.empty();   //removes empty elements from the DOM
    });

});