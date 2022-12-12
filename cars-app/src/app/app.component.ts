import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

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

  carsData: any;

  constructor(private fb: FormBuilder, private appservice: AppService) {

  }

  ngOnInit() {
    this.appservice.getData(this.category).subscribe(carsData => this.carsData = carsData);
  }

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({ behavior: "smooth" });
    if (car) {
      this.priceForm.patchValue({ car: car.name });
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = { transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)' };
  }

  category: string = 'sport';
  toggleCategory(category: string) {
    this.category = category;
    this.ngOnInit();
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = { backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px' };
  }

  onSubmit() {
    if (this.priceForm.valid) {
      this.appservice.sendQuery(this.priceForm.value)
        .subscribe(
          {
            next: (Response: any) => {
              alert(Response.message);
              this.priceForm.reset();
            },
            error: (Response) => {
              alert(Response.error.message);
            }
          }
        );
    }
  }
}
