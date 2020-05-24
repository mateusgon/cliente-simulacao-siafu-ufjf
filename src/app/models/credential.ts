export class Credential {
    public username: string;
    public password: string;

    public setCredential(_username, _password) {
        this.username = _username;
        this.password = _password;
    }
}