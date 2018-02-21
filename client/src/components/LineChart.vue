<template>
  <div id="chart">
    <h1>SPORTSVIZ</h1>
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <data-chart></data-chart>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="Chart__list">
        <div class="Chart-radar">
          <h2>Radarchart</h2>
          <radar-chart></radar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataChart from '@/services/dataChart';
import radarChart from '@/services/radarChart';
export default {
    name: "line-chart",
    components: {
      dataChart,
      radarChart
    }
}
</script>

<style scoped>
  #chart {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
  .container {
    max-width: 800px;
    margin:  0 auto;
  }
  .Chart {
    background: #130f40;
    box-shadow: 0 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
  }
  .Chart-radar {
    background: #fff;
    box-shadow: 0 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
  }
  .Chart h2, Chart-radar h2 {
    margin-top: 0;
    padding: 15px 0;
    color: #f0932b;
    border-bottom: 1px solid #323d54;
  }
</style>
