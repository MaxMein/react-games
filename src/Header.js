const Header = ({ pagename }) => {
  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <h1 onClick={handleReloadClick} className="title">
      {pagename}
    </h1>
  );
};

export default Header;
