export interface Post {
	id: number;
	title: string;
	description: string;
	content: string;
	author: Author;
	created_at: string;
	updated_at: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	provider: string;
	confirmed: boolean;
	blocked: boolean;
	role: Role;
	created_at: string;
	updated_at: string;
	posts: Post[];
}

export interface Role {
	id: number;
	name: string;
	description: string;
	type: string;
}

export interface Author extends Omit<Omit<User, 'posts'>, 'role'> {
	role: Role['id'];
}
