import { Footer as FbFooter } from "flowbite-react";

const Footer = () => {
  return (
    <FbFooter container className="bg-slate-800">
      <div className="flex justify-center w-full">
        <FbFooter.Copyright
          href="#"
          by="Eden Babayov"
          year={2024}
          className="text-slate-100"
        />
      </div>
    </FbFooter>
  );
};

export default Footer;
