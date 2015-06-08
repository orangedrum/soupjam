  //********** Configuring Instance of Project **********//
  var client = new Keen({
    projectId: "5568e4bfd2eaaa3e1aaa8a0b",   // String (required always)
    writeKey: "26ff004d48aca17b399923bc79b34c5b6ff3982f17ce12cc5345359449d1d0869c852aea9589a4608b4411147ef646332ccbb7189ca158ebb0e3445a4e94f6b8bf6249f2441d027317a231b3a24403cf18c4b6515d2ca00def9018c76f2d99571512b288907fd609f74c90d8b82596eb",     // String (required for sending data)
    readKey: "74369a2efe3652a70f08937cba79043196f45ea1e12b8644c3ef6abcb1b1a5079c9be18da969d6a0237133753d3e2c88cfa7e4ec963eec7ed742a596678f617089a43bcdc93b6b29bd07e2c3cb1dc11ca76a2155c70249490676690de8cc2035f31064aa7c516095d4a76dee64243c28",       // String (required for querying data)
    protocol: "https",              // String (optional: https | http | auto)
    host: "api.keen.io/3.0",        // String (optional)
    requestType: "jsonp"            // String (optional: jsonp, xhr, beacon)
  });


  

  //********** Listeners **********//
  $("#learn_more").on("click", recordLearnmore);
  $("#musicians").on("click", recordMusicians);
  $("#charities").on("click", recordCharities);
  $("#fans").on("click", recordFans);
  $("#envision").on("click", recordEnvision);



  

  //********** CTAs as Data Objects **********//

  function recordLearnmore(){
    // Create a data object with the properties you want to send
    var recordLearnmore = {
      item: "recordLearnmore",
      referrer: document.referrer,
      keen: {
        timestamp: new Date().toISOString()
      }
    }

    //Send it to the collection
    client.addEvent("recordLearnmore", recordLearnmore, function(err, res){
    });
  };

  function recordMusicians(){
    // Create a data object with the properties you want to send
    var recordMusicians = {
      item: "recordMusicians",
      referrer: document.referrer,
      keen: {
        timestamp: new Date().toISOString()
      }
    }

    //Send it to the collection
    client.addEvent("recordMusicians", recordMusicians, function(err, res){
    });
  };

  function recordCharities(){
    // Create a data object with the properties you want to send
    var recordCharities = {
      item: "recordCharities",
      referrer: document.referrer,
      keen: {
        timestamp: new Date().toISOString()
      }
    }

    //Send it to the collection
    client.addEvent("recordCharities", recordCharities, function(err, res){
    });
  };

  function recordFans(){
    // Create a data object with the properties you want to send
    var recordFans = {
      item: "recordFans",
      referrer: document.referrer,
      keen: {
        timestamp: new Date().toISOString()
      }
    }

    //Send it to the collection
    client.addEvent("recordFans", recordFans, function(err, res){
    });
  };

  function recordEnvision(){
    // Create a data object with the properties you want to send
    var recordEnvision = {
      item: "recordEnvision",
      referrer: document.referrer,
      keen: {
        timestamp: new Date().toISOString()
      }
    }

    //Send it to the collection
    client.addEvent("recordEnvision", recordEnvision, function(err, res){
    });
  };





  

  //********** Recording Clicks as Group **********//
  var multipleEvents = {
    "visitor_clicks": [
      { item: "recordLearnmore"},
      { item: "recordMusicians"},
      { item: "recordCharities"},
      { item: "recordFans"},
      { item: "recordEnvision"}
    ]
  };
  // Send multiple events to several collections
  client.addEvents(multipleEvents, function(err, res){
  });





  //********** visualization **********//
  Keen.ready(function(){

    //learn more count//
    var count = new Keen.Query("count", {
      eventCollection: "recordLearnmore"
    });
    client.draw(count, document.getElementById("my_chart"), {
      chartType: "metric",
      title: "Count: Learn More",
      colors: ["#49c5b1"]
    });


    //pie chart test//
    var visitor_clicks = new Keen.Query("count", {
      eventCollection: "visitor_clicks",
      groupBy: "item"
    });
    client.draw(visitor_clicks, document.getElementById("count-pageviews-piechart"), {
      chartType: "piechart",
      title: "Clicks"
    });
  });