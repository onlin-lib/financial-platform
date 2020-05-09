import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() options;
  @Input() optionsTitle;
  @Output() selectedValue = new EventEmitter();
  activeOption;
  ngOnInit() {
    this.options.map(option =>{
        if(option.isSelected){
          this.activeOption = option
        }
    })
  }

  dropdownChanged(selectedOption){
    this.options.map(option =>{
      if(option.title === selectedOption.title){
        this.activeOption = option
      } else{
        option.isSelected = false;
      }
  })
  this.selectedValue.emit(this.activeOption);
  }

}
