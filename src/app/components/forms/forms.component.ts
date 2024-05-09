import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  results = [];
  formAgendamento!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){}

  ngOnInit(){
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    this.formAgendamento = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit():void {
    console.log(this.formAgendamento.value);
  }

  onClean():void {
    this.formAgendamento.reset();
  }
}
