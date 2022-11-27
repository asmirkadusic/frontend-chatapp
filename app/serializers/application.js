import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload.data.attributes.email = payload.data.attributes.user.email;
        payload.data.attributes.password = payload.data.attributes.user.password;

        delete payload.data.attributes.user;

        return super.normalizeResponse(...arguments);
    }
}
