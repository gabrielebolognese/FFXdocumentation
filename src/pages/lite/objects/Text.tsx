import ObjectDetail from './ObjectDetail';

export default function LiteText() {
  return (
    <ObjectDetail
      name="Text"
      description="A text object with configurable content, font size, weight, color, and alignment."
      addStep="Tap the text icon in the toolbar. A text box appears at center with default placeholder text. Tap it to enter edit mode and type."
      moveStep="Tap outside the text box to exit edit mode, then drag to reposition."
      properties={[
        ['Content', 'The text string displayed.'],
        ['Font Size', 'Size in points.'],
        ['Font Weight', 'Regular or Bold.'],
        ['Fill Color', 'Color of the text characters.'],
        ['Alignment', 'Left, center, or right.'],
        ['Opacity', '0–100%.'],
      ]}
    />
  );
}
