module Necropolis {
    export class TimeController {

        public timeModifier: number;
        public timeSlowed: boolean;

        constructor() {
            this.timeModifier = 5;
            this.timeSlowed = false;
        }

        slowTime() {
            this.timeModifier = 1;
            this.timeSlowed = true;
        }

        speedUpTime() {
            this.timeModifier = 5;
            this.timeSlowed = false;
        }
        
    }

}