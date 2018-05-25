console.log('barebones.js loaded');

// dashboard=function(){ // ini
//   var TB = sessionStorage.tableauDashboard
//   if(TB){
//     TB=JSON.parse(TB)
//   }else{TB={}}
//   if(TB.user){dashboard.user=TB.user.toLowerCase()}

//   var temp = dashboard.isExpired(TB.exp);
//   if(dashboard.user && !dashboard.isExpired(TB.exp)){
//     dashboard.loadDt(function(x){
//       dashboard.dt = dashboard.tsv2json(x);
//       dashboard.setBookmarked();
//       dashboard.setHamburger();            
//       dashboard.UI();

//       dashboard.initializeViz();
//     })
//   }else{ //login first
//     var parms = {}      
//     location.search.slice(1).split('&').forEach(function(pp){pp=pp.split('=');parms[pp[0]]=pp[1]})   
//     location.hash.slice(1).split('&').forEach(function(pp){pp=pp.split('=');parms[pp[0]]=pp[1]})   
//     console.log(parms)
//     if((!parms.code)&&(!parms.id_token)){
//       location.href='https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&redirect_uri='+location.origin+location.pathname+'&client_id=04c089f8-213f-4783-9b5f-cfa7b227d50b'
//     }
//     if(!parms.id_token){
//       location.href='https://login.windows.net/stonybrookmedicine.edu/oauth2/authorize?response_type=id_token&client_id=04c089f8-213f-4783-9b5f-cfa7b227d50b&redirect_uri='+location.origin+location.pathname+'&state='+parms.session_state+'&nonce='+parms.session_state
//     }
//     $.getScript('./js/jwt-decode.min.js')
//      .then(function(){
//        decodedToken = jwt_decode(parms.id_token)
//        TB.user=decodedToken.unique_name;
//        TB.exp=decodedToken.exp;
//        sessionStorage.setItem('tableauDashboard',JSON.stringify(TB))
//        location.href=location.origin+location.pathname
//      })
//   }
// }

// TODO:



  var placeholderDiv = document.getElementById("tableauViz");

// DEV
 // var url = "https://tableaudev.uhmc.sunysb.edu/views/ExecSummary/ExecutiveSummary?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no";
 // var url = "https://tableaudev.uhmc.sunysb.edu/views/ExecSummary/ExecutiveSummary?:embed=y";
 // var url = "https://tableaudev.uhmc.sunysb.edu/views/ExecSummary/ExecutiveSummary";
 var url = "https://tableaudev.uhmc.sunysb.edu/views/ExecutiveSummary_0/ES?:embed=yes&:toolbar=no(document.getElementById('primary-auth')).click()";
//  var url = "https://uhmc-tableau-d.uhmc.sunysb.edu/views/ExecSummary/ExecutiveSummary?:embed=yes";
//  var url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
//  var url = "https://uhmc-tableau-d/views/ExecutiveSummary/ExecutiveSummary?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no";
  
  //  var url = "https://uhmc-tableau-d/views/ExecSummary/ExecutiveSummary?:embed=y";

//  var url = dashboard.dt["ExecutiveSummary"].url[0];
  var options = { width: placeholderDiv.offsetWidth, height: placeholderDiv.offsetHeight, hideTabs: true, hideToolbar: true, onFirstInteractive: function() {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    } };
  var viz = new tableau.Viz(placeholderDiv, url, options);






