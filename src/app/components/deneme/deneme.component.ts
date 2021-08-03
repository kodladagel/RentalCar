import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {

  options = [{ value: '1', label: 'İlk başlık' },
  { value: '2', label: '2. başlık' },
  { value: '3', label: '3. başlık' },]
  
  selectedValue = '1500';
  selectedLabel = 'osman';

  constructor() { }

  ngOnInit(): void {

  }

  getSelectedValue(value: any) {
    console.log('Selected value:', value);
  }

  getSelectedLabel(label: any) {
    console.log('Selected value:', label);
  }

}
