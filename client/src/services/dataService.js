import Api from '@/services/api';

export default {
  fetchDatas () {
    return Api().get('data');
  }
};
