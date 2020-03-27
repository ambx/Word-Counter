function result(){
    var s=document.querySelector('textarea').value;
    const char= s.length;
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");    
    const word=s.split(" ").length;
    document.getElementById('no-char').textContent= char;
    document.getElementById('no-words').textContent= word;

}

document.getElementById("click").onclick = function() {result()};


