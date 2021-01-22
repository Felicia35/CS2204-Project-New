window.onload = function (){
    var seatStr=window.location.search.substring(1);
    var t=seatStr.split("=");
    var allSeats=t[1];
    var seats=allSeats.split("+");
    var seatNumber = seats.length;//一共几张票

    document.getElementById("main").innerHTML = null;
    for (var x = 0; x < seatNumber; x++){
        var ticket = document.createElement("div");
        ticket.className = "ticket";
        document.getElementById("main").appendChild(ticket);
        var newSpan1 = document.createElement("span");
        ticket.appendChild(newSpan1);
        var newSpan2 = document.createElement("span");
        ticket.appendChild(newSpan2);

        //span1 on the left
        var cinemaP = document.createElement("p");
        var cinemaInput = document.createElement("input");
        var br = document.createElement("br");
        newSpan1.appendChild(cinemaP);
        newSpan1.appendChild(cinemaInput);
        newSpan1.appendChild(br);
        cinemaP.innerText = "Cinema: ";
        cinemaInput.value = window.localStorage.getItem("cinema");
        cinemaInput.type = "text";
        cinemaInput.disabled = "disabled";

        var movieP = document.createElement("p");
        var movieInput = document.createElement("input");
        newSpan1.appendChild(movieP);
        newSpan1.appendChild(movieInput);
        newSpan1.appendChild(br);
        movieP.innerText = "Movie: ";
        movieInput.value = window.localStorage.getItem("movie");
        movieInput.type = "text";
        movieInput.disabled = "disabled";

        var timeP = document.createElement("p");
        var timeInput = document.createElement("input");
        newSpan1.appendChild(timeP);
        newSpan1.appendChild(timeInput);
        newSpan1.appendChild(br);
        timeP.innerHTML = "Date Time: ";
        timeInput.value = window.localStorage.getItem("time");
        timeInput.type = "text";
        timeInput.disabled = "disabled";

        //span2 on the right
        var houseP = document.createElement("p");
        var houseInput = document.createElement("input");
        newSpan2.appendChild(houseP);
        newSpan2.appendChild(houseInput);
        newSpan2.appendChild(br);
        houseP.innerHTML = "House No.: ";
        houseInput.value = window.localStorage.getItem("house");
        houseInput.type = "text";
        houseInput.disabled = "disabled";

        var seatP = document.createElement("p");
        var seatInput = document.createElement("input");
        newSpan2.appendChild(seatP);
        newSpan2.appendChild(seatInput);
        newSpan2.appendChild(br);
        seatP.innerHTML = "Seat: ";
        seatInput.value = seats[x];
        seatInput.type = "text";
        seatInput.disabled = "disabled";
    }
}