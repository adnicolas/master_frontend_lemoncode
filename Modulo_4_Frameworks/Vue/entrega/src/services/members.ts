import { Member, User } from '../types/index'

export const membersService = {
    async get(name: string): Promise<Member[]> {
        const members = await fetch(`https://api.github.com/orgs/${name}/members`, {
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => response.json());
        return members;
    },
    async getUser(login: string): Promise<User> {
        return fetch(`https://api.github.com/users/${login}`, {
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => response.json()).catch(error => console.error(error));
    }
}