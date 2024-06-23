import { Component } from '@angular/core';

@Component({
  selector: 'app-pheumonia',
  templateUrl: './pheumonia.component.html',
  styleUrls: ['./pheumonia.component.css']
})
export class PheumoniaComponent {
  imageSrc: string | ArrayBuffer | null = null;
  prediction: string | null = null;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);

      // Simulate a prediction result
      setTimeout(() => {
        this.prediction = 'Person is safe.';
      }, 1000);
    }
  }
}
