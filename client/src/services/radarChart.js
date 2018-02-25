import {Radar} from 'vue-chartjs'

export default {
  extends: Radar,
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

    this.renderChart({
      labels: ['Boston', 'Cleveland', 'Toronto', 'Washington', 'Atlanta', 'Milwaukee', 'Indiana'],
      datasets: [
        {
          label: 'Wins',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [51, 51, 50, 48, 42, 40, 39]
        },
        {
          label: 'Loose',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [29, 29, 31, 32, 48, 40, 41]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, scaleFontColor: "#FFF"})

  }
}
