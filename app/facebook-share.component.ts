import { Component, Input, AfterContentInit, ViewChild } from '@angular/core';

import { EncodePipe } from './encode.pipe';

@Component({
  selector: 'facebook-share',
  pipes: [EncodePipe],
  template: `
    <div #div
         class="fb-share-button"
         [attr.data-href]="url"
         data-layout="button"
         data-size="small"
         data-mobile-iframe="true"
         ><a class="fb-xfbml-parse-ignore"
             target="_blank"
             href="https://www.facebook.com/sharer/sharer.php?u={{url | encode}}&amp;src=sdkpreparse"
             >Share</a></div>
  `,
})
export class FacebookShareComponent implements AfterContentInit {
  @ViewChild('div') div;
  @Input() url: string;

  ngAfterContentInit() {
    FB.XFBML.parse(this.div.nativeElement.parentNode);
  }
}
