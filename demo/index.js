'use strict';

import Vue from 'vue';
import Multiselect from '../src/index';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Multiselect);

new Vue({
    el: '#app',
    data: {
        foo: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
