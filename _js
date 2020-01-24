function myloop(){
 var start=
  document.getElementById("start").value;
  var end=
  document.getElementById("end").value;
  var jump=
  document.getElementById("jump").value; 
  start= Number(start)
  end = Number(end)
  jump = Number(jump)
  for(var i = start; i<= end; i+=jump)
{
  document.write('<p>' + i + '</p>');
}
}
