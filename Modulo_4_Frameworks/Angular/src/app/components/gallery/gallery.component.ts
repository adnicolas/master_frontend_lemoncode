import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
export interface Image {
  id: number,
  src: string,
  title: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {
  public images: Array<Image> = [
    {
      id: 1,
      src: 'assets/playas/playa1.jpg',
      title: 'Playa 1'
    },
    {
      id: 2,
      src: 'assets/playas/playa2.jpg',
      title: 'Playa 2'
    },
    {
      id: 3,
      src: 'assets/playas/playa3.jpg',
      title: 'Playa 3'
    },
    {
      id: 4,
      src: 'assets/playas/playa4.jpg',
      title: 'Playa 4'
    },
    {
      id: 5,
      src: 'assets/playas/playa5.jpg',
      title: 'Playa 5'
    },
    {
      id: 6,
      src: 'assets/playas/playa6.jpg',
      title: 'Playa 6'
    },
    {
      id: 7,
      src: 'assets/playas/playa7.jpg',
      title: 'Playa 7'
    },
    {
      id: 8,
      src: 'assets/playas/playa8.jpg',
      title: 'Playa 8'
    },
  ]
  //public currentImg;
  public playClicked = false;
  private interval;
  private selected: Image;
  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.selectedImg$.subscribe(selectedImg => this.selected = selectedImg);
    this.galleryService.selectImage(this.images[0]);
  }

  public setImg(img) {
    this.galleryService.selectImage(img);
  }
  public checkImg(position: string): boolean {
    switch (position) {
      case 'first':
        return this.galleryService.checkCurrentImg(this.images[0].id);
      case 'last':
        return this.galleryService.checkCurrentImg(this.images[7].id);
    }
  }
  public changeImg(move: number): void {
    const newId = this.selected.id + move;
    const newImg = this.images.find(img => img.id === newId);
    if (newImg) {
      this.galleryService.selectImage(newImg);
    } else if (this.playClicked) {
      this.pause();
    }
  }
  public play(): void {
    this.galleryService.playGallery();
    this.interval = setInterval( () => this.changeImg(1), 2000 );
  }
  public pause(): void {
    clearInterval(this.interval);
    this.galleryService.pauseGallery();
  }
}
