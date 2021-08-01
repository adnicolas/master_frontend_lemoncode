import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Image } from '../components/gallery/gallery.component';

@Injectable({
    providedIn: 'root',
})
export class GalleryService {
    private selectedImg: BehaviorSubject<Image> = new BehaviorSubject(null);
    public selectedImg$: Observable<Image> = this.selectedImg.asObservable();
    private play: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public play$: Observable<boolean> = this.play.asObservable();
    constructor(private router: Router) {

    }
    public selectImage(img: Image) {
        this.selectedImg.next(img);
    }
    public checkCurrentImg(id: number): boolean {
        return this.selectedImg.value.id === id;
    }
    public playGallery() {
        this.play.next(true);
    }
    public pauseGallery() {
        this.play.next(false);
    }
}