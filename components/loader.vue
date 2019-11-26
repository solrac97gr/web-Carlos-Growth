<template>
  <div>
    <div>
      <svg
        id="neuronSys"
        class="neuronSVG"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <defs>
          <filter id="goo" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
            <feBlend />
          </filter>
        </defs>

        <g id="neuronGroup" filter="url(#goo)">
          <line class="dendrites" x1="186" y1="214" x2="266" y2="275" />
          <line class="dendrites" x1="192" y1="300" x2="258" y2="300" />
          <line class="dendrites" x1="184" y1="387" x2="268" y2="324" />
          <line class="axon" x1="407" y1="300" x2="340" y2="300" />

          <g id="neuron">
            <circle class="whitespace" cx="300" cy="300" r="41" />
          </g>

          <g class="input">
            <circle class="whitespace" cx="162" cy="196" r="29" />
          </g>

          <g class="input">
            <circle class="whitespace" cx="162" cy="300" r="29" />
          </g>

          <g class="input">
            <circle class="whitespace" cx="162" cy="404" r="29" />
          </g>

          <g class="output">
            <circle class="whitespace" cx="434" cy="301" r="29.5" />
          </g>

          <g id="transit">
            <line class="signalTransit" x1="186" y1="214" x2="266" y2="275" />
            <line class="signalTransit" x1="192" y1="300" x2="258" y2="300" />
            <line class="signalTransit" x1="184" y1="387" x2="268" y2="324" />
          </g>

          <g id="topSignal" class="signal">
            <circle class="st1" cx="162" cy="195" r="20" />
          </g>

          <g id="midSignal" class="signal">
            <circle class="st1" cx="162" cy="299.7" r="20" />
          </g>

          <g id="botSignal" class="signal">
            <circle class="st1" cx="162" cy="403.7" r="20" />
          </g>

          <circle id="cenSig" cx="300" cy="300" r="26" />

          <circle id="cenSig2" cx="300" cy="300" r="26" />

          <circle id="cenSig3" cx="300" cy="300" r="26" />

          <circle id="outSig" cx="434" cy="301" r="25" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // is the group that contains all the graphics
    // and the filter
    const neuronGroup = this.select('#neuronGroup')

    const topSignal = this.select('#topSignal')
    const midSignal = this.select('#midSignal')
    const botSignal = this.select('#botSignal')

    const cenSig = this.select('#cenSig')

    const transit = this.selectAll('#transit line')

    const cenSig2 = this.select('#cenSig2')
    const cenSig3 = this.select('#cenSig3')

    const axon = this.select('.axon')
    const outTransit = axon.cloneNode()
    neuronGroup.appendChild(outTransit)

    const outSig = this.select('#outSig')
    /* eslint-disable */
      const tl = new TimelineMax({ repeat: -1 })

      tl.set(topSignal, { transformOrigin: '110%, 110%' })
      tl.set(midSignal, { transformOrigin: '110%, 50%' })
      tl.set(botSignal, { transformOrigin: '110%, 0%' })

      tl.set(cenSig2, { transformOrigin: '0%, 50%' })
      tl.set(cenSig3, { transformOrigin: '0%, 100%' })

      tl.set(outSig, { transformOrigin: '0%, 50%' })

      tl.set(outTransit, { strokeWidth: '25px' })

      tl.staggerTo([topSignal, midSignal, botSignal], 1, { scale: 0 }, 0.5)
        .staggerFromTo(
          transit,
          1.5,
          { drawSVG: '0% 10%' },
          { drawSVG: '90%, 100%' },
          0.5,
          '-=1.95'
        )
        .staggerFromTo(
          [cenSig, cenSig2, cenSig3],
          2.5,
          { scale: 0 },
          { scale: 1 },
          0.5,
          '-=2'
        )
        .set([cenSig, cenSig2, cenSig3], { transformOrigin: '110% 50%' }, '-=1')
        .to(
          [cenSig, cenSig2, cenSig3],
          2.5,
          { scale: 0, overwrite: 'none' },
          '-=1'
        )
        .fromTo(
          outTransit,
          2,
          { drawSVG: '90%, 100%' },
          { drawSVG: '0% 10%' },
          '-=2.5'
        )
        .fromTo(outSig, 1, { scale: 0 }, { scale: 1 }, '-=1.5')

      tl.timeScale(2)
    },
  methods: {
    select(s) {
      return document.querySelector(s)
    },
    selectAll(s) {
      return document.querySelectorAll(s)
    }
  }
}
</script>
<style lang="css" scoped>
#neuron {
  fill: none;
  stroke: #821d25;
  stroke-width: 11px;
}

.input {
  fill: none;
  stroke: #821d25;
  stroke-width: 11px;
}

.output {
  fill: none;
  stroke: #6c153c;
  stroke-width: 11px;
}

.axon {
  fill: none;
  stroke: #6c153c;
  stroke-width: 11px;
}

.dendrites {
  stroke: #6c153c;
  stroke-width: 11px;
}

.signalTransit {
  stroke: #6c153c;
  stroke-width: 20px;
}

.signal {
  fill: #6c153c;
}

#cenSig,
#cenSig2,
#cenSig3 {
  fill: #6c153c;
}

#outSig {
  fill: #6c153c;
}
@media (min-width: 600px){
  #neuronSys{
    width: 30%;
    margin: auto
  }
}
</style>
