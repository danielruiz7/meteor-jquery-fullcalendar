Package.describe({
  summary: "Arshaw FullCalendar jquery plugin original files.",
  name: "planettraining:jquery-fullcalendar",
  version: "2.4.0",
  git:"https://github.com/planet-training/meteor-jquery-fullcalendar.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use("jquery", "client");
  api.use("momentjs:moment@2.0.0");

  api.addFiles([
    'bower_components/fullcalendar/dist/fullcalendar.js',
    'bower_components/fullcalendar/dist/fullcalendar.css',
    //'bower_components/fullcalendar/dist/fullcalendar.print.css',
    'bower_components/fullcalendar/dist/gcal.js'
  ], "client");
});
