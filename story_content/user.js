function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BEUXBfeQ8j":
        Script1();
        break;
      case "5jmv2QZyoao":
        Script2();
        break;
      case "5p80UmdjmUN":
        Script3();
        break;
      case "5lLCmy0Yf3j":
        Script4();
        break;
      case "6hpq99bwTeB":
        Script5();
        break;
      case "5f4lALlkxcl":
        Script6();
        break;
      case "680MxroCruV":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

