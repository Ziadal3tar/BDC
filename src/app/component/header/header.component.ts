import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.videoPlayer.nativeElement.muted = true;
  }

}
