/**
 * App Login Model
 */


export class AppLoginForm {
    constructor(
        public username: string,
        public password: string
    ) { }
}

export class AppLoginModel {
    constructor(
        public appTitle: string,
        public loginBoxHeading: string,
        public btnCaption: string,
        public subTitle: string,
        public loginLoader: boolean,
        public loginForm: AppLoginForm,
        public userNameDanger: string,
        public passwordDanger: string
    ) { }
}
