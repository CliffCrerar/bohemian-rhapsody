/**
 * App Login Model
 */


export interface iAppLoginForm {
    username: string;
    password: string;
}

export class AppLoginModel {
    constructor(
        public appTitle: string,
        public loginBoxHeading: string,
        public btnCaption: string,
        public subTitle: string,
        public loginLoader: boolean,
        public loginForm: iAppLoginForm,
    ) { }
}
