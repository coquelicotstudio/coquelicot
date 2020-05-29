<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
@import "./assets/coq-font/stylesheet.css";
@import "./assets/coquelicot.css";
@import "./assets/bulma-c.css";
</style>
