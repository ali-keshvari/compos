import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() isExistFooter = true;
  @Input() defaultButton = true;
  
  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    //document.body.removeChild(this.el.nativeElement);
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.onClose.emit();
  }
}
