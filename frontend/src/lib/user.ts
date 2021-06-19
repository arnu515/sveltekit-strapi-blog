import { writable } from 'svelte/store';
import type { User } from './types';

const user = writable<User | null>(null);

export default user;
