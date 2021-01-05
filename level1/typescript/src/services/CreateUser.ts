interface TechsObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechsObject>;
}

export default function createUser({ name = '', email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}