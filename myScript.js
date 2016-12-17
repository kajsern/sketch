$(document).ready(function(){
    var html="<tr>";
    for (i=0; i<16; i++){
	for(j=0;j<16; j++){
	    html+="<td class='gridelement'></td>";
	}
	html+="</tr><tr>";
    }
    html+="</tr>";
    $(".container").append(html);
    
    $(".gridelement").mouseenter(function(){
	$(this).css("background", "black");
    });    
});
