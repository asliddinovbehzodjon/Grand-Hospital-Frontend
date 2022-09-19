<div class="container mt-3 mb-3 ">
    <center>
     <div class="pagination">
      
         <a @click="previouspage" :class="{'disabled':!previous}" >{{$t('previous')}}</a>
        
      
         <a class="active">{{current_page_num}}</a>
        
         <a @click="nextpage" :class="{'disabled':!next}">{{$t('next')}}</a>
       </div>
    </center>
    </div>