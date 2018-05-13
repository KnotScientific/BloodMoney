
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}





function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}






function repeat(){

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?limit=200', true);
var data;
var st;
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
        myFunction(data);
        clicky(data);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

}





var ss="";
var sym="";
var ini="";
var rat="";
var dup="";
var ratt="";
var pricetest=1986;


var options = {
  valueNames: [ 'num','name', 'value','initial','slope','signu','signd','signn' ],
    item: '<li><a href="#"><div id="line">⁪</div><div id="top"><div class="num"></div><span id="type" class="name"></span><span id="price" class="value"></span></div><div id="bottom"><span id="init" class="initial"></span><span id="rate" class="slope"></span><span class="signu"></span><span class="signd"></span><span class="signn"></span></div></a></li>'
};



var userList = new List('users', options/*, values*/);


getText = function(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7,callback,symb) // How can I use this callback?
{
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
            callback(st,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7,mycallback3,symb); // Another callback here
        }
    }; 
    request.open('GET', tsmp, true);
    request.send();
}


function mycallback2(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7, callback,symb) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
            callback(tsmp,st,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7,mycallback4,symb); // Another callback here
        }
    }; 
    request.open('GET', tsmp2, true);
    request.send();
}
function mycallback3(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7, callback,symb) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
           callback(tsmp,tsmp2,st,tsmp4,tsmp5,tsmp6,tsmp7,mycallback5,symb); // Another callback here
        }
    }; 
    request.open('GET', tsmp3, true);
    request.send();
}
function mycallback4(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7, callback,symb) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
          callback(tsmp,tsmp2,tsmp3,st,tsmp5,tsmp6,tsmp7,mycallback6,symb); // Another callback here
        }
    }; 
    request.open('GET', tsmp4, true);
    request.send();
}
function mycallback5(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7, callback,symb) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
          callback(tsmp,tsmp2,tsmp3,tsmp4,st,tsmp6,tsmp7,mycallback7,symb);; // Another callback here
        }
    }; 
    request.open('GET', tsmp5, true);
    request.send();
}
function mycallback6(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7, callback,symb) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
            callback(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,st,tsmp7,symb,drawgraph); // Another callback here
        }
    }; 
    request.open('GET', tsmp6, true);
    request.send();
}
function mycallback7(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7,symb,callback) { 
var data;
var st;
var sss=symb;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
          var data = JSON.parse(request.responseText);
    var st= data[symb].USD;
            callback(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,st);
        }
    }; 
    request.open('GET', tsmp7, true);
    request.send();
}
  var chart;
function drawgraph(tsmp,tsmp2,tsmp3,tsmp4,tsmp5,tsmp6,tsmp7) {
if(chart){
        chart.destroy();
    }
    var data = {
        labels: ["$", "$", "$", "$", "$", "$", "$"],
        datasets: [{
            borderColor: 'red',
            pointBorderColor:'white',
            data: [tsmp, tsmp2, tsmp3,tsmp4,tsmp5, tsmp6,tsmp7],
            pointBackgroundColor: "white",
            pointHoverBackgroundColor:'LightSkyBlue',
            pointHoverBorderColor:'LightSkyBlue'
        }]
};

var option = {
      tooltips: {
         mode: 'index',
         intersect: false
      },
      hover: {
         mode: 'index',
         intersect: false
      },
        showLines: true,
      scaleBeginAtZero : true,
      responsive:true,
      maintainAspectRatio: false,
      layout: {
    padding: {
      top: 3,
      bottom:50,
      left:5,
      right:5
    }
  },
  animation:{
    duration:500,
    easing:'linear'
  },
              scales:
        {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        },
               legend: {
            display: false
         },
         tooltips: {
            enabled: false
         }
};
 chart = Chart.Line(ctx,{
  data:data,
  options:option
});

}

function myFunction(arr) {
      userList.clear();
for (var i=1;i<=200;i++){
  var name=JSON.stringify(arr);
var st= getObjects(arr, 'rank', i);
  
  sym=" $"+JSON.stringify(getValues(st,'price_usd'));
var upsym=sym.replace(/\"/g, "");
  var supym=upsym.replace(/\]/g, "");
  var haym=supym.replace(/\[/g, "");
  
 ss=JSON.stringify(getValues(st,'name'));
var ups=ss.replace(/\"/g, "");
  var sup=ups.replace(/\]/g, "");
  var ha=sup.replace(/\[/g, "");
  
  ini=JSON.stringify(getValues(st,'symbol'));
var upini=ini.replace(/\"/g, "");
  var iniym=upini.replace(/\]/g, "");
  var haini=iniym.replace(/\[/g, "");
  rat=JSON.stringify(getValues(st,'percent_change_24h'))+"%";
  
var uprat=rat.replace(/\"/g, "");
  var ratym=uprat.replace(/\]/g, "");
  var harat=ratym.replace(/\[/g, "");
  ratt=parseFloat(harat);
    var hfinal=ratt+"%";
    if (ratt>0){
    dup="▲";
      userList.add({
  num:"#"+i,
  name: ha,
  value: haym,
  slope: hfinal,
  initial: haini,
  signu:dup
});

  }
  else if (ratt<0){
    dup="▼";
    userList.add({
  num:"#"+i,
  name: ha,
  value: haym,
  slope: hfinal,
  initial: haini,
  signd:dup
});
  }
  else {
    dup="▬";
    userList.add({
  num:"#"+i,
  name: ha,
  value: haym,
  slope: hfinal,
  initial: haini,
  signn:dup
});
  }
  
}


}






$('.search').keyup(function() {
   var searchString = $(this).val();
   userList.search(searchString, ['name','initial']);
});





(function () {
            // Retrieve remote BrowserWindow
            const {BrowserWindow} = require('electron').remote

            function init() {
                // Close app
                document.getElementById("contact").addEventListener("click", (e) => {
                    var window = BrowserWindow.getFocusedWindow();
                    window.close();
                });
            };

            document.onreadystatechange =  () => {
                if (document.readyState == "complete") {
                    init();
                }
            };
        })();




var shown=0;
$(document).ready(function() {
$('.meen').on('click', function() {
if (shown%2==0) 
{$('.sidenav').css('width', '60%');
shown++;
}
else{
        $('.sidenav').css('width', '0');
        shown++;
}
});
});





$(document).ready(function() {
$('.wrapper').on('mouseover', function() {
$('.sidenav').css('width', '0%');
shown=2;
});
});





$(document).ready(function() {
$('.search').on('click', function() {
$('.sidenav').css('width', '0%');
shown=2;
});
});





$(document).ready(function() {
$('#Alphabetical').on('click', function() {
  userList.sort('name', { order: "asc" });
$('.sidenav').css('width', '0%');
shown++;
});
});





$(document).ready(function() {
$('#highmark').on('click', function() {
    userList.sort('num', { order: "asc" });
$('.sidenav').css('width', '0%');
shown++;
});
});





$(document).ready(function() {
$('#lowmark').on('click', function() {
      userList.sort('num', { order: "desc" });
$('.sidenav').css('width', '0%');
shown++;
});
});





$(document).ready(function() {
$('#topgain').on('click', function() {
          userList.sort('slope', { order: "desc" });
$('.sidenav').css('width', '0%');
shown++;
});
});






$(document).ready(function() {
$('#toplose').on('click', function() {
          userList.sort('slope', { order: "asc" });
$('.sidenav').css('width', '0%');
shown++;
});
});





$(document).ready(function() {
$('#highprice').on('click', function() {
        userList.sort('value', { order: "desc" });
$('.sidenav').css('width', '0%');
shown++;
});
});






$(document).ready(function() {
$('#lowprice').on('click', function() {
        userList.sort('value', { order: "asc" });
$('.sidenav').css('width', '0%');
shown++;
});
});






$(document).ready(function() {
$('#myGraph').on('click', function() {
$('.graph').css('top', '389px');
if(chart){
        chart.destroy();
    }
});
});


function clicky(arr) {
 var lis = document.getElementsByClassName("list");

for (var i = 0 ; i < lis.length; i++) {

    lis[i].addEventListener('click', function(event) {
      //alert(document.getElementsByClassName("num").item(i).innerHTML);
//alert(event.target.parentNode.getElementsByClassName("num")[0].innerHTML);
var numList = event.target.parentNode.getElementsByClassName("num")[0].innerHTML;
var numInList=numList.replace("#","");
var sta= getObjects(arr, 'rank', numInList);

var ts = Math.floor(Date.now()/1000);
var fsyym= (JSON.stringify(getValues(sta,'symbol'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
var url1='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + ts + '&extraParams=your_app_name';
var url2='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + (ts-86400) + '&extraParams=your_app_name';
var url3='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + (ts-(86400*2)) + '&extraParams=your_app_name';
var url4='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + (ts-(86400*3)) + '&extraParams=your_app_name';
var url5='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + (ts-(86400*4)) + '&extraParams=your_app_name';
var url6='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym +'&tsyms=USD&ts=' + (ts-(86400*5)) + '&extraParams=your_app_name';
var url7='https://min-api.cryptocompare.com/data/pricehistorical?fsym=' + fsyym + '&tsyms=USD&ts=' + (ts-(86400*6)) + '&extraParams=your_app_name';

getText(url1,url2,url3,url4,url5,url6,url7,mycallback2,fsyym);

document.getElementById("coininit").innerHTML = (JSON.stringify(getValues(sta,'symbol'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("coinprice").innerHTML = "$"+(JSON.stringify(getValues(sta,'price_usd'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("coinName").innerHTML = (JSON.stringify(getValues(sta,'name'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("coinpricebtc").innerHTML =  (JSON.stringify(getValues(sta,'price_btc'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
var start=(JSON.stringify(getValues(sta,'last_updated'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");

document.getElementById("volumeusd").innerHTML =  (JSON.stringify(getValues(sta,'24h_volume_usd'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("market_cap_usd").innerHTML = (JSON.stringify(getValues(sta,'market_cap_usd'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("available_supply").innerHTML = (JSON.stringify(getValues(sta,'available_supply'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("total_supply").innerHTML = (JSON.stringify(getValues(sta,'total_supply'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("max_supply").innerHTML = (JSON.stringify(getValues(sta,'max_supply'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "");
document.getElementById("last_updated").innerHTML = "Last Updated at "+(moment(start*1000).format("DD/MM/YYYY HH:mm:ss"));



var url = "node_modules/color/" + (JSON.stringify(getValues(sta,'symbol'))).replace(/["#_]/g,"").replace(/\]/g, "").replace(/\[/g, "") + ".svg";
document.getElementById("myIcon").src = url;

$('.graph').css('top', '0px');
});
} 
}





repeat();
setInterval(repeat, 300000);
