import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anatomia-chorob',
  templateUrl: './anatomia-chorob.component.html',
  styleUrls: ['anatomia-chorob.component.scss']
})
export class AnatomiaChorobComponent implements OnInit {
  public womenData: object;
  public childData: object;

  public dotsWomen = [
    {
      id: 1,
      x: 140,
      y: 120,
      title: 'Záškrt',
      message: 'Pacient nemôže artikulovať a prehĺtať. Neskôr obrna postihuje aj horné a dolné končatiny.',
      popoverPosition: 'right'
    },
    {
      id: 2,
      x: 126.357,
      y: 31.015,
      title: 'Tetanus',
      message: 'Postupne sa objavujú bolestivé kŕče celého tela, pri ktorých stúpa teplota. Pacient je pri plnom vedomí a príčinou smrti je väčšinou udusenie.',
      popoverPosition: 'right'
    },
    {
      id: 3,
      x: 154.858,
      y: 192.438,
      title: 'Čierny kašeľ',
      message: 'Postupne sa objavujú bolestivé kŕče celého tela, pri ktorých stúpa teplota. Pacient je pri plnom vedomí a príčinou smrti je väčšinou udusenie.',
      popoverPosition: 'right'
    },
    {
      id: 4,
      x: 15.217,
      y: 286.516,
      title: 'Osýpky',
      message: 'Podobné chrípkes charakteristickým výsevom drobných vyrážok.',
      popoverPosition: 'right'
    },
    {
      id: 5,
      x: 190.42,
      y: 96.156,
      title: 'Osýpky',
      message: 'Únava, horúčka, pocit napätia v oblasti krku spôsobený začínajúcim opuchom príušných žliaz. Chorému sa ťažko otvárajú ústa, má bolesti pri jedení, bolia ho uši a má zníženú tvorbu slín.',
      popoverPosition: 'right'
    },
    {
      id: 6,
      x: 137.092,
      y: 66.281,
      title: 'Ružienka',
      message: 'Typický je zápal spojiviek, drobné škvrnité vyrážky, ktoré sa najprv prejavia na tvári, krku a šíria sa na trup.',
      popoverPosition: 'right'
    },
    {
      id: 7,
      x: 14.982,
      y: 389.515,
      title: 'Detská obrna',
      message: 'Po zasiahnutí centrálneho nervového systému sa prejavuje ako zápalové ochorenie centrálnej nervovej sústavy. Približne jedno percento nakazených má príznaky ochrnutia alebo zápalu mozgových blán.',
      popoverPosition: 'right'
    },
    {
      id: 8,
      x: 153.765,
      y: 417.11,
      title: 'Ľudský papilloma vírus (HPV)',
      message: 'Organizmus sa vie vo väčšine prípadov s infekciou vysporiadať sám. Predrakovinové štádiá krčka maternice sa ukážu pri cytologickom vyšetrení, preto sú pravidelné prehliadkyu gynekológa dôležité.',
      popoverPosition: 'right'
    },
    {
      id: 9,
      x: 102.217,
      y: 338.782,
      title: 'Žltačka typu A',
      message: 'Pre ochorenie je typické žlté zafarbenie tkanív rôznej intenzity. Prejavuje sa žltým sfarbením kožea sklér, tmavým močom a svetlejšou stolicou.',
      popoverPosition: 'right'
    },
    {
      id: 10,
      x: 132.091,
      y: 338.782,
      title: 'Žltačka typu B',
      message: 'Zo začiatku bez príznakov, neskôr únava, slabosť, nevoľnosť ako pri chrípke. Žlté sfarbenie kože, očného bielka a tmavý moč ako príznak poškodenia pečene sa nemusia prejaviť u všetkých pacientov.',
      popoverPosition: 'right'
    },
    {
      id: 11,
      x: 15.217,
      y: 337.984,
      title: 'Ovčie kiahne',
      message: 'Najprv sa objavia na tele červené vyrážky, potom typické kožné pupence, pľuzgieriky a nakoniec chrastičky, ktoré po vyliečení a zaschnutí odpadnú.',
      popoverPosition: 'right'
    },
    {
      id: 12,
      x: 174.75,
      y: 45.391,
      title: 'Meningokoky',
      message: 'Charakteristickými prejavmi je svetloplachosť, stuhnutie šije, poruchy vnímania a apatia.',
      popoverPosition: 'right'
    },
  ];

  public dotsChild = [
    {
      id: 1,
      x: 140,
      y: 120,
      title: 'Záškrt',
      message: 'Pacient nemôže artikulovať a prehĺtať. Neskôr obrna postihuje aj horné a dolné končatiny.',
      popoverPosition: 'right'
    },
    {
      id: 2,
      x: 126.357,
      y: 31.015,
      title: 'Tetanus',
      message: 'Postupne sa objavujú bolestivé kŕče celého tela, pri ktorých stúpa teplota. Pacient je pri plnom vedomí a príčinou smrti je väčšinou udusenie.',
      popoverPosition: 'right'
    },
    {
      id: 3,
      x: 154.858,
      y: 192.438,
      title: 'Čierny kašeľ',
      message: 'Postupne sa objavujú bolestivé kŕče celého tela, pri ktorých stúpa teplota. Pacient je pri plnom vedomí a príčinou smrti je väčšinou udusenie.',
      popoverPosition: 'right'
    },
    {
      id: 4,
      x: 15.217,
      y: 286.516,
      title: 'Osýpky',
      message: 'Podobné chrípkes charakteristickým výsevom drobných vyrážok.',
      popoverPosition: 'right'
    },
    {
      id: 5,
      x: 190.42,
      y: 96.156,
      title: 'Osýpky',
      message: 'Únava, horúčka, pocit napätia v oblasti krku spôsobený začínajúcim opuchom príušných žliaz. Chorému sa ťažko otvárajú ústa, má bolesti pri jedení, bolia ho uši a má zníženú tvorbu slín.',
      popoverPosition: 'right'
    },
    {
      id: 6,
      x: 137.092,
      y: 66.281,
      title: 'Ružienka',
      message: 'Typický je zápal spojiviek, drobné škvrnité vyrážky, ktoré sa najprv prejavia na tvári, krku a šíria sa na trup.',
      popoverPosition: 'right'
    },
    {
      id: 7,
      x: 14.982,
      y: 389.515,
      title: 'Detská obrna',
      message: 'Po zasiahnutí centrálneho nervového systému sa prejavuje ako zápalové ochorenie centrálnej nervovej sústavy. Približne jedno percento nakazených má príznaky ochrnutia alebo zápalu mozgových blán.',
      popoverPosition: 'right'
    },
    {
      id: 8,
      x: 153.765,
      y: 417.11,
      title: 'Ľudský papilloma vírus (HPV)',
      message: 'Organizmus sa vie vo väčšine prípadov s infekciou vysporiadať sám. Predrakovinové štádiá krčka maternice sa ukážu pri cytologickom vyšetrení, preto sú pravidelné prehliadkyu gynekológa dôležité.',
      popoverPosition: 'right'
    },
    {
      id: 9,
      x: 102.217,
      y: 338.782,
      title: 'Žltačka typu A',
      message: 'Pre ochorenie je typické žlté zafarbenie tkanív rôznej intenzity. Prejavuje sa žltým sfarbením kožea sklér, tmavým močom a svetlejšou stolicou.',
      popoverPosition: 'right'
    },
    {
      id: 10,
      x: 132.091,
      y: 338.782,
      title: 'Žltačka typu B',
      message: 'Zo začiatku bez príznakov, neskôr únava, slabosť, nevoľnosť ako pri chrípke. Žlté sfarbenie kože, očného bielka a tmavý moč ako príznak poškodenia pečene sa nemusia prejaviť u všetkých pacientov.',
      popoverPosition: 'right'
    },
    {
      id: 11,
      x: 15.217,
      y: 337.984,
      title: 'Ovčie kiahne',
      message: 'Najprv sa objavia na tele červené vyrážky, potom typické kožné pupence, pľuzgieriky a nakoniec chrastičky, ktoré po vyliečení a zaschnutí odpadnú.',
      popoverPosition: 'right'
    },
    {
      id: 12,
      x: 174.75,
      y: 45.391,
      title: 'Meningokoky',
      message: 'Charakteristickými prejavmi je svetloplachosť, stuhnutie šije, poruchy vnímania a apatia.',
      popoverPosition: 'right'
    },
  ];

  constructor() {
    this.womenData = this.dotsWomen;
    this.childData = this.dotsChild;
  }

  ngOnInit() {
  }

}
