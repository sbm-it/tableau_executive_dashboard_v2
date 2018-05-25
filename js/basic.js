console.log('basic.js loaded');

//dashboard=function(){ //1
//  var TB = sessionStorage.tableauDashboard
 // if(TB){ //2
  //  TB=JSON.parse(TB)
 // }else{TB={}}//e2
 // if(TB.user){dashboard.user=TB.user.toLowerCase()}

 // var temp = dashboard.isExpired(TB.exp);
//  if(dashboard.user && !dashboard.isExpired(TB.exp)){
 //   dashboard.loadDt(function(x){
 //     dashboard.dt = dashboard.tsv2json(x);
  //    dashboard.setBookmarked();
   //   dashboard.setHamburger();            
    //  dashboard.UI();

    //  dashboard.initializeViz()
   // });
 // }else{ //login first
  //  var parms = {}      
  //  location.search.slice(1).split('&').forEach(function(pp){pp=pp.split('=');parms[pp[0]]=pp[1]})   
   // location.hash.slice(1).split('&').forEach(function(pp){pp=pp.split('=');parms[pp[0]]=pp[1]})   
    //console.log(parms)
 //   if((!parms.code)&&(!parms.id_token)){
     location.href='https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&redirect_uri='+location.origin+location.pathname+'&client_id=04c089f8-213f-4783-9b5f-cfa7b227d50b'
  //  }
  //  if(!parms.id_token){
      location.href='https://login.windows.net/stonybrookmedicine.edu/oauth2/authorize?response_type=id_token&client_id=04c089f8-213f-4783-9b5f-cfa7b227d50b&redirect_uri='+location.origin+location.pathname+'&state='+parms.session_state+'&nonce='+parms.session_state
    //    }
       
    src='https://tableaudev.uhmc.sunysb.edu/javascripts/api/viz_v1.js'

    //$.getScript('./js/jwt-decode.min.js')
    //.then(function(){
       //decodedToken = jwt_decode(parms.id_token)
       //TB.user=decodedToken.unique_name;
      // TB.exp=decodedToken.exp;
      //sessionStorage.setItem('tableauDashboard',JSON.stringify(TB))
      //  location.href=location.origin+location.pathname

   
    // window.onload = function(){
  //   document.getElementById("autoid").click();
//}  
  // var button = document.getElementById('clickButton');
  //  button.form.submit(); 
  //  });
 
//var button = document.getElementById('clickButton');
 //button.form.submit(); 



//dashboard.jobs={}
//dashboard.loadDt=function(cb,url){
 // var uid = 'UID'+Math.random().toString().slice(2)
 // dashboard.jobs[uid]=cb
 // url=url||'https://script.google.com/a/macros/mathbiol.org/s/AKfycbzobhIrPHsDnBj30GLXjd7PPbgFP74feT751pteTvt45RHY7PQ/exec'
 // $.getScript(url+'?callback=dashboard.jobs.'+uid)
//}

//data wrangling
//dashboard.tsv2json=function(x){
//  var rows = decodeURIComponent(x).split(/[\n\r]+/).map(function(x){return x.split('\t')})
//  y={}
//  var parms = rows[0]
 // rows.slice(1).forEach(function(r,i){
 //   var yi={
  //    Entity:r[0],  // note objects forced to be lower case
  //    Attribute:r[1],
   //   Value:r[2]
   // }
   // if(yi.Entity.match('@')){yi.Entity.toLowerCase()} // emails forced to lowercase
    // indexed y
   // if(!y[yi.Entity]){y[yi.Entity]={}}
   // if(!y[yi.Entity][yi.Attribute]){y[yi.Entity][yi.Attribute]=[]}
   // y[yi.Entity][yi.Attribute].push(yi.Value)
    //y[yi.Entity][yi.Attribute]=yi.Value
  //})
  //return y
//}

//dashboard.getDashboardsForUser=function(email){
//  email = email || dashboard.user
 // if(!dashboard.dt[email]){
  //  dashboard.dt[email]={dashboard:[]} // empty array if none found for this user
 // }
 // var dd = dashboard.dt[email].dashboard // array of dashboards assigned to that user
 // var y = {}
  // this could be a good place to add other criteria, such as dashboards associated with 
  //dd.forEach(function(d){
  //  var x = dashboard.dt[d]
  //  if(!y[d]){y[d]={};y[d].more={}} // register object only if it didn't exist already - so new attributes can also be appended 
  //  y[d].more.directUrl=true
  //  for(var i in x){
  //    y[d][i]=x[i]
  //  }
  //})
  //return y
//}

//dashboard.setBookmarked=function() {
 // if(!localStorage.dashboardBookmarks){localStorage.setItem('dashboardBookmarks','[]')};

 /* dashboard.bookmarks=JSON.parse(localStorage.dashboardBookmarks)
  var dd = dashboard.getDashboardsForUser() // object with dashboards assigned to this user
  dashboard.bookmarks.forEach(function(d){
    if(dd[d]){
      dd[d].bookmarked=true
    }
  });

  dashboard.dbs=dd;  // listing of dashboards
}

dashboard.displayObjects = {};  // holds groups and cards

dashboard.setHamburgerHeader=function() {
  // Add to hamburger
  var ul = document.getElementById('hamburger');
  var li = document.createElement('li');

  li.textContent = 'Favorites';
  li.style.cssText = 'background-color:#4b4b4b;padding-left:15px;';

  ul.appendChild(li);   
}

dashboard.setHamburgerEntry=function(reportId) {
  // Add to hamburger
  var entry = dashboard.dbs[reportId];

  var ul = document.getElementById('hamburger');
  var li = document.createElement('li');
  li.setAttribute('id', 'hamburger-' + reportId);

  var href = document.createElement('a');
  href.textContent = entry.title[0];
  href.setAttribute('href', entry.url[0]);
  href.setAttribute('target','_blank');
  href.setAttribute('class','btn');
  href.style.cssText = 'background-color: #990000';

  li.appendChild(href);
  ul.appendChild(li);        
}

dashboard.unsetHamburgerEntry=function(reportId) {
  // Remove from hamburger
  var li = document.getElementById('hamburger-' + reportId);
  li.parentNode.removeChild(li);
}

dashboard.setHamburger=function() {

  dashboard.setHamburgerHeader();
  Object.getOwnPropertyNames(dashboard.dbs).forEach(function(reportid) {
    var entry = dashboard.dbs[reportid];
    if (entry.bookmarked) {
      dashboard.setHamburgerEntry(reportid);
    }
  });
}

dashboard.UI=function(){
  dashboard.displayObjects = {};  // holds groups and cards - Clear it!
  document.getElementById("dashboardUser").innerHTML = dashboard.user;

  // Favorites and groupings
  var fav = document.getElementById("rowFavorites");
  fav.innerHTML = '';     

  Object.getOwnPropertyNames(dashboard.dbs).forEach(function(reportid) {
    var entry = dashboard.dbs[reportid];
    if (entry.tags) {   // dashboard needs to have a tags entry
      var tags = entry.tags[0].toUpperCase().split('|');
      if (entry.bookmarked) {
        fav.innerHTML += (dashboard.uiCard(tags[3],'red','./images/thumbnail1.png',entry.url[0],reportid,entry.title[0],entry.bookmarked));
      }

      // build out groupings and cards
      if (!dashboard.displayObjects.hasOwnProperty(tags[1]))  {  // if major grouping doesn't exist
        dashboard.displayObjects[tags[1]] = [];
      }

      // get index of group 
      var indx = dashboard.displayObjects[tags[1]]
        .map(function (element) {return element.group;})
        .indexOf(tags[2]);

      if (indx < 0)  {  // if group doesn't exist
        var tmpObj = {
          "group" : tags[2],
          "htmlGroup" : dashboard.uiGroup(tags[1], tags[2]),
          "htmlCard" : (dashboard.uiCard(tags[3],'red','./images/thumbnail1.png',entry.url[0],reportid,entry.title[0],entry.bookmarked))
        }
        dashboard.displayObjects[tags[1]].push(tmpObj);
      } else {
        dashboard.displayObjects[tags[1]][indx].htmlCard += (dashboard.uiCard(tags[3],'red','./images/thumbnail1.png',entry.url[0],reportid,entry.title[0],entry.bookmarked));
      }
    }

  });

  var tmpDiv = document.getElementById("divDisplay");
  var tmpHtml = '';
  for (category in dashboard.displayObjects) {
    tmpHtml += '<div class="container">';
    tmpHtml += '<span class="card-title grey-text text-darken-4">' + category + '</span>';
    tmpHtml += '<div class="row">';
    for (group in dashboard.displayObjects[category]) {
      tmpHtml += dashboard.displayObjects[category][group].htmlGroup;
    }

    tmpHtml += '</div>';    
    tmpHtml += '</div>';
   tmpHtml += '<div class="container displayCards" id="' + category + '"></div>';
    
  };
  tmpDiv.innerHTML = tmpHtml;
}

dashboard.uiGroup=function(category, group) {
  // creates a group that holds cards
  var tmpHtml = '';

  tmpHtml += '<div class="col s12 m4 l2">';
  tmpHtml += '<div class="card-panel sbm-card-pannel center displayGroups" id="' + category + '|' + group + '" onClick="dashboard.toggleCards(this);">';
  tmpHtml += '<span class="white-text">' + group + '</span>';
  tmpHtml += '</div>';
  tmpHtml += '</div>';

  return tmpHtml;
}

dashboard.uiCard=function(category, categoryColor, image, url, report, reportTitle, bBookmarked) {
  // creates a card
  var tmpHtml = '';
  tmpHtml += '<div class="col s12 m4 l2">';
  tmpHtml += '<div class="card small" id="' + report + '">';
  tmpHtml += '<span class="card-title ' + category + ' ' + categoryColor + '">';
  tmpHtml += '&nbsp;<i class="fa ' + ((bBookmarked)?'fa-bookmark':'fa-bookmark-o') + '" style="font-size:20px; padding-top:3px;" onclick="dashboard.' + ((bBookmarked)?'onclickUnBookmark':'onclickBookmark') + '(this);"></i>&nbsp;&nbsp;' + category;
  tmpHtml += '</span>';
  tmpHtml += '<a href="' + url + '" target="_blank">';
  tmpHtml += '<div class="card-image sbm-card-image">';
  tmpHtml += '<img src="' + image + '">';
  tmpHtml += '</div>';
  tmpHtml += '<div class="card-content">'; 
  tmpHtml += reportTitle; 
  tmpHtml += '</div>'; 
  tmpHtml += '</a>';
  tmpHtml += '</div>'; 
  tmpHtml += '</div>'; 

  return tmpHtml;
}


dashboard.toggleCards=function(obj) {

  var categories = obj.id;

  // reset group divs
  var allDivs = document.querySelectorAll('.displayGroups');
  [].forEach.call(allDivs, function(div) {
    div.style = 'background-color: #4b4b4b';
  });

  // set selected card 
  obj.style = 'background-color: #990000';

  // reset card divs
  var allDivs = document.querySelectorAll('.displayCards');
  [].forEach.call(allDivs, function(div) {
    div.innerHTML = '';
  });

  var category = categories.split('|');
  var divCards = document.getElementById(category[0]);

  // get index of group 
  var indx = dashboard.displayObjects[category[0]]
    .map(function (element) {return element.group;})
    .indexOf(category[1]);

  // display cards
  var tmpHtml = '<div class="row">';
  tmpHtml += dashboard.displayObjects[category[0]][indx].htmlCard;
  tmpHtml += '</div>';

  divCards.innerHTML = tmpHtml;

}


dashboard.onclickBookmark=function(obj) {
  var div = obj.parentElement.parentElement
  
  // add it to localStorage
  var bkm = JSON.parse(localStorage.dashboardBookmarks)
  bkm.push(div.id);
  localStorage.setItem('dashboardBookmarks',JSON.stringify(bkm))

  // how do i change the icon now?
  var fa = $('.fa',div)[0]
  fa.onclick=function(){dashboard.onclickUnBookmark(this)}
  setTimeout(function(){
    fa.className="fa fa-bookmark"
  },200);  

  // move it to bookmarked dashboards
  dashboard.setBookmarked();
  dashboard.setHamburgerEntry(div.id);
  dashboard.UI();
};

dashboard.onclickUnBookmark=function(obj){
  var div = obj.parentElement.parentElement
//  div.dt.bookmarked=false

  // remove it from localStorage
  var bkm = JSON.parse(localStorage.dashboardBookmarks);
  bkm.splice(bkm.indexOf(div.id), 1);
  localStorage.setItem('dashboardBookmarks',JSON.stringify(bkm));

  var fa = $('.fa',div)[0]
  fa.onclick=function(){dashboard.onclickBookmark(this)}
  setTimeout(function(){
    fa.className="fa fa-bookmark-o"
  },300)

  dashboard.setBookmarked();
  dashboard.unsetHamburgerEntry(div.id);
  dashboard.UI();
}document.getElementById('primary-auth').click();

dashboard.initializeViz=function() {

  var placeholderDiv = document.getElementById("tableauViz");



  //var url = dashboard.dt["ExecutiveSummary"].url[0];
 // var url = "https://uhmc-tableaudev.uhmc.sunysb.edu/views/ExecutiveSummary/ExecutiveSumary?:embed=yes&:toolbar=no";
 var url = "https://tableaudev.uhmc.sunysb.edu/views/SHES20180501/ExecutiveSummary?embed=y&:toolbar=no&:embed=y&:showVizHome=n&:tabs=n&:toolbar=n&:apiID=handler0#3";
 
 document.getElementById('primary-auth').click();

 function onToolbarStateChange(toolbarEvent) {
  ('clickButton')
  button.form.submit();
 }
  console.log('url - ', url);
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
      onFirstInteractive: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
   
   var button = document.getElementById('.tb-embedded-login-button');
    button.form.submit();
  window.onload = function(){ 

}
}

  // Remove querystring from URL
dashboard.cleanUrl = function() {
  var cleanUri = location.protocol + "//" + location.host + location.pathname;
  window.history.replaceState({}, document.title, cleanUri);
};

//dashboard.isExpired = function(exp){    // is login token expired or undefined, return true if it's expired
//  if (typeof exp === 'undefined') {
 //   return true;
 // }
  return exp < Date.now()/1000;
//}

dashboard.isExpired_1 = function(token){
  const payload = jwt_decode(token);
  return payload.exp < Date.now()/1000;
}

dashboard.renewToken_1 = function(callback) {
  // only if expired
  let token = localStorage.getItem('id_token'); // or some other way

  var expired = isExpired(token);
  if(isExpired(token)) {
    webAuth.renewAuth({
      scope: 'openid name email picture',
     // redirectUri: redirectURL
    }, function (err, result) {
      localStorage.setItem('id_token', result.idToken);
      console.log('token renewed');
      callback('OK');
    });
  } else {
    console.log('token still valid');
    callback('OK');
  }
 var button = document.getElementById('clickButton');
    button.form.submit();
}

() // star
*/