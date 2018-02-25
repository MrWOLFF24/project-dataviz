import {Bar} from 'vue-chartjs'
import DataService from '@/services/dataService';

export default {
  extends: Bar,
  methods: {
    async getDataLineChart (clbk) {
      const response = await DataService.fetchDatas();
      const NBAData = response.data;
      NBAData.forEach((res) => {
        clbk(res.resultSets[4].rowSet);
      })
    }
  },
  mounted () {
    // DATA FROM SERVER
    this.getDataLineChart((clback) => {
      let list = clback;
      list.forEach((el) => {
        console.log(el[5]);
      })
    });

    this.renderChart({
      labels: ['04/09/2017', '06/09/2017', '07/09/2017', '08/09/2017', '10/09/2017', '11/09/2017', '12/09/2017'],
      datasets: [
        {
          label: 'Boston',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: '#55efc4',
          data: [0.638*100, 0.646*100, 0.646*100, 0.646*100, 100, 0.833*100, 0.815*100]
        },
        {
          label: 'Miami',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: '#74b9ff',
          data: [0.488*100, 0.5*100, 0.5*100, 0.5*100, 0.5*100, 0.455*100, 0.48*100]
        },
        {
          label: 'New York',
          borderColor: '#02e155',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: '#a29bfe',
          data: [0.37*100, 0.378*100, 0.378*100, 0.378*100, 0, 0.4*100, 0.393*100]
        },
        {
          label: 'Washington',
          borderColor: '#e17f00',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: '#fab1a0',
          data: [0.6*100, 0.598*100, 0.598*100, 0.598*100, 0.667*100, 0.636*100, 0.6*100]
        },
        {
          label: 'Brooklyn',
          borderColor: '#e1005a',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: '#fd79a8',
          data: [0.25*100, 0.244*100, 0.244*100, 0.244*100, 0, 0.182*100, 0.2*100]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
