function paintDate()
{
    let day   = document.getElementById("day").value;
    let color = document.getElementById("color").value;
    let clndr = document.getElementById("calendar");

    let date = clndr.getElementsByTagName("td")[parseInt(day)+5];
        date.style.backgroundColor = color;
}