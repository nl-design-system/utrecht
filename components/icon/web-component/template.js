export const IconExample = ({
  color = 'blue',
  icon = 'utrecht-icon-arrow',
  size = 12,
}) => `<div style="--utrecht-icon-color: ${color}; --utrecht-icon-size: ${size}px;">
  <${icon}></${icon}>
</div>`;
