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
    { src: 'assets/galerija1.jpg', alt: 'Sala Rustikana – pogled 1' },
    { src: 'assets/galerija2.jpg', alt: 'Sala Rustikana – pogled 2' },
    { src: 'assets/galerija3.jpg', alt: 'Detalji dekoracije' },
    { src: 'assets/galerija4.jpg', alt: 'Postavka stolova' },
    { src: 'assets/galerija5.jpg', alt: 'Postavka stolova' },
    { src: 'assets/rustikana-detail-1.jpg', alt: 'Postavka stolova' },
    { src: 'assets/rustikana-detail-2.jpg', alt: 'Postavka stolova' },
    { src: 'assets/rustikana-detail-3.jpg', alt: 'Postavka stolova' },
  ];

  hotelImages: GalleryImage[] = [
    { src: 'assets/galerijahotel1.jpg', alt: 'Hotel – soba 1' },
    { src: 'assets/galerijahotel2.jpg', alt: 'Hotel – soba 2' },
    { src: 'assets/galerijahotel3.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelHodnik.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelKat.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelSoba1.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelSobaWc.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelVrataSoba.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/motelWc.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/galerijahotel4.jpg', alt: 'Detalji smještaja' },
    { src: 'assets/galerijahotel5.jpg', alt: 'Detalji smještaja' },
    { src: 'assets/galerijahotel6.jpg', alt: 'Hotel – soba 2' },
    { src: 'assets/galerijahotel7.jpg', alt: 'Recepcija hotela' },
    { src: 'assets/galerijahotel8.jpg', alt: 'Detalji smještaja' },
    { src: 'assets/galerijahotel9.jpg', alt: 'Detalji smještaja' },
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
