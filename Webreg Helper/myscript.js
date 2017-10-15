var preWord = "";
      var isAlpha = function(str){return /[A-Z']+/.test(str)};
   
      document.onmousemove = function(event){
        var e = event || window.event;

        var r = document.caretRangeFromPoint(event.clientX, event.clientY);
       
        if (!r) return true;
        var pX = event.pageX;
        var pY = event.pageY;
        var so = r.startOffset;
        
        var eo = r.endOffset;
        
        var tr = r.cloneRange();
        
        var text='';
        
        if (r.startContainer.data) while (so >= 1){
            
            tr.setStart(r.startContainer, --so);
            
            text = tr.toString();
            
            if (!isAlpha(text.charAt(0))){
                tr.setStart(r.startContainer, so + 1);
               
                break;
            }
        }
        
        if (r.endContainer.data) while (eo < r.endContainer.data.length){
            tr.setEnd(r.endContainer, ++eo);
            text = tr.toString();
            if (!isAlpha(text.charAt(text.length - 1))){
                tr.setEnd(r.endContainer, eo - 1);
                break;
            }
        }
        var word = tr.toString();
        
        if(!word.length)return;
        var s = window.getSelection();
        
        s.removeAllRanges();
        
        s.addRange(tr);
        
        if(preWord == word)return;
        
        preWord = word;
        var showDiv = document.getElementById("selectionP");
        if(showDiv)
        {
        		document.body.removeChild(showDiv);
        }
        if(word.length==1)return;
        
        var p = document.createElement("div");
        if(word=="TJANG") {p.innerHTML = word+" "+"AVG 4.4"+"   "+"detail";}
        if(word=="CENTENO") {p.innerHTML = word+" "+"AVG 4.4"+"   "+"detail";}
        if(word=="TREES") {p.innerHTML = word+" "+"AVG 3.8"+"   "+"detail";}
        if(word=="STEINBERG ") {p.innerHTML = word+" "+"AVG 2.8"+"   "+"detail";}
        if(word=="BORGIDA") {p.innerHTML = word+" "+"AVG 2.6"+"   "+"detail";}
        if(word=="MINSKY") {p.innerHTML = word+" "+"AVG 1.6"+"   "+"detail";}
        if(word=="MIRANDA") {p.innerHTML = word+" "+"AVG 4.0"+"   "+"detail";}
        else{p.innerText = word+"   "+"detail";}
        p.style.position = "absolute";
        p.style.backgroundColor = '#dedede';
        p.style.border = '1px solid #aaa';
        p.style.padding = "10px";
        p.id = "selectionP";
        p.style.left = e.pageX+"px";
        p.style.top = e.pageY+"px";
        document.body.appendChild(p);

        document.getElementById("selectionP").onclick = function()
{
    //alert('ahaha');
    chrome.runtime.sendMessage(word);
};
}


