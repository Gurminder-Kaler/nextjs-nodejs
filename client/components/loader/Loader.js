import Image from "next/image";

export const Loader = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <Image src="/loader.gif" alt="Loader" width={60} height={50} />
        </div>
        <div className="column is-6"> Loading....</div>
      </div>
    </div>
  );
};

export default Loader;
