import React, { useEffect, useRef, useState } from 'react'
import Vex from 'vexflow'
import { renderToStaticMarkup } from 'react-dom/server'


function Music() {

  const container = useRef(document.createElement('container'))
  const [loading, done] = useState(true)
  console.log(container.current);

  useEffect(() => {
    let VF = Vex.Flow

    VF.STEM_HEIGHT = 35
    console.log(VF.STEM_HEIGHT);
    VF.RESOLUTION = 16384

    let renderer = new VF.Renderer(container.current, VF.Renderer.Backends.SVG);

    renderer.resize('1000px', '500px')

    let context = renderer.getContext()

    let stave = new VF.Stave(300, 200, 400)

    stave.addClef("treble").addTimeSignature("4/4")

    stave.setContext(context).draw()

    let notes = [
        new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),

        // A quarter-note D.
        new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),

        // A quarter-note rest. Note that the key (b/4) specifies the vertical
        // position of the rest.
        new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),

        // A C-Major chord.
        new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
      ];

      // Create a voice in 4/4 and add above notes
      let voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      voice.addTickables(notes);

      // Format and justify the notes to 400 pixels.
      let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

      // Render voice
      voice.draw(context, stave);

    done(false)

  }, [])


  return (
    <div ref={container} style={{
      display: "block",
      alignItems: 'center',
      padding: 10,
      width: '100%',
      height: '100%',
  }}>
  </div>
)

}

export default Music
