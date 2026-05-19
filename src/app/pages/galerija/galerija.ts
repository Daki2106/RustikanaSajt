import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type GalleryImage = { src: string; alt: string };

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './galerija.html',
})
export class Galerija {
  activeTab: 'sala' | 'hotel' = 'sala';

  salaImages: GalleryImage[] = [
    { src: 'assets/galerija2.jpg', alt: 'Sala Rustikana' },
    { src: 'assets/galerija4.jpeg', alt: 'Postavka stolova' },
    { src: 'assets/galerija5.jpg', alt: 'Rustikana izvana' },
    { src: 'assets/galerija6.jpeg', alt: 'Sala Rustikana' },
    { src: 'assets/galerija7.jpeg', alt: 'Sala Rustikana' },
    { src: 'assets/galerija8.jpeg', alt: 'Sala Rustikana' },
    { src: 'assets/galerija9.jpeg', alt: 'Stol mladenci' },
    { src: 'assets/galerija10.jpeg', alt: 'Sala Rustikana' },
    { src: 'assets/galerija1.jpg', alt: 'Sala Rustikana' },

    { src: 'assets/rustikana-detail-1.jpg', alt: 'Stol mladenci-2' },
    { src: 'assets/rustikana-detail-2.jpg', alt: 'Prvi ples' },
    { src: 'assets/rustikana-detail-3.jpg', alt: 'Postavka stolova' },
  ];

  hotelImages: GalleryImage[] = [
    { src: 'assets/rs-1000.jpg', alt: 'Motel' },
    { src: 'assets/rs-1001.jpg', alt: 'Motel' },
    { src: 'assets/rs-1003.jpg', alt: 'Motel' },
    { src: 'assets/rs-1004.jpg', alt: 'Motel' },
    { src: 'assets/rs-1006.jpg', alt: 'Motel' },
    { src: 'assets/rs-1007.jpg', alt: 'Motel' },
    { src: 'assets/rs-1008.jpg', alt: 'Motel' },
    { src: 'assets/rs-1009.jpg', alt: 'Motel' },
    { src: 'assets/rs-1011.jpg', alt: 'Motel' },
    { src: 'assets/rs-1012.jpg', alt: 'Motel' },
    { src: 'assets/rs-1013.jpg', alt: 'Motel' },
    { src: 'assets/rs-1015.jpg', alt: 'Motel' },
    { src: 'assets/rs-1016.jpg', alt: 'Motel' },
    { src: 'assets/rs-1018.jpg', alt: 'Motel' },
    { src: 'assets/rs-1021.jpg', alt: 'Motel' },
    { src: 'assets/rs-1022.jpg', alt: 'Motel' },
    { src: 'assets/rs-1025.jpg', alt: 'Motel' },
    { src: 'assets/rs-1028.jpg', alt: 'Motel' },
    { src: 'assets/rs-1030.jpg', alt: 'Motel' },
    { src: 'assets/rs-1036.jpg', alt: 'Motel' },
    { src: 'assets/rs-1037.jpg', alt: 'Motel' },
    { src: 'assets/rs-1039.jpg', alt: 'Motel' },
    { src: 'assets/rs-1043.jpg', alt: 'Motel' },
    { src: 'assets/rs-1051.jpg', alt: 'Motel' },
    { src: 'assets/rs-1058.jpg', alt: 'Motel' },
    { src: 'assets/rs-1065.jpg', alt: 'Motel' },

  ];

    // LIGHTBOX STATE
      lightboxOpen = false;
      lightboxMode: 'sala' | 'hotel' = 'sala';
      lightboxIndex = 0;
      constructor(private route: ActivatedRoute) {}

      ngOnInit(): void {
        this.route.queryParamMap.subscribe((params) => {
          const tab = params.get('tab');
          if (tab === 'hotel' || tab === 'sala') {
            this.activeTab = tab;
          }
        });
      }
      get lightboxImage(): GalleryImage | null {
        if (!this.lightboxOpen) return null;

        const list =
          this.lightboxMode === 'sala' ? this.salaImages : this.hotelImages;

        if (!list.length) return null;
        return list[this.lightboxIndex] ?? null;
      }

      openLightbox(mode: 'sala' | 'hotel', index: number) {
        this.lightboxMode = mode;
        this.lightboxIndex = index;
        this.lightboxOpen = true;
      }

      closeLightbox() {
        this.lightboxOpen = false;
      }

      nextImage() {
        const list =
          this.lightboxMode === 'sala' ? this.salaImages : this.hotelImages;
        if (!list.length) return;
        this.lightboxIndex = (this.lightboxIndex + 1) % list.length;
      }

      prevImage() {
        const list =
          this.lightboxMode === 'sala' ? this.salaImages : this.hotelImages;
        if (!list.length) return;
        this.lightboxIndex =
          (this.lightboxIndex - 1 + list.length) % list.length;
      }
}
