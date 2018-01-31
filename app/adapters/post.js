import typicode from './typicode'
import DS from 'ember-data';

export default typicode.extend({
    pathForType() {
        return 'posts';
    }
});
