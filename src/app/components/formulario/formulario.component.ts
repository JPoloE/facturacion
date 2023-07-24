import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  selectedOption: string = 'input';

  onOptionSelected() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
