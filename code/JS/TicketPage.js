window.onload = function () {
    var str=window.location.search.substring(1);
    function getValue(s,n){
        var t=str.split("&");
        for(var i=0;i<t.length;i++){
            if (t[i].split("=")[0]==n){
                return t[i].split("=")[1];
            }
        }
        return null;
    }
    document.getElementById("info1").value=getValue(str,"cinemaSection");
    document.getElementById("info2").value=getValue(str,"nameSection");
    document.getElementById("info3").value=getValue(str,"timeSection");
    document.getElementById("info4").value=getValue(str,"houseSection");

    var allCinemas = getCinemas();
    var targetCinema;
    var targetShow;
    var idx = window.localStorage.getItem("indexSection");
    for (var i = 0; i < allCinemas.length; i++){
        for (var j = 0; j <allCinemas[i].movies.length; j++){
            for (var k = 0; k < allCinemas[i].movies[j].shows.length; k++){
                if (allCinemas[i].movies[j].shows[k].index == idx){
                    targetCinema = allCinemas[i];
                    targetShow = allCinemas[i].movies[j].shows[k];
                }
            }
        }
    }


    var movieName = getValue(str,"nameSection").replace('+', ' ');//这个后面需要仿写
    document.getElementById("info1").value=targetCinema.branchName;
    document.getElementById("info2").value=movieName;
    document.getElementById("info3").value=targetShow.datetime;
    document.getElementById("info4").value=targetShow.house;

    window.localStorage.setItem("cinema", document.getElementById("info1").value);
    window.localStorage.setItem("movie", document.getElementById("info2").value);
    window.localStorage.setItem("time", document.getElementById("info3").value);
    window.localStorage.setItem("house", document.getElementById("info4").value);



    var container = document.getElementsByClassName('container')[0];
    var click = container.getElementsByTagName('td');

    //Initializing
    var booked = document.getElementsByTagName('fieldset')[0];
    booked.innerHTML = null;
    var legend = document.createElement('legend');
    var text = document.createTextNode("Seat Booked");
    legend.appendChild(text);
    booked.appendChild(legend);
    // var p = document.createElement('p');
    var p = document.createElement('input');
    p.type = "text";
    p.name = "seatsBookedSection"
    booked.appendChild(p);

    for (var i = 0; i < click.length; i++) {

        var isFirst = 0;
        //change background color and print seat numebr
        click[i].onclick = function () {

            // check if clicked
            if ( typeof this.value == "undefined" ) {

                this.style.backgroundColor = "green";
                this.value = "true";
                //add booked seated
                if (isFirst == 0) {

                    isFirst++;
                    //find nearest char
                    var tmp = this;
                    while (tmp.previousElementSibling.innerHTML != 'A' && tmp.previousElementSibling.innerHTML != 'B'
                    && tmp.previousElementSibling.innerHTML != 'C' && tmp.previousElementSibling.innerHTML != 'D')
                        tmp = tmp.previousElementSibling;

                    var char = tmp.previousElementSibling.innerHTML;

                    // find number
                    var number = this.innerHTML;
                    // var text = document.createTextNode(char + number);
                    var text = char + number;
                    p.value += text;
                    // p.appendChild(text);
                } else {

                    var tmp = this;
                    while (tmp.previousElementSibling.innerHTML != 'A' && tmp.previousElementSibling.innerHTML != 'B'
                    && tmp.previousElementSibling.innerHTML != 'C' && tmp.previousElementSibling.innerHTML != 'D')
                        tmp = tmp.previousElementSibling;

                    var char = tmp.previousElementSibling.innerHTML;

                    // find number
                    var number = this.innerHTML;

                    // var text = document.createTextNode(", " + char + number);
                    var text = " " + char + number;
                    p.value += text;
                    // p.appendChild(text);
                }

            }
        }

    }

    var input = document.createElement('input');
    input.type = "submit";
    input.value = "confirm";
    booked.appendChild(input);
}