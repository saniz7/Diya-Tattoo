import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-recent-works',
  imports: [CommonModule],
  templateUrl: './recent-works.html',
  styleUrl: './recent-works.scss',
})
export class RecentWorks implements OnInit, OnDestroy {
  selectedImage = signal<GalleryImage | null>(null);
  currentImageIndex = signal<number>(0);

  galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/assets/images/Geometric Back Tattoo Design.jpeg',
      alt: 'Geometric Back Tattoo',
    },
    {
      id: 2,
      src: '/assets/images/Trishul Shiva Symbol Tattoo.jpeg',
      alt: 'Trishul Shiva Symbol Tattoo',
    },
    {
      id: 3,
      src: '/assets/images/Japanese Samurai Sleeve Tattoo.PNG',
      alt: 'Japanese Samurai Sleeve Tattoo',
    },
    {
      id: 4,
      src: '/assets/images/Tiger Arm Tattoo Design.jpeg',
      alt: 'Tiger Arm Tattoo',
    },
    {
      id: 5,
      src: '/assets/images/Koi Fish Tattoo with Red Ink.jpeg',
      alt: 'Koi Fish Tattoo with Red Ink',
    },
    {
      id: 6,
      src: '/assets/images/Floral Arm Tattoo Design.jpeg',
      alt: 'Floral Arm Tattoo',
    },
    {
      id: 7,
      src: '/assets/images/Clock-and-Rose-Tattoo-Sleeve.jpeg',
      alt: 'Clock and Rose Tattoo Sleeve',
    },
    {
      id: 8,
      src: '/assets/images/Floral Thigh Tattoo Design.jpeg',
      alt: 'Floral Thigh Tattoo',
    },
    {
      id: 9,
      src: '/assets/images/Lord Hanuman Tattoo Portrait.jpeg',
      alt: 'Lord Hanuman Tattoo Portrait',
    },
    {
      id: 10,
      src: '/assets/images/Minimal Chest Tattoo Design.jpeg',
      alt: 'Minimal Chest Tattoo',
    },
    {
      id: 11,
      src: '/assets/images/Dragon Stomach Tattoo Design.jpeg',
      alt: 'Dragon Stomach Tattoo',
    },
    {
      id: 12,
      src: '/assets/images/Skeleton Linework Tattoo.jpeg',
      alt: 'Skeleton Linework Tattoo',
    },
    {
      id: 13,
      src: '/assets/images/Minimal Turtle Tattoo Design.jpeg',
      alt: 'Minimal Turtle Tattoo',
    },
    {
      id: 14,
      src: '/assets/images/Buddha.jpeg',
      alt: 'Buddha Tattoo',
    },
    {
      id: 15,
      src: '/assets/images/Flower Tattoo Design.jpeg',
      alt: 'Flower Tattoo',
    },
    {
      id: 16,
      src: '/assets/images/Minimalist Tattoo Design.jpeg',
      alt: 'Minimalist Tattoo',
    },
    {
      id: 17,
      src: '/assets/images/Buddha Hand Tattoo Design.jpeg',
      alt: 'Buddha Hand Tattoo',
    },
    {
      id: 18,
      src: '/assets/images/Wolf Tattoo Design.jpeg',
      alt: 'Wolf Tattoo',
    },
  ];

  openImage(image: GalleryImage, index: number): void {
    this.selectedImage.set(image);
    this.currentImageIndex.set(index);
  }

  private handleKey = (ev: KeyboardEvent) => {
    if (!this.selectedImage()) return;
    if (ev.key === 'ArrowRight') {
      this.nextImage();
    } else if (ev.key === 'ArrowLeft') {
      this.prevImage();
    } else if (ev.key === 'Escape') {
      this.closeModal();
    }
  };

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('keydown', this.handleKey);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined' && window.removeEventListener) {
      window.removeEventListener('keydown', this.handleKey);
    }
  }

  closeModal(): void {
    this.selectedImage.set(null);
  }

  nextImage(): void {
    const nextIndex = (this.currentImageIndex() + 1) % this.galleryImages.length;
    const nextImage = this.galleryImages[nextIndex];
    this.openImage(nextImage, nextIndex);
  }

  prevImage(): void {
    const prevIndex =
      (this.currentImageIndex() - 1 + this.galleryImages.length) % this.galleryImages.length;
    const prevImage = this.galleryImages[prevIndex];
    this.openImage(prevImage, prevIndex);
  }
}
