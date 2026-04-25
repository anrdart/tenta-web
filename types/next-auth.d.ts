import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      role: 'ADMIN' | 'EDITOR';
    } & DefaultSession['user'];
  }
  interface User {
    role: 'ADMIN' | 'EDITOR';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    role: 'ADMIN' | 'EDITOR';
  }
}
