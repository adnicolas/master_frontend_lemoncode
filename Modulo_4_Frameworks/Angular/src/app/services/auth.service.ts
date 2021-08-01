import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject,BehaviorSubject } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userIsLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private username: BehaviorSubject<string> = new BehaviorSubject(null);
    public isLogged$: Observable<boolean> = this.userIsLogged.asObservable();
    public username$: Observable<string> = this.username.asObservable();
    constructor(private router: Router) {

    }
    public login(username: string, password: string): boolean {
        if (username === 'master8@lemoncode.net' && password === '12345678') {
            this.userIsLogged.next(true);
            this.username.next(username);
            localStorage.setItem('username', username);
            return true;
        } else {
            return false;
        }
    }
    public logout(): void {
        this.userIsLogged.next(false);
        this.username.next(null);
        this.router.navigate(['/home']);
    }
    public isLogged(): boolean {
        return this.userIsLogged.value;
    }
    public getUsername(): string {
        return this.username.value;
    }
}