import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
priceForm = this.fb.group({
  name: ['', Validators.required],
  phone: ['', Validators.required],
  car: ['', Validators.required],
});

carsData = [
  {
    Image: 'img-1.png',
    c: 'Lamborghini Huracan Spyder',
    transmission: 'автомат',
    engine: 5.2,
    year: 2019 
  },

  {
    Image: 'img-2.png',
    name: 'Chevrolet Corvette',
    transmission: 'автомат',
    engine: 6.2,
    year: 2017 
  },

  {
    Image: 'img-3.png',
    name: 'Ferrari California',
    transmission: 'автомат',
    engine: 3.9,
    year: 2010 
  },

  {
    Image: 'img-4.png',
    name: 'Lamborghini Urus',
    transmission: 'автомат',
    engine: 4.0,
    year: 2019 
  },

  {
    Image: 'img-5.png',
    name: 'Audi R8',
    transmission: 'автомат',
    engine: 5.2,
    year: 2018 
  },

  {
    Image: 'img-6.png',
    name: 'Аренда Chevrolet Camaro',
    transmission: 'автомат',
    engine: 2.0,
    year: 2019 
  },

  {
    Image: 'img-7.png',
    name: 'Maserati Quattroporte',
    transmission: 'автомат',
    engine: 3.0,
    year: 2018 
  },

  {
    Image: 'img-8.png',
    name: 'Dodge Challenger',
    transmission: 'автомат',
    engine: 6.4,
    year: 2019 
  },

  {
    Image: 'img-9.png',
    name: 'Nissan GT-R',
    transmission: 'автомат',
    engine: 3.8,
    year: 2019 
  }
];

constructor(private fb: FormBuilder ){}

  goScroll(target:HTMLElement) {
    target.scrollIntoView({behavior: 'smooth'});
  }

onSubmit() {
  if (this.priceForm.valid) {
    alert('Спасибо за заявку мы свяжемся с вами!');
  }
  this.priceForm.reset();
}

}
