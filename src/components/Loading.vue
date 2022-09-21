<template>
    <div class="loading">
        <img
          class="image"
          src="../assets/loading.gif"
          alt="loading..." 
          
        />
    </div>
    </template>
    
    <script>
    export default {
        name: 'Loading'
    }
    </script>
    
    <style scoped>
    .loading {
      position: relative;

      z-index: 1000;
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 100%;
      transition: ease;
    }
    .loading img {
      
      position: absolute;
      width: 20%;
      left: 50%;
      top: 50%;
      transform: translate(-50%,50%);
    }
    </style>