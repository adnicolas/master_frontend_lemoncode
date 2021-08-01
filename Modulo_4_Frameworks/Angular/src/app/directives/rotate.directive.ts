import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: 'img[rotate]'
})
export class RotateDirective {
    @Input() rotate: string;
    @Input() step: string;
    private defaultStep = 10;
    private elementRef: ElementRef;
    constructor(element: ElementRef) {
        this.elementRef = element;
    }
    ngOnInit() {
        const toRotate: number = isNaN(parseInt(this.rotate)) ? 0 : parseInt(this.rotate);
        const arg = `rotate(${toRotate.toString()}deg)`;
        this.elementRef.nativeElement.style.transform = arg;
    }
    @HostListener('mousedown', ['$event']) onMouseDown(e) {
        let toRotate: number = isNaN(parseInt(this.step)) ? this.defaultStep : parseInt(this.step);
        if (this.elementRef.nativeElement.style.transform) {
            const numeric = this.elementRef.nativeElement.style.transform.match(/\d+/g);
            toRotate += parseInt(numeric[0]);
        }
        const arg = `rotate(${e.shiftKey ? -toRotate.toString() : +toRotate.toString()}deg)`;
        this.elementRef.nativeElement.style.transform = arg;
    }
}