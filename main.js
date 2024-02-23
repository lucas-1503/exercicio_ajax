$(document).ready(function(){
    $('#btn').click(function(){
        const endpoint = "https://api.github.com/users/lucas-1503";

        $.ajax(endpoint).done(function(resposta){
            const avatar = resposta.avatar_url;
            const name = resposta.name;
            const username = resposta.login;
            const repos = resposta.public_repos;
            const followers = resposta.followers;
            const following = resposta.following;

            $('#username').html(username)
            $('#avatar').attr('src', avatar)
            $('#name').html(name)
            $('#repos').html(repos)
            $('#followers').html(followers)
            $('#following').html(following)

        })
    })
})
