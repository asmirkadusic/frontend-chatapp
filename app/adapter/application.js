import JSONAdapter from '#ember/adapter/json';

export default JSONAdapter.extend({
    host: 'http://localhost:3000/',

    buildURL(...args){
        return '${super.buildURL(...args)}.json';
    }
});
