<template>
<section class="section">
    <div class="row">
                 <div class="col-lg-6">
                <div class="card-body">
                <h5>Pie Chart</h5>
                <ChartPie></ChartPie>
                </div>
           
        </div>
        <div class="col-lg-6">
            <div class="card-body">
                <h5 class="card-title">Line Chart</h5>
            <CharrtLine></CharrtLine>
    </div>
    </div>
    </div>
</section>



    
</template>
<script>
import ChartPie from '@/components/Charts/ChartPie.vue'
import ChartLine from '@/components/Charts/ChartLine.vue'
export default {
     name: 'VendorsReports',
     components: {
     ChartPie,
     ChartLine
          
} 
}
</script>