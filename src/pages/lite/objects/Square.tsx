import ObjectDetail from './ObjectDetail';

export default function LiteSquare() {
  return (
    <ObjectDetail
      name="Square"
      description="A rectangle with configurable width, height, fill, and corner radius."
      addStep="Tap the square icon in the toolbar. A 100×100 rectangle is placed at the center of the canvas."
      moveStep="Drag the object on the canvas, or edit the X / Y fields in the Object Panel."
      properties={[
        ['Width', 'In pixels. Drag the handle or type in the panel.'],
        ['Height', 'In pixels. Drag the handle or type in the panel.'],
        ['Fill Color', 'Solid color. Tap the color swatch to open the picker.'],
        ['Rotation', '0–360 degrees.'],
        ['Opacity', '0–100%. Affects the whole object.'],
        ['Corner Radius', 'Rounds the corners. 0 = sharp.'],
      ]}
    />
  );
}
