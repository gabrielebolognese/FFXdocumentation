import ObjectDetail from './ObjectDetail';

export default function LiteCircle() {
  return (
    <ObjectDetail
      name="Circle"
      description="A perfect circle with uniform diameter, fill color, and opacity."
      addStep="Tap the circle icon in the toolbar. A circle with diameter 100 is placed at the center."
      moveStep="Drag the object on the canvas, or edit X / Y in the Object Panel."
      properties={[
        ['Diameter', 'Uniform size. Width and height are locked together.'],
        ['Fill Color', 'Solid color via color picker.'],
        ['Rotation', 'Rotates the object (affects gradients if added later).'],
        ['Opacity', '0–100%.'],
      ]}
    />
  );
}
