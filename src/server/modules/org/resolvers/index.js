import orgResolvers from './org';
import groupResolvers from './group';
import userResolvers from './user';
import queriesResolvers from './queries';
import mutationResolvers from './mutations';

let obj = {
  Query: {},
  Mutation: {},
  Subscription: {}
};

obj = orgResolvers(obj);
obj = groupResolvers(obj);
obj = userResolvers(obj);
obj = queriesResolvers(obj);
obj = mutationResolvers(obj);

/* eslint-disable no-unused-vars */
export default pubsub => obj;