import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterUnitsService } from 'src/app/services/filter-units.service';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
<<<<<<< HEAD
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;
=======
export class FormsComponent {
  results: Location[] = [];
  filteredResults:Location[] = [];
  formAgendamento!: FormGroup;
>>>>>>> 512440af4778d26e5503834c4477f4e80ffda278

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService) { }

<<<<<<< HEAD
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
=======
  ngOnInit(){
    this.formAgendamento = this.formBuilder.group({
>>>>>>> 512440af4778d26e5503834c4477f4e80ffda278
      hour: '',
      showClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
<<<<<<< HEAD
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
=======
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit():void {
    if(!this.formAgendamento.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else {
      this.filteredResults = this.results;
    }
>>>>>>> 512440af4778d26e5503834c4477f4e80ffda278
  }

  onClean(): void {
    this.formGroup.reset();
  }

}
