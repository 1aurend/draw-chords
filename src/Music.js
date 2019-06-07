import React, { useEffect, useRef, useState } from 'react'
import Vex from 'vexflow'


function Music(props) {

  const container = useRef(document.createElement('container'))
  const [loading, done] = useState(true)
  console.log(props.notes);
  console.log(props.notes.length);

  useEffect(() => {
    let VF = Vex.Flow

    let renderer = new VF.Renderer(container.current, VF.Renderer.Backends.SVG);

    renderer.resize('1000px', '500px')

    let context = renderer.getContext()

    let stave = new VF.Stave(300, 200, 400)

    stave.addClef("treble").addTimeSignature("4/4")

    stave.setContext(context).draw()

    let notes = []

    if (props.notes.length > 0) {

      for (var i = 0; i < props.notes.length; i++) {
        notes.push(new VF.StaveNote({clef: "treble", keys: [props.notes[i]], duration: "q" }))
      }

      let voice = new VF.Voice({num_beats: props.notes.length,  beat_value: 4});
      voice.addTickables(notes);

      let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

      voice.draw(context, stave);
  }



    done(false)

  }, [props.notes])


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
