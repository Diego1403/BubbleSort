class bar {
   Constructor(){
   this.wid=0;
   this.val=0;
   }

   size(w ,v)
   { this.wid=w ; this.val=v;}


   show(pos){
      rect(200,200,500+pos*this.wid,this.val*5); 
   }

}