import { MongoClient, ObjectId } from 'mongodb';
import { getCollection } from '$lib/db';

export default function MongoDBAdapter(){
  return {

    async createUser(user) {
      const usersCollection = await getCollection('users');
      const { insertedId } = await usersCollection.insertOne(user);
      return { ...user, id: insertedId };
    },

    async getUser(id) {
      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: new ObjectId(id) });
      return user ? { ...user, id: user._id } : null;
    },

    async getUserByEmail(email) {
      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ email });
      return user ? { ...user, id: user._id } : null;
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const accountsCollection = await getCollection('accounts');
      const account = await accountsCollection.findOne({ providerAccountId, provider });
      if (!account) return null;

      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: account.userId });
      return user ? { ...user, id: user._id } : null;
    },

    async updateUser(user) {
      const usersCollection = await getCollection('users');
      const { value } = await usersCollection.findOneAndUpdate(
        { _id: new ObjectId(user.id) },
        { $set: { ...user, id: undefined } },
        { returnOriginal: false },
      );
      return value ? { ...value, id: value._id } : null;
    },

    async deleteUser(id) {
      const usersCollection = await getCollection('users');
      await usersCollection.deleteOne({ _id: new ObjectId(id) });
    },

    async linkAccount(data) {
      const accountsCollection = await getCollection('accounts');
      const account = { ...data, userId: new ObjectId(data.userId) };
      await accountsCollection.insertOne(account);
      return account;
    },

    async unlinkAccount({ providerAccountId, provider }) {
      const accountsCollection = await getCollection('accounts');
      await accountsCollection.deleteOne({ providerAccountId, provider });
    },

    async createSession(session) {
      const sessionsCollection = await getCollection('sessions');
      const { insertedId } = await sessionsCollection.insertOne(session);
      return { ...session, id: insertedId };
    },

    async getSessionAndUser(sessionToken) {
      const sessionsCollection = await getCollection('sessions');
      const session = await sessionsCollection.findOne({ sessionToken });
      if (!session) return null;

      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: session.userId });
      if (!user) return null;

      return { session: { ...session, id: session._id }, user: { ...user, id: user._id } };
    },

    async updateSession(session) {
      const sessionsCollection = await getCollection('sessions');
      const { value } = await sessionsCollection.findOneAndUpdate(
           { sessionToken: session.sessionToken },
        { $set: { ...session, id: undefined } },
        { returnOriginal: false },
      );
      return value ? { ...value, id: value._id } : null;
    },

    async deleteSession(sessionToken) {
      const sessionsCollection = await getCollection('sessions');
      await sessionsCollection.deleteOne({ sessionToken });
    },

    async createVerificationToken(verificationToken) {
      const verificationTokensCollection = await getCollection('verification_tokens');
      const { insertedId } = await verificationTokensCollection.insertOne(verificationToken);
      return { ...verificationToken, id: insertedId };
    },

    async useVerificationToken({ identifier, token }) {
      const verificationTokensCollection = await getCollection('verification_tokens');
      const { value } = await verificationTokensCollection.findOneAndDelete({ identifier, token });

      return value ? { ...value, id: value._id } : null;
    },
  };
}