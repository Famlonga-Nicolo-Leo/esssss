import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  imports: [],
  templateUrl: './casella-posta.html',
  styleUrl: './casella-posta.css',
})
export class CasellaPosta {
  @Input() utente!: string;
    ngOnInit() {}

   lista1 = ["frutta","frutta","frutta","frattua","frutta","frutta"]
}
