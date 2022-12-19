import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() width = '';
  @Input() paddingTop = '';
  @Input() maxWidth = '';
  @Input() minWidth = '';
  @Input() src = '';
  @Input() alt = 'alt';
  constructor() { }
  ngOnInit(): void {
  }
  get imageConfig(){
  return {
  width:this.width,
  'padding-top':this.paddingTop,
  'max-width':this.maxWidth,
  'min-width':this.minWidth
  }
  }

}
