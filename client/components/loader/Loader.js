import Image from "next/image";

export const Loader = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-offset-3 is-3">
          <Image src="/loader.gif" alt="Loader" width={60} height={50} />
          Loading...
        </div> 
      </div>
    </div>
  );
};

export default Loader;
