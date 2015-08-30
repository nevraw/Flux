(function() {
 loadOptions();
 buttonHandler();
})();

function buttonHandler() {
 var $submitButton = $('#submitButton');

 $submitButton.on('click', function() {
//  console.log('Submit');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
 });

 var $cancelButton = $('#cancelButton');

 $cancelButton.on('click', function() {
//  console.log('Cancel');
 
  var return_to = getQueryParam('return_to', 'pebblejs://close#');
  document.location = return_to;
 });
}

var $dateValue;
$("input[name=datemode]").change(function () {
 $datemodeValue = parseInt(this.value);
});



function loadOptions() {
 if (localStorage.datemode) {
  $datemodeValue = localStorage.datemode;
//  console.log('localStorage.datemode: ' + $datemodeValue);
  // setting radio' value
 } else {
  $datemodeValue = 0;
//  console.log('localStorage.datemode was undefined, now set to: ' + $datemodeValue);
 }
 $("input[name=datemode][value='" + $datemodeValue + "']").attr('checked', 'checked');

} 

function getAndStoreConfigData() {
// console.log('datemode value: ' + $datemodeValue);

 var options = {
  datemode: $datemodeValue
 };
 
 localStorage.datemode = options.datemode;

// console.log('Got options: ' + JSON.stringify(options));
 return options;
}

function getQueryParam(variable, defaultValue) {
 var query = location.search.substring(1);
 var vars = query.split('&');
 for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');
  if (pair[0] === variable) {
   return decodeURIComponent(pair[1]);
  }
 }
 return defaultValue || false;
}
