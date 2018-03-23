<template>
  <div class="col-sm-6 col=md4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'quote' ]
  }
</script>

<style>
.panel-body {
  font-family: 'Arizonia', cursive;
  font-size: 24px;
  color: #6E6E6E;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #FFE2E2;
}
</style>
