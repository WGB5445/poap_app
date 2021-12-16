<template>
  <q-page class="flex flex-center">
    
    <div>
        <q-input rounded outlined v-model="text" label="Rounded outlined" />
        <q-btn @click="loadData" label="Do something" />
       
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
// import Web3 from 'web3-utils'

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      text:'',
    }
  },
  setup(){
     const $q = useQuasar()

  $q.notify('Message')
  },
  methods:{
    
    loadData () {
      console.log(this.text)
    // api.get('https://api.poap.xyz/actions/scan/')
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch(() => {
    //     this.$q.notify({
    //       color: 'negative',
    //       position: 'top',
    //       message: 'Loading failed',
    //       icon: 'report_problem'
    //     })
    //   })
    }
  }
})
</script>
