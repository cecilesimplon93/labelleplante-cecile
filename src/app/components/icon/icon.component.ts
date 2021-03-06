import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})


  export class IconComponent implements OnInit {
    @Input() iconName!: string;
    @Input() iconSize!: number;
    @Input() iconColor!: string;
    constructor() { }
  
    ngOnInit(): void {
    }
  
}
