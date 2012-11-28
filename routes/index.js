
/*
 * GET home page.
 */

exports.index = function(req, res){
    var client = "";
  res.render('header',function(err,html){
      if(!err){
          client = html;
      }
  });
  res.render('index',{title :' wow hehehe'},function(err,html){
     if(!err){
         client = client + html;
     } 
  });
  
  res.send(client);
};