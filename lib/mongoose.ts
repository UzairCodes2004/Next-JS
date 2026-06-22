
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable in .env'
  );
}

/**
  Cached connection stored on the Node.js global object so that
 hot-module reloads in development do not create extra connections.
 */
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

if (!global._mongooseCache) {
  global._mongooseCache = { conn: null, promise: null };
}

const cache = global._mongooseCache;

async function dbConnect(): Promise<typeof mongoose> {
  // Return existing connection if already established
  if (cache.conn) {
    return cache.conn;
  }

  // Reuse an in-flight connection promise (avoids parallel connection storms)
  if (!cache.promise) {
    cache.promise = mongoose
      .connect(MONGO_URI, {
        bufferCommands: false,
        family:4,
        serverSelectionTimeoutMS: 5000
      })
      .then((m) => m);
  }

  cache.conn = await cache.promise;
  return cache.conn;
}

export default dbConnect;
