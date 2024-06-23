import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-farbwahl',
  templateUrl: './farbwahl.component.html',
  styleUrls: ['./farbwahl.component.scss'],
})
export class FarbwahlComponent implements OnInit{

  /** Wert für Rot-Anteil von Farbe (0..255), kann über Attribut [rotWert] vor Verwender gesetzt werden. */
  @Input() rotWert: number = 240;

  /** Wert für Grün-Anteil von Farbe (0..255), kann über Attribut [gruenWert] vor Verwender gesetzt werden. */
  @Input() gruenWert : number = 10;

  /** Wert für Blau-Anteil von Farbe (0..255), kann über Attribut [blauWert] vor Verwender gesetzt werden. */
  @Input()  blauWert : number = 10;

  /** Hex-Code der aktuelles ausgewählten Farbe. */
  public farbeHexCode : string = "";


  /**
   * Lifecycle-Methode, die aufgerufen wird, wenn die Komponente initialisiert wird.
   * Aktualisiert die Farbe.
   */
  ngOnInit() {

    this.onFarbanteilChanged();
  }


  /**
   * Event-Handler-Methode, die aufgerufen wird, wenn einer der RGB-Farbwerte über
   * eines der "ion-range"-Elemente geändert wird.
   */
  onFarbanteilChanged() {

    const HEX_BASIS_WERT = 16;

    let rotHex   = this.rotWert.toString(   HEX_BASIS_WERT );
    let gruenHex = this.gruenWert.toString( HEX_BASIS_WERT );
    let blauHex  = this.blauWert.toString(  HEX_BASIS_WERT );

    // Jeder Hex-Wert muss zweistellig sein
    if ( rotHex.length   === 1 ) { rotHex   = "0" + rotHex;   }
    if ( gruenHex.length === 1 ) { gruenHex = "0" + gruenHex; }
    if ( blauHex.length  === 1 ) { blauHex  = "0" + blauHex;  }

    this.farbeHexCode = "#" + rotHex + gruenHex + blauHex;
  }  

}
