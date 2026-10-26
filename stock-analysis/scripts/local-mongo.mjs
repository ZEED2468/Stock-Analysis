/**
 * Starts an in-memory MongoDB and keeps it alive for local e2e.
 * Writes/updates MONGODB_URI in .env.local (other keys preserved).
 */
import { MongoMemoryServer } from 'mongodb-memory-server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const envPath = path.join(root, '.env.local');

function upsertEnv(filePath, entries) {
  let text = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  for (const [key, value] of Object.entries(entries)) {
    const line = `${key}=${value}`;
    const re = new RegExp(`^${key}=.*$`, 'm');
    if (re.test(text)) {
      text = text.replace(re, line);
    } else {
      text = `${text.trimEnd()}${text.trim() ? '\n' : ''}${line}\n`;
    }
  }
  fs.writeFileSync(filePath, text.endsWith('\n') ? text : `${text}\n`, 'utf8');
}

process.env.MONGOMS_LAUNCH_TIMEOUT = '120000';

const mongod = await MongoMemoryServer.create({
  instance: {
    dbName: 'intellistock',
    launchTimeout: 120000,
  },
});
const uri = mongod.getUri('intellistock');

upsertEnv(envPath, {
  MONGODB_URI: uri,
});

console.log(`OK: MongoMemoryServer running`);
console.log(`MONGODB_URI written to .env.local`);
console.log(`URI host ready for IntelliStock auth`);
console.log(`Keep this process open while using the app.`);

const shutdown = async () => {
  try {
    await mongod.stop();
  } catch {}
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Keep alive
await new Promise(() => {});
