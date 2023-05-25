import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-authenticated-pages',
  templateUrl: './authenticated-pages.component.html',
  styleUrls: ['./authenticated-pages.component.css']
})
export class AuthenticatedPagesComponent implements OnInit {

  public loading = this.spinnerService.loading;

  constructor(private spinnerService: SpinnerService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

}
