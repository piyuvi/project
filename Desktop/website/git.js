jQuery.githubUser = function(orgname, callback) {
   jQuery.getJSON('https://api.github.com/orgs/'+orgname+'/repos?callback=?',callback) 
}

 
jQuery.fn.loadRepositories = function(orgname) {
    this.html("<span>Querying GitHub for " + orgname +"'s repositories...</span>");
     
    var target = this;
    $.githubUser(orgname, function(data) {
        var repos = data.data; // JSON Parsing
        //sortByName(repos);
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            //if (this.name != (orgname.toLowerCase()+'.github.com')) {
            	list.append('<dt><a href="'+ this.html_url +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em>:</dt>');
            	list.append('<dd>' + this.description+'</dd><br/><hr>');
            //}
        });     
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};
