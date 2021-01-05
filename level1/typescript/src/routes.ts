import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
	const user = createUser({ 
		name: "Jonathan",
		email: "jthan.lopes@gmail.com",
		password: "123456789" 
		techs: ['Node.js', 'Laravel', 'React', 'React-native', {title: 'HTML5', experience: 100}]
	});

	return response.json({message: 'Hello World with Typescript!'});
}