import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anatomia-chorob',
  templateUrl: './anatomia-chorob.component.html',
  styleUrls: ['anatomia-chorob.component.scss']
})
export class AnatomiaChorobComponent implements OnInit {
  public womenData: object;
  public childData: object;
  public bigChildData: object;
  public bigWomenData: object;

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

  public bigWomanDots = [{
    "a": "M305.35,148.55a14.28,14.28,0,1,1,14.28-14.28A14.29,14.29,0,0,1,305.35,148.55Z",
    "b": "M305.35,124a10.28,10.28,0,1,1-10.28,10.28A10.29,10.29,0,0,1,305.35,124m0-8a18.28,18.28,0,1,0,18.28,18.28A18.28,18.28,0,0,0,305.35,116Z"
  }, {
    "a": "M267.81,55.89a14.28,14.28,0,1,1,14.28-14.28A14.29,14.29,0,0,1,267.81,55.89Z",
    "b": "M267.81,31.33a10.28,10.28,0,1,1-10.28,10.28,10.29,10.29,0,0,1,10.28-10.28m0-8a18.28,18.28,0,1,0,18.28,18.28,18.28,18.28,0,0,0-18.28-18.28Z"
  }, {
    "a": "M305.46,270.54a14.24,14.24,0,1,1,1.64-.09A15.18,15.18,0,0,1,305.46,270.54Z",
    "b": "M305.47,246a10.27,10.27,0,0,1,1.2,20.48,11,11,0,0,1-1.2.07,10.27,10.27,0,1,1,0-20.54h0m0-8h0a18.27,18.27,0,1,0,0,36.54,18.94,18.94,0,0,0,2.08-.11A18.27,18.27,0,0,0,305.47,238Z"
  }, {
    "a": "M21.1,394.57A14.31,14.31,0,1,1,35.4,380.26,14.32,14.32,0,0,1,21.1,394.57Z",
    "b": "M21.1,370a10.31,10.31,0,1,1-10.31,10.31A10.32,10.32,0,0,1,21.1,370m0-8A18.31,18.31,0,1,0,39.4,380.26,18.31,18.31,0,0,0,21.1,362Z"
  }, {
    "a": "M352.6,142.23a14.31,14.31,0,1,1,14.31-14.31A14.32,14.32,0,0,1,352.6,142.23Z",
    "b": "M352.6,117.61a10.31,10.31,0,1,1-10.31,10.31,10.32,10.32,0,0,1,10.31-10.31m0-8a18.31,18.31,0,1,0,18.31,18.31,18.31,18.31,0,0,0-18.31-18.31Z"
  }, {
    "a": "M282,102.65a14.28,14.28,0,1,1,14.28-14.28A14.29,14.29,0,0,1,282,102.65Z",
    "b": "M282,78.09a10.28,10.28,0,1,1-10.28,10.28A10.29,10.29,0,0,1,282,78.09m0-8a18.28,18.28,0,1,0,18.28,18.28A18.28,18.28,0,0,0,282,70.09Z"
  }, {
    "a": "M20.79,531.13a14.28,14.28,0,1,1,14.28-14.28A14.29,14.29,0,0,1,20.79,531.13Z",
    "b": "M20.79,506.58a10.28,10.28,0,1,1-10.28,10.28,10.29,10.29,0,0,1,10.28-10.28m0-8a18.28,18.28,0,1,0,18.28,18.28,18.28,18.28,0,0,0-18.28-18.28Z"
  }, {
    "a": "M304.12,567.75a14.31,14.31,0,1,1,14.31-14.31A14.32,14.32,0,0,1,304.12,567.75Z",
    "b": "M304.11,543.13a10.31,10.31,0,1,1-10.31,10.31,10.32,10.32,0,0,1,10.31-10.31m0-8a18.31,18.31,0,1,0,18.31,18.31,18.31,18.31,0,0,0-18.31-18.31Z"
  }, {
    "a": "M235.83,463.84a14.31,14.31,0,1,1,14.31-14.31A14.32,14.32,0,0,1,235.83,463.84Z",
    "b": "M235.83,439.23a10.31,10.31,0,1,1-10.31,10.31,10.32,10.32,0,0,1,10.31-10.31m0-8a18.31,18.31,0,1,0,18.31,18.31,18.31,18.31,0,0,0-18.31-18.31Z"
  }, {
    "a": "M275.42,463.84a14.31,14.31,0,1,1,14.31-14.31A14.32,14.32,0,0,1,275.42,463.84Z",
    "b": "M275.42,439.23a10.31,10.31,0,1,1-10.31,10.31,10.32,10.32,0,0,1,10.31-10.31m0-8a18.31,18.31,0,1,0,18.31,18.31,18.31,18.31,0,0,0-18.31-18.31Z"
  }, {
    "a": "M21.1,462.85A14.31,14.31,0,1,1,35.4,448.54,14.32,14.32,0,0,1,21.1,462.85Z",
    "b": "M21.1,438.24a10.31,10.31,0,1,1-10.31,10.31A10.32,10.32,0,0,1,21.1,438.24m0-8A18.31,18.31,0,1,0,39.4,448.54,18.31,18.31,0,0,0,21.1,430.24Z"
  }, {
    "a": "M331.82,74.94a14.31,14.31,0,1,1,14.31-14.31A14.32,14.32,0,0,1,331.82,74.94Z",
    "b": "M331.82,50.32a10.31,10.31,0,1,1-10.31,10.31,10.32,10.32,0,0,1,10.31-10.31m0-8a18.31,18.31,0,1,0,18.31,18.31,18.31,18.31,0,0,0-18.31-18.31Z"
  }];

  public bigChildDots = [{
    "a": "M731,360.56A14.54,14.54,0,1,1,745.54,346,14.55,14.55,0,0,1,731,360.56Z",
    "b": "M731,335.49A10.54,10.54,0,1,1,720.47,346,10.55,10.55,0,0,1,731,335.49m0-8A18.54,18.54,0,1,0,749.54,346,18.54,18.54,0,0,0,731,327.49Z"
  }, {
    "a": "M676.16,267.33a14.56,14.56,0,1,1,14.56-14.56A14.57,14.57,0,0,1,676.16,267.33Z",
    "b": "M676.16,242.22a10.56,10.56,0,1,1-10.56,10.56,10.57,10.57,0,0,1,10.56-10.56m0-8a18.56,18.56,0,1,0,18.56,18.56,18.56,18.56,0,0,0-18.56-18.56Z"
  }, {
    "a": "M709.33,466.82a14.54,14.54,0,1,1,14.54-14.54A14.56,14.56,0,0,1,709.33,466.82Z",
    "b": "M709.33,441.74a10.54,10.54,0,1,1-10.54,10.54,10.55,10.55,0,0,1,10.54-10.54m0-8a18.54,18.54,0,1,0,18.54,18.54,18.54,18.54,0,0,0-18.54-18.54Z"
  }, {
    "a": "M968.95,469a14.54,14.54,0,1,1,14.54-14.54A14.56,14.56,0,0,1,968.95,469Z",
    "b": "M968.95,444a10.54,10.54,0,1,1-10.54,10.54A10.55,10.55,0,0,1,968.95,444m0-8a18.54,18.54,0,1,0,18.54,18.54A18.54,18.54,0,0,0,968.95,436Z"
  }, {
    "a": "M770.14,344.35a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,770.14,344.35Z",
    "b": "M770.14,319.25a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M968.9,539.09a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,968.9,539.09Z",
    "b": "M968.9,514a10.55,10.55,0,1,1-10.55,10.55A10.56,10.56,0,0,1,968.9,514m0-8a18.55,18.55,0,1,0,18.55,18.55A18.55,18.55,0,0,0,968.9,506Z"
  }, {
    "a": "M638.64,641.48a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,638.64,641.48Z",
    "b": "M638.64,616.38a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M678.8,641.48a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,678.8,641.48Z",
    "b": "M678.8,616.38a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M968.9,609.36a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,968.9,609.36Z",
    "b": "M968.9,584.26a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M738,276.1a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,738,276.1Z",
    "b": "M738,251a10.55,10.55,0,1,1-10.55,10.55A10.56,10.56,0,0,1,738,251m0-8a18.55,18.55,0,1,0,18.55,18.55A18.55,18.55,0,0,0,738,243Z"
  }, {
    "a": "M968.9,686.65a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,968.9,686.65Z",
    "b": "M968.9,661.55a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M689.84,360.42a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,689.84,360.42Z",
    "b": "M689.84,335.31a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }, {
    "a": "M689.84,360.42a14.55,14.55,0,1,1,14.55-14.55A14.57,14.57,0,0,1,689.84,360.42Z",
    "b": "M689.84,335.31a10.55,10.55,0,1,1-10.55,10.55,10.56,10.56,0,0,1,10.55-10.55m0-8a18.55,18.55,0,1,0,18.55,18.55,18.55,18.55,0,0,0-18.55-18.55Z"
  }];


  constructor() {
    this.womenData = this.dotsWomen;
    this.childData = this.dotsChild;

    this.bigWomenData = this.bigWomanDots;
    this.bigChildData = this.bigChildDots;
  }

  ngOnInit() {
  }

}
