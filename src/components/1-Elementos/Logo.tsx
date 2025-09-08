import anaLogoSloganUrl from '../../assets/ANA_marca_horizontal_slogan.svg';

const Logo = () => {
  return (
    <img
      src={anaLogoSloganUrl}
      alt="Logo de ANA con Slogan"
      className="h-24 w-auto" 
    />
  );
};

export default Logo;