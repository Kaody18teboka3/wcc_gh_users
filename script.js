$(document).ready(function () {

    var country = ''
    var user = ''

    // $.get("https://api.github.com/search/users?q=Afghanistan+in:location&per_page=100", function (data) {
            
    //         console.log(data)

    //         data.items.forEach(element => {

    //             user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

    //             $("#results").append(user)
                
    //         });
            
    //     })
    
    $.get("https://themapotakes.github.io/SearchGithubUsersByCountry/countries.json", function (data) {
        console.log(data)

        data.forEach(element => {
            country = `<option value="${element.name}">${element.name}</option>`

            $("#countries").append(country)

        });
    })

    $("#countries").change(function () {
        var country = $("#countries option:selected").val()

        searchUserByCountry(country)
    })

    $('#form').on('submit', function(e) {
        e.preventDefault()
            var searchterms = $("#userSearch").val();

            $.get("https://api.github.com/users/" + searchterms, function (data) {
            
                console.log(data.html_url)

                // data.items.forEach(element => {

                    user = `<div class="user-block block text-center">
                                        <div class="avatar">
                                            <img src="${data.avatar_url}" alt="..." class="img-fluid"/>
                                        </div>
                                        <a href="/" class="user-title">
                                            <h3 class="h5">${data.login}</h3>
                                            <span>${data.html_url}</span>
                                        </a>
                                        <div class="contributions">950 Contributions</div>
                                        <div class="details d-flex">
                                            <div class="item">
                                                <i class="icon-info"></i>
                                                <strong>150</strong>
                                            </div>
                                            <div class="item">
                                                <i class="fa fa-gg"></i>
                                                <strong>340</strong>
                                            </div>
                                            <div class="item">
                                                <i class="icon-flow-branch"></i>
                                                <strong>460</strong>
                                            </div>
                                        </div>
                                    </div>`
                    $("#userRes").empty()

                    $("#userRes").append(user)
                    
                // });
            })
    });

    $('#form').on('submit', function(e) {
        e.preventDefault()
            var searchterms = $("#userSearch").val();

            $.get("https://api.github.com/users/" + searchterms + "/followers", function (data) {
            
                console.log(data)

                data.items.forEach(element => {

                    user = `<div class="user-block block text-center">
                                        <div class="avatar">
                                            <img src="${element.avatar_url}" alt="..." class="img-fluid"/>
                                        </div>
                                        <a href="/" class="user-title">
                                            <h3 class="h5">${element.login}</h3>
                                            <span>${element.html_url}</span>
                                        </a>
                                        <div class="contributions">950 Contributions</div>
                                        <div class="details d-flex">
                                            <div class="item">
                                                <i class="icon-info"></i>
                                                <strong>150</strong>
                                            </div>
                                            <div class="item">
                                                <i class="fa fa-gg"></i>
                                                <strong>340</strong>
                                            </div>
                                            <div class="item">
                                                <i class="icon-flow-branch"></i>
                                                <strong>460</strong>
                                            </div>
                                        </div>
                                    </div>`
                    $("#followers").empty()

                    $("#followers").append(user)
                    
                });
            })
    });

    function searchUserByCountry(country) {

        $("#results").empty()

        $.get("https://api.github.com/search/users?q=" + country + "+in:location&per_page=100&sort=joined", function (data) {
            
            console.log(data)

            data.items.forEach(element => {

                user = `<a href="/" class="message d-flex align-items-center">
                            <div class="profile">
                                <img src='${element.avatar_url}' alt="..." class="img-fluid"/>
                            </div>
                            <div class="content">   
                                <strong class="d-block">${element.login}</strong>
                                <span class="d-block">${element.html_url}</span>
                            </div>
                        </a>`

                        

                $("#results").append(user)
                
            });
            
        })
    }

    


});
