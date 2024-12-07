interface Props {
  totalCount: number;
}

const NavBar = ({ totalCount }: Props) => {
  return (
    <>
      <h3>Navbar:{totalCount}</h3>
    </>
  );
};

export default NavBar;
