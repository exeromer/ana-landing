import guardaSvgUrl from '../../assets/ANA_guarda.svg';

const DivisorSeccion = () => {
  const dividerStyle = {
    backgroundImage: `url(${guardaSvgUrl})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
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