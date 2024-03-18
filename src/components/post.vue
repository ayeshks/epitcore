<template>
  <div class="collapse collapse-plus bg-base-200">
   <input type="radio" name="my-accordion-3" /> 
   <div class="collapse-title text-xl font-medium">
    {{ title }}
    </div>
    <div class="collapse-content"> 
    <p>{{ body }}</p>
  </div>
</div>
</template>
<script>
export default {
    props:['title', 'body']
}
</script>