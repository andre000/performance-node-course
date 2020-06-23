import { pbkdf2 } from 'crypto';

/**
 * Function that simulates heavy work
 * @param duration Duration to run the function in miliseconds
 */
export default function doWork(cb: (hash) => void): void {
  pbkdf2('pass', 'salt', 100000, 512, 'sha512', (err, key) => cb(key));
}
