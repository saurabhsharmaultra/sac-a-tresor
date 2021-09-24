import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands: any;

  constructor() { }

  ngOnInit(): void {
    this.brands = [
      {
        name: 'Gucci',
        description: 'Gucci is an Italian luxury fashion house based in Florence founded in 1921 by Guccio Gucci. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.',
        img: 'assets/images/logos/gucci-logo.png'
      },
      {
        name: 'Burberry',
        description: 'Burberry is a British luxury fashion house headquartered in London, England. It currently designs and distributes handbags, trench coats, leather goods, footwear, fashion accessories, eyewear and fragrances',
        img: 'assets/images/logos/burberry-logo.jpg'
      },
      {
        name: 'Versace',
        description: 'Gianni Versace usually referred to simply as Versace, is an Italian luxury fashion company and trade name founded by Gianni Versace in 1978.\n' +
          '\n' +
          'Michael Kors Holdings acquired all outstanding shares in Gianni Versace keeping Donatella Versace as head of creative design.',
        img: 'assets/images/logos/versace-logo.png'
      },
      {
        name: 'Prada',
        description: 'Prada S.p.A. is an Italian luxury fashion house that was founded in 1913 by Mario Prada. It specializes in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories.',
        img: 'assets/images/logos/prada-logo.jpg'
      },
      {
        name: 'Valentino',
        description: 'Valentino S.p.A. is an Italian luxury fashion house founded in 1960 by Valentino Garavani and part of Valentino Fashion Group. Since October 2008, the creative director is Pier Paolo Piccioli. Valentino is headquartered in Milan.',
        img: 'assets/images/logos/valentino-logo.jpg'
      }
/*      {
        name: 'Dolce and Gabana',
        description: 'Dolce & Gabbana is an Italian luxury fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana.',
        img: 'assets/images/logos/dolce-gabbana-logo.jpg'
      },
      {
        name: 'Tory Burch',
        description: 'Tory Burch is an American fashion brand named after its founder. She is a designer, businesswoman, and philanthropist. She is the Executive Chairman and Chief Creative Officer of her own brand, Tory Burch LLC.',
        img: 'assets/images/logos/tory-burch-logo.png'
      },
      {
        name: 'Marc Jacob',
        description: 'Marc Jacob is an American fashion brand named after its founder. He was the creative director of the French design house Louis Vuitton from 1997 to 2014',
        img: 'assets/images/logos/marc-jacob-logo.png'
      },
      {
        name: 'Michael Kors',
        description: 'Michael Kors is an American fashion brand named after its founder. It sells men\'s and women\'s accessories, watches, jewellery, footwear, and fragrance. Michael Kors, Jimmy Choo, and Versace are the three founder-led brands under Capri Holdings Limited',
        img: 'assets/images/logos/michael-kors-logo.jpg'
      },
      {
        name: 'Emporio Armani',
        description: 'Armani is an Italian luxury fashion house founded by Giorgio Armani. The brand markets luxury products under several labels such as Giorgio Armani, Armani Collezioni, Emporio Armani (EA7), Armani Jeans and Armani Exchange ',
        img: 'assets/images/logos/armani-logo.png'
      },
      {
        name: 'Karl Lagerfeld',
        description: '\n' +
          'Karl Lagerfeld is a French fashion brand named after its founder. He was known as the creative director of the French fashion house Chanel',
        img: 'assets/images/logos/karl-logo.png'
      },*/
    ]
  }
}
