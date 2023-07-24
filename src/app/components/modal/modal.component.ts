import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '500px', // Ancho del modal
      // Puedes agregar más opciones de configuración aquí si es necesario
    });

    // Opcional: Puedes realizar acciones después de que se cierre el modal
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar cualquier resultado que desees
      console.log('Modal cerrado');
    });
  }

  ngOnInit(): void {
  }

}
