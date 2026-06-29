import ObjectDetail from './ObjectDetail';

export default function LiteLine() {
  return (
    <ObjectDetail
      name="Line"
      description="A straight line with configurable length, stroke color, width, and rotation."
      addStep="Tap the line icon in the toolbar. A horizontal line is placed at center."
      moveStep="Drag to reposition. Drag endpoints to resize or rotate."
      properties={[
        ['Length', 'Distance between endpoints in pixels.'],
        ['Stroke Color', 'Color of the line.'],
        ['Stroke Width', 'Thickness in pixels.'],
        ['Rotation', 'Angle of the line (0 = horizontal).'],
        ['Opacity', '0–100%.'],
      ]}
    />
  );
}
