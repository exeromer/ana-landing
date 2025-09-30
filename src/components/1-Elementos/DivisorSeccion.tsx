import guardaSvgUrl from '../../assets/ANA_guarda.svg';

interface DivisorProps {
  colorDesde: string;
  colorHasta: string;
}
const DivisorSeccion: React.FC<DivisorProps> = ({ colorDesde, colorHasta }) => {
  const dividerStyle = {
    backgroundImage: `
      linear-gradient(to bottom, ${colorDesde}, ${colorHasta}),
      url(${guardaSvgUrl})
    `,
    backgroundRepeat: 'no-repeat, repeat-x',
    backgroundPosition: 'center, center',
    backgroundSize: '100% 100%, contain',
    backgroundBlendMode: 'multiply',
  };

  return (
    <div
      className="w-full h-16"
      style={dividerStyle}
      role="separator"
    />
  );
};

export default DivisorSeccion;