
window.onload = function () {


    var movies = getMovies();

    //vedio section
    var vd = document.getElementById("video");
    var before = "http://courses.cs.cityu.edu.hk/cs2204/video/";

    //Index of movie to playing
    var index = 0;
    vd.autoplay = "autoplay";
    vd.controls = "controls";

    //Initializing
    switchVideo(index);

    //function to switchVideo with index 'x';
    function switchVideo(x) {
        vd.src = before + movies[x].src;
        var h = document.querySelector('.bar h2');
        h.innerHTML = movies[x].name;
        vd.load();
        vd.play();
    }

    //when video finised
    vd.addEventListener('ended', function () {
        setTimeout(function () {
            switchVideo(++index%movies.length);
        }, 2000 )
    }, false)

    //main section
    var nowShowing = document.getElementById('nowShowing');
    nowShowing.innerHTML = "\<dl>\n" +
        "<dt class='title'> Now Showing </dt>\n" +
        "<br>";

    var upComing = document.getElementById('upComing');
    upComing.innerHTML = "<dl>\n" +
        "<dt class='title'> Up Coming </dt>\n" +
        "<br>";


    for ( var i = 0; i < movies.length; i ++ ){

        var movie = movies[i];
        if (movie.type == "now"){
            document.getElementById("nowShowing").innerHTML += "<dd>\n" +
                "<img src=\"../Picture/" +movie.thumbnail +'\" alt=\"Your browser does not support the picture tag.\" title="'+movie.name+'\">' + "<div class=\"text\">\n" +
                "<h3>Name: " + movie.name + "</h3>\n" + "<p>\n" + "Cast: " + movie.cast + "<br>\n" + "Director: " + movie.director + " <br>\n" + "Duration: " + movie.duration + "</p>\n" + "</div>\n" + "</dd>";
        }
        else {
            document.getElementById("upComing").innerHTML += "<dd>\n" +
                "<img src=\"../Picture/" + movie.thumbnail +'\" alt=\"Your browser does not support the picture tag.\" title="'+movie.name+'\">' + "<div class=\"text\">\n" +
                "<h3>Name: " + movie.name + "</h3>\n" + "<p>\n" + "Cast: " + movie.cast + "<br>\n" + "Director: " + movie.director + " <br>\n" + "Duration: " + movie.duration + "</p>\n" + "</div>\n" + "</dd>";
        }
    }

    nowShowing.innerHTML += "</dl>\n" + "\n";
    upComing.innerHTML += "</dl>\n" + "\n";


    var main = document.getElementById("main");
    var images = main.getElementsByTagName("img");
    for ( var i = 0; i < images.length; i ++ ){
        var image = images[i];
        image.onclick = function () {

            //Finde the index of movie that user clicked
            for ( var j = 0; j < movies.length; j ++ )
                if (movies[j].name == this.title)
                    index = j;

            switchVideo(index);
        }
    }


}