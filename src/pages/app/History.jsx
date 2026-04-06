import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar";

const History = () => {

  const { t } = useTranslation();

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto mt-12">

        <h1 className="text-3xl">

          {t("history.title")}

        </h1>

      </div>

    </div>

  );

};

export default History;
