$(document).ready(function main(){
    function mktable(size){
	if(size==undefined){
	    var html="<tr>";
	    for (i=0; i<16; i++){
		for(j=0;j<16; j++){
		    html+="<td class='gridelement'></td>";
		}
		html+="</tr><tr>";
	    }
	    html+="</tr>";
	    $("table").append(html);
	    
	    $(".gridelement").mouseenter(function(){
		$(this).css("background", "black");
	    });
	    var userInput;
	    $("button").click(function(){
		$(".gridelement").css("background","white");
		userInput = prompt("Size of grid?");
		$("table").html("");
		mktable(userInput);
	    });
	}
	
	else{
	    var html="<tr>";
	    for (i=0; i<size; i++){
		for(j=0;j<size; j++){
		    html+="<td class='gridelement'></td>";
		}
		html+="</tr><tr>";
	    }
	    html+="</tr>";
	    $("table").append(html);
	    
	    $(".gridelement").mouseenter(function(){
		$(this).css("background", "black");
	    });
	    var userInput;
	    $("button").click(function(){
		$(".gridelement").css("background","white");
		userInput = prompt("Size of grid?");
		$("table").html("");
		mktable(userInput);
	    });
	}
    }
    mktable();
    
});
