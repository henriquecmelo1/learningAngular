export class Feedback{
    constructor(
        public emailAddress: string,
        public phoneNumber: string,
        public rateExperience: number,
        public title: string,
        public feedback: string,
    ){}
}