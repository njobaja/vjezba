<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const inputText = ref();
const inputDate = ref();

async function handleSubmit() {


  
  const response = await axios.post('https://eogsa514kin6a8o.m.pipedream.net', {
    someText: inputText.value,
    someDate: inputDate.value
  });

}

</script>

<template>
  <form>
    
    <div class="mb-3">
      <label class="form-label">Input text</label>
      <input type="text" name="test" class="form-control" v-model="inputText" required minlength="4" />
    </div>

    <div class="mb-3">
      <label class="form-label">Date</label>
      <Datepicker v-model="inputDate" :minDate="new Date()" autoApply ></Datepicker>
    </div>

    <button @click="handleSubmit()" type="button" class="btn btn-primary">Submit</button>
  </form>
</template>