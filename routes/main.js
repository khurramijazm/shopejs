
function indexData (){
var M = Backbone.Model.extend({});
var C = Backbone.Model.extend({
    model: M,
    url: 'data/data.json'
});

var col = new C();
alert(col.fetch());
}

exports.indexData = indexData;


