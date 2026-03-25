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
    { src: 'assets/galerijahotel1.jpg', alt: 'Motel' },
    { src: 'assets/galerijahotel2.jpg', alt: 'Motel - soba' },
    { src: 'assets/galerijahotel3.jpg', alt: 'Motel - wc' },
    { src: 'assets/motelHodnik.jpg', alt: 'Motel - hodnik' },
    { src: 'assets/motelKat.jpg', alt: 'Motel - hodnik kat ' },
    { src: 'assets/motelSoba1.jpg', alt: 'Motel - soba' },
    { src: 'assets/motelSobaWc.jpg', alt: 'Motel - soba' },
    { src: 'assets/motelVrataSoba.jpg', alt: 'Motel - soba' },
    { src: 'assets/motelWc.jpg', alt: 'Motel - wc' },
    { src: 'assets/galerijahotel4.jpg', alt: 'Motel - wc' },
    { src: 'assets/galerijahotel5.jpg', alt: 'Motel - soba' },
    { src: 'assets/galerijahotel6.jpg', alt: 'Motel - hodnik' },
    { src: 'assets/galerijahotel7.jpg', alt: 'Motel - hodnik soba' },
    { src: 'assets/galerijahotel8.jpg', alt: 'Recepcija' },
    { src: 'assets/galerijahotel9.jpg', alt: 'Motel - soba' },
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
