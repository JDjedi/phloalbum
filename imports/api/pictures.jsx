import { Mongo } from 'meteor/mongo';
import { FilesCollection } from 'meteor/ostrio:files';

export default Pictures = new Mongo.Collection('pictures');


