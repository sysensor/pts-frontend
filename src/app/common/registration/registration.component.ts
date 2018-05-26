import {Component, OnInit, EventEmitter, Output, Input} from "@angular/core";
import {IRegistration} from "../interface/IRegistration";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    @Input()
    title: string;
    @Input()
    extraButtonName: string;
    @Input()
    extraButtonUrl: string;
    @Input()
    registration: IRegistration;
    @Input()
    showSpinning: boolean;
    @Input()
    success: boolean;
    @Input()
    message: string;
    @Output()
    registerEvent: EventEmitter<IRegistration>;

    constructor() {
        this.registration = {name: '', address: '', phone: null, username: '', password: ''};
        this.registerEvent = new EventEmitter<IRegistration>();
        this.title = "Registration";
        this.extraButtonName = "[Extra Button]";
        this.extraButtonUrl = "/extra";
        this.showSpinning = false;
        this.success = false;
        this.message = "";
    }

    ngOnInit() {
    }

    register() {
        console.log(this.registration);
        this.registerEvent.emit(this.registration);
    }
}
