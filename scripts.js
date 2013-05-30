$(document).ready(function(){
  			$("p").click(function(){
	  		$(this).hide();
    
    
	  		$("p").wrap("<div></div>");
	  			  	    
         $(function() {
            $("#evtTarget").hover(highlight, highlight);

            $("#evtTarget").toggle(fnClick1, fnClick2);
        });
        
        function highlight(evt) {
            $("#evtTarget").toggleClass("highlighted");
        }
        function fnClick1() {
            $("#evtTarget").html("Click!");
        }
        function fnClick2() {
            $("#evtTarget").html("Clack!");
        }	
        
        
                // Inspect the length and size() of a result set
        alert("There are " + $("p").length + " <p> elements");

        // use the get() and get(index) to retrieve DOM elements
        var elems = $("li").get();
        alert("There are " + elems.length + " <li> tags");
        alert($("li").get(0));

        // use the find function
        $("ul").find("li.b").css("border", "3px solid red");

        // use the each function
        var leftmargin = 0;
        var border = 3;
        $("p").each(function() {
            $(this).css("border", border+"px solid red");
            $(this).css("margin-left", leftmargin);
            border += 2;
            leftmargin += 10;
        });
    });                
});   
       