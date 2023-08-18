interface Props {
  text: string;
  color?: 'primary' | 'secondary';
  handleClick: () => void;
}

export default function Button({ text, color, handleClick }: Props) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={handleClick}>
      {text}
    </button>
  );
}
